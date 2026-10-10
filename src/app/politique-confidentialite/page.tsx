import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Lens by Steven",
    description: "Politique de confidentialité et protection des données personnelles — Lens by Steven, Steven Dufour photographe à Auch.",
    alternates: { canonical: "https://www.lensbysteven.fr/politique-confidentialite" },
    robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
    return (
        <main className="min-h-screen bg-dark text-white font-sans overflow-x-hidden">
            <Navbar />

            <section className="pt-40 pb-24 px-6" style={{ background: "linear-gradient(180deg, #0D1520 0%, #1B2A4A 40%, #0D1520 100%)" }}>
                <div className="container mx-auto max-w-3xl">
                    <p className="font-serif text-xs uppercase tracking-[0.35em] text-gold/70 mb-4">RGPD & Vie privée</p>
                    <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-12 leading-tight">
                        Politique de Confidentialité
                    </h1>

                    <div className="space-y-10 text-cream/85 font-light leading-relaxed">

                        {/* Intro */}
                        <div className="border border-gold/20 bg-gold/[0.03] rounded-[2px] p-6">
                            <p className="text-sm">
                                La protection de vos données personnelles est une priorité. Cette politique explique quelles données sont collectées via le site <strong className="text-white font-medium">www.lensbysteven.fr</strong>, pourquoi elles le sont, et comment vous pouvez exercer vos droits. Elle est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                            </p>
                        </div>

                        {/* 1. Responsable */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">1. Responsable du traitement</h2>
                            <div className="border-l-2 border-gold/30 pl-6 space-y-2">
                                <p><span className="text-cream/50 text-sm">Nom :</span> Steven Dufour</p>
                                <p><span className="text-cream/50 text-sm">Statut :</span> Auto-entrepreneur</p>
                                <p><span className="text-cream/50 text-sm">Adresse :</span> <span className="text-gold font-medium">[À COMPLÉTER]</span>, 32000 Auch, France</p>
                                <p><span className="text-cream/50 text-sm">Email :</span> sd.photo32@gmail.com</p>
                                <p><span className="text-cream/50 text-sm">Téléphone :</span> 06 72 21 39 48</p>
                            </div>
                        </div>

                        {/* 2. Données collectées */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">2. Données collectées</h2>
                            <p className="mb-4">Le seul point de collecte de données personnelles sur ce site est le <strong className="text-white font-medium">formulaire de contact</strong>. Les données suivantes sont collectées :</p>
                            <ul className="space-y-2 pl-4">
                                {[
                                    "Nom et prénom",
                                    "Adresse e-mail",
                                    "Type de prestation demandée",
                                    "Contenu du message",
                                    "Date d'envoi du message",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="text-gold mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm text-cream/60">Aucune autre donnée (adresse IP, localisation, comportement de navigation) n&apos;est collectée ou conservée.</p>
                        </div>

                        {/* 3. Finalité */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">3. Finalité du traitement</h2>
                            <p>
                                Les données collectées via le formulaire de contact sont utilisées <strong className="text-white font-medium">uniquement</strong> pour :
                            </p>
                            <ul className="space-y-2 pl-4 mt-4">
                                {[
                                    "Répondre à votre demande de contact ou de devis",
                                    "Établir un échange professionnel dans le cadre d'une prestation photographique",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="text-gold mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4">Ces données ne sont <strong className="text-white font-medium">jamais utilisées</strong> à des fins commerciales, marketing ou publicitaires, et ne sont <strong className="text-white font-medium">jamais cédées ou vendues</strong> à des tiers.</p>
                        </div>

                        {/* 4. Base légale */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">4. Base légale</h2>
                            <p>
                                Le traitement de vos données est fondé sur votre <strong className="text-white font-medium">consentement explicite</strong>, exprimé au moment de l&apos;envoi du formulaire de contact (article 6.1.a du RGPD). Vous pouvez retirer ce consentement à tout moment en nous contactant.
                            </p>
                        </div>

                        {/* 5. Durée de conservation */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">5. Durée de conservation</h2>
                            <p>
                                Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum <strong className="text-white font-medium">3 ans</strong> à compter du dernier contact, conformément aux recommandations de la CNIL. Passé ce délai, vos données sont supprimées.
                            </p>
                        </div>

                        {/* 6. Destinataires */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">6. Destinataires des données</h2>
                            <p className="mb-4">Vos données transitent par les outils techniques suivants, dans le seul but d&apos;acheminer votre message :</p>
                            <ul className="space-y-3 pl-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">—</span>
                                    <span><strong className="text-white font-medium">Vercel Inc.</strong> (hébergeur du site) — San Francisco, USA. Traitement des données en transit uniquement.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1">—</span>
                                    <span><strong className="text-white font-medium">n8n</strong> (outil d&apos;automatisation) — utilisé pour router les messages du formulaire vers la boîte mail de Steven Dufour. Les données ne sont pas stockées durablement par cet outil.</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-sm text-cream/60">Aucune autre tierce partie n&apos;a accès à vos données personnelles.</p>
                        </div>

                        {/* 7. Vos droits */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">7. Vos droits</h2>
                            <p className="mb-4">Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
                            <ul className="space-y-2 pl-4">
                                {[
                                    "Droit d'accès à vos données",
                                    "Droit de rectification de données inexactes",
                                    "Droit à l'effacement (« droit à l'oubli »)",
                                    "Droit à la limitation du traitement",
                                    "Droit à la portabilité de vos données",
                                    "Droit d'opposition au traitement",
                                    "Droit de retirer votre consentement à tout moment",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="text-gold mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 border border-white/10 bg-white/[0.02] rounded-[2px] p-5">
                                <p className="text-sm">Pour exercer vos droits, contactez Steven Dufour directement :</p>
                                <p className="mt-2"><a href="mailto:sd.photo32@gmail.com" className="text-gold hover:underline font-medium">sd.photo32@gmail.com</a></p>
                                <p className="text-cream/50 text-xs mt-2">Une réponse vous sera apportée dans un délai maximum de 30 jours.</p>
                            </div>
                        </div>

                        {/* 8. Cookies */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">8. Cookies</h2>
                            <p>
                                Ce site n&apos;utilise <strong className="text-white font-medium">aucun cookie de tracking</strong>, de publicité ou d&apos;analyse comportementale. Aucun outil d&apos;analytics (Google Analytics, etc.) n&apos;est installé sur ce site. Seuls d&apos;éventuels cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être présents — ils ne collectent aucune donnée personnelle.
                            </p>
                        </div>

                        {/* 9. CNIL */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">9. Réclamation auprès de la CNIL</h2>
                            <p>
                                Si vous estimez que le traitement de vos données personnelles n&apos;est pas conforme à la réglementation, vous avez le droit d&apos;introduire une réclamation auprès de la <strong className="text-white font-medium">CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :
                            </p>
                            <p className="mt-3">
                                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.cnil.fr</a>
                                {" "}— 3 Place de Fontenoy, 75007 Paris
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 text-cream/40 text-xs">
                            Dernière mise à jour : octobre 2026
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
