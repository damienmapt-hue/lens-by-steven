import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // On envoie les données vers n8n (le serveur Vercel peut parler à du HTTP sans problème)
        const n8nResponse = await fetch("http://72.62.176.154:5678/webhook/lens-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!n8nResponse.ok) {
            throw new Error(`n8n responded with status: ${n8nResponse.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Contact Error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
