import { NextRequest, NextResponse } from 'next/server';

// ─── Rate limiting in-memory (par IP, 5 req/minute) ───────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);
    if (!record || now > record.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
        return true;
    }
    if (record.count >= RATE_LIMIT) return false;
    record.count++;
    return true;
}

// ─── Validation serveur ────────────────────────────────────────────────────
const ALLOWED_TYPES = ['sport', 'portrait', 'business', 'event', 'other'];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body: unknown): string | null {
    if (!body || typeof body !== 'object') return 'Données invalides.';
    const { name, email, type, message } = body as Record<string, unknown>;

    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 100)
        return 'Nom invalide (2-100 caractères).';
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email) || email.length > 200)
        return 'Email invalide.';
    if (!type || typeof type !== 'string' || !ALLOWED_TYPES.includes(type))
        return 'Type de prestation invalide.';
    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000)
        return 'Message invalide (10-2000 caractères).';

    return null;
}

// ─── Handler ───────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: 'Trop de tentatives. Réessayez dans une minute.' },
            { status: 429 }
        );
    }

    // Parse body
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Format JSON invalide.' }, { status: 400 });
    }

    // Validation serveur
    const validationError = validateBody(body);
    if (validationError) {
        return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // URL depuis variable d'environnement (jamais dans le code)
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('N8N_WEBHOOK_URL non configurée');
        return NextResponse.json({ error: 'Configuration serveur manquante.' }, { status: 500 });
    }

    // Envoi vers n8n avec uniquement les champs validés
    const { name, email, type, message } = body as Record<string, string>;
    const payload = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        type,
        message: message.trim(),
        date: new Date().toISOString(),
    };

    try {
        const n8nResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n a répondu avec le statut : ${n8nResponse.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json(
            { error: "Échec de l'envoi. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
