import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Mentions Légales | Lens by Steven",
    description: "Mentions légales du site Lens by Steven — Steven Dufour, photographe professionnel à Auch (Gers).",
    alternates: { canonical: "https://www.lensbysteven.fr/mentions-legales" },
    robots: { index: false },
};

export default function MentionsLegalesPage() {
    return (
        <main className="min-h-screen bg-dark text-white font-sans overflow-x-hidden">
            <Navbar />

            <section className="pt-40 pb-24 px-6" style={{ background: "linear-gradient(180deg, #0D1520 0%, #1B2A4A 40%, #0D1520 100%)" }}>
                <div className="container mx-auto max-w-3xl">
                    <p className="font-serif text-xs uppercase tracking-[0.35em] text-gold/70 mb-4">Informations légales</p>
                    <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-12 leading-tight">
                        Mentions Légales
                    </h1>

                    <div className="space-y-10 text-cream/85 font-light leading-relaxed">

                        {/* 1. Éditeur */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">1. Éditeur du site</h2>
                            <div className="border-l-2 border-gold/30 pl-6 space-y-2">
                                <p><span className="text-cream/50 text-sm">Nom :</span> Steven Dufour</p>
                                <p><span className="text-cream/50 text-sm">Activité :</span> Photographe professionnel</p>
                                <p><span className="text-cream/50 text-sm">Statut :</span> Auto-entrepreneur (Micro-entreprise)</p>
                                <p><span className="text-cream/50 text-sm">SIREN :</span> 109 810 481</p>
                                <p><span className="text-cream/50 text-sm">SIRET :</span> 109 810 481 00019</p>
                                <p><span className="text-cream/50 text-sm">Adresse :</span> 19 rue Montebello, 32000 Auch, France</p>
                                <p><span className="text-cream/50 text-sm">Téléphone :</span> 06 72 21 39 48</p>
                                <p><span className="text-cream/50 text-sm">Email :</span> sd.photo32@gmail.com</p>
                                <p><span className="text-cream/50 text-sm">Site web :</span> www.lensbysteven.fr</p>
                            </div>
                        </div>

                        {/* 2. Hébergeur */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">2. Hébergeur du site</h2>
                            <div className="border-l-2 border-gold/30 pl-6 space-y-2">
                                <p><span className="text-cream/50 text-sm">Société :</span> Vercel Inc.</p>
                                <p><span className="text-cream/50 text-sm">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
                                <p><span className="text-cream/50 text-sm">Site web :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">vercel.com</a></p>
                            </div>
                        </div>

                        {/* 3. Propriété intellectuelle */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">3. Propriété intellectuelle</h2>
                            <p>
                                L&apos;ensemble du contenu de ce site (photographies, textes, design, logo) est la propriété exclusive de Steven Dufour, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation écrite préalable, est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
                            </p>
                        </div>

                        {/* 4. Responsabilité */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">4. Limitation de responsabilité</h2>
                            <p>
                                Steven Dufour s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, il ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. En conséquence, l&apos;utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                            </p>
                        </div>

                        {/* 5. Données personnelles */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">5. Données personnelles</h2>
                            <p>
                                Ce site collecte des données personnelles via le formulaire de contact (nom, adresse e-mail, message). Ces données sont utilisées uniquement pour répondre aux demandes de contact et ne sont pas transmises à des tiers. Pour en savoir plus, consultez notre{" "}
                                <Link href="/politique-confidentialite" className="text-gold hover:underline">Politique de confidentialité</Link>.
                            </p>
                        </div>

                        {/* 6. Cookies */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">6. Cookies</h2>
                            <p>
                                Ce site n&apos;utilise pas de cookies de tracking ou de publicité. Seuls des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être utilisés. Aucune donnée de navigation n&apos;est collectée à des fins publicitaires ou analytiques.
                            </p>
                        </div>

                        {/* 7. Droit applicable */}
                        <div>
                            <h2 className="font-display font-bold text-xl text-white mb-4 uppercase tracking-wide">7. Droit applicable</h2>
                            <p>
                                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
