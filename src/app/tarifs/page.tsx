"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, User, Briefcase, CalendarHeart, Heart, Car, Check, Mail, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
    { id: "sport", label: "Sport", icon: Camera },
    { id: "portrait", label: "Portrait", icon: User },
    { id: "entreprise", label: "Entreprise", icon: Briefcase },
    { id: "evenementiel", label: "Événementiel", icon: CalendarHeart },
    { id: "mariage", label: "Mariage", icon: Heart },
];

function PricingCard({
    index,
    badge,
    title,
    price,
    priceNote,
    items,
    highlight = false,
    delay = 0,
}: {
    index: number;
    badge: string;
    title: string;
    price: string;
    priceNote?: string;
    items: string[];
    highlight?: boolean;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={`relative flex flex-col rounded-[2px] overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                highlight
                    ? "bg-gradient-to-br from-navy via-navy/90 to-dark border border-gold/40 glow-gold"
                    : "bg-gradient-to-br from-white/[0.04] to-dark border border-white/[0.08] hover:border-gold/20"
            }`}
        >
            {/* Numéro en fond */}
            <span className="absolute top-4 right-5 font-display text-7xl font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                {String(index).padStart(2, "0")}
            </span>

            {/* Gold top line on highlight */}
            {highlight && <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />}

            <div className="p-7 md:p-8 flex flex-col flex-1">
                {/* Badge */}
                <span className={`inline-block mb-5 text-[10px] uppercase tracking-[0.25em] font-medium w-fit px-3 py-1 rounded-[2px] ${
                    highlight ? "bg-gold/20 text-gold border border-gold/30" : "bg-white/[0.05] text-cream/82 border border-white/[0.08]"
                }`}>
                    {badge}
                </span>

                {/* Prix — très visible */}
                <div className="mb-2">
                    <span className={`font-display font-bold leading-none ${
                        highlight ? "text-gradient-gold text-5xl md:text-6xl" : "text-white text-4xl md:text-5xl"
                    }`}>
                        {price}
                    </span>
                </div>
                {priceNote && (
                    <p className="text-cream/40 text-xs mb-4 font-light">{priceNote}</p>
                )}

                {/* Titre */}
                <p className="font-display text-sm font-bold uppercase tracking-[0.12em] text-cream/82 mb-5">
                    {title}
                </p>

                <div className="w-8 h-px bg-gold/30 mb-5 group-hover:w-16 transition-all duration-500" />

                {/* Items */}
                <ul className="space-y-2.5 flex-1">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-cream/85 text-sm font-light leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-gold/60 mt-0.5 shrink-0" strokeWidth={2.5} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
    return (
        <div className="mb-14">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white leading-tight mb-3">{children}</h2>
            {sub && <p className="text-cream/80 font-light text-sm max-w-xl leading-relaxed">{sub}</p>}
        </div>
    );
}

export default function TarifsPage() {
    const [activeTab, setActiveTab] = useState("sport");

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-24 md:pt-52 md:pb-28 px-6 overflow-hidden">
                {/* Gradient glow arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-navy/40 to-dark pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto max-w-3xl relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-xs uppercase tracking-[0.35em] text-gold/70 mb-6"
                    >
                        Lens by Steven · Photographe à Auch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-6xl md:text-8xl text-white leading-[0.95] mb-6"
                    >
                        Tarifs &{" "}
                        <span className="text-gradient-gold">Prestations</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-cream/82 font-light max-w-lg mx-auto leading-relaxed"
                    >
                        Tarifs transparents et accessibles. Chaque prestation peut être adaptée — devis personnalisé gratuit sur demande.
                    </motion.p>
                </div>
            </section>

            {/* Séparateur dégradé */}
            <div className="w-full h-px gold-line opacity-30" />

            {/* Tabs */}
            <div className="sticky top-[72px] z-40 bg-dark/95 backdrop-blur-md border-b border-white/[0.05] px-6 py-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex gap-2 overflow-x-auto scrollbar-none flex-wrap">
                        {categories.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-bold border rounded-[2px] transition-all duration-300 whitespace-nowrap ${
                                    activeTab === id
                                        ? "border-gold text-gold bg-gold/[0.08]"
                                        : "border-white/10 text-cream/40 hover:border-white/25 hover:text-cream/70"
                                }`}
                            >
                                <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="bg-gradient-to-b from-dark via-navy/20 to-dark">
                <div className="container mx-auto px-6 max-w-5xl py-20">

                    {/* SPORT */}
                    {activeTab === "sport" && (
                        <div>
                            <SectionTitle sub="Le tarif reflète le temps de présence, le type de sport et le travail de retouche.">
                                Photographie Sportive
                            </SectionTitle>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <PricingCard index={1} badge="Pack Découverte" title="Idéal pour démarrer" price="25 €"
                                    items={["Présence sur la rencontre", "5 photos retouchées", "Sélection des meilleures images", "Livraison numérique HD"]}
                                    delay={0} />
                                <PricingCard index={2} badge="Pack Joueur" title="Plus de souvenirs" price="40 €"
                                    items={["Présence sur la rencontre", "10 à 15 photos retouchées", "Sélection des meilleures actions", "Livraison numérique HD"]}
                                    delay={0.05} />
                                <PricingCard index={3} badge="Pack Performance" title="Galerie complète" price="55 €"
                                    items={["Présence sur la rencontre", "20 à 25 photos retouchées", "Actions et moments forts", "Galerie complète", "Livraison numérique HD"]}
                                    delay={0.1} />
                                <PricingCard index={4} badge="Formule Équipe" title="Clubs & associations" price="Dès 100 €"
                                    priceNote="Selon sport, durée et nombre de joueurs"
                                    items={["Photos d'action", "Photos individuelles", "Photo d'équipe", "Avant et après-match", "Galerie numérique complète"]}
                                    highlight delay={0.15} />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
                                className="mt-6 border border-white/[0.06] bg-navy/20 rounded-[2px] p-5 flex items-center gap-4">
                                <span className="text-gold text-xl">🤝</span>
                                <p className="text-cream/82 text-sm font-light">
                                    <strong className="text-cream/80 font-medium">Collaborations</strong> — tarif préférentiel pour clubs et sportifs en échange d&apos;utilisation des images. Chaque demande étudiée au cas par cas.
                                </p>
                            </motion.div>
                        </div>
                    )}

                    {/* PORTRAIT */}
                    {activeTab === "portrait" && (
                        <div>
                            <SectionTitle sub="Séances naturelles pour mettre en valeur une personne, un couple ou un projet.">
                                Portraits Authentiques
                            </SectionTitle>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <PricingCard index={1} badge="Portrait Essentiel" title="Séance courte" price="50 €"
                                    items={["30 à 45 min de séance", "1 personne", "5 photos retouchées", "Livraison numérique"]}
                                    delay={0} />
                                <PricingCard index={2} badge="Portrait Standard" title="Séance complète" price="80 €"
                                    items={["~1h de séance", "1 personne", "Plusieurs poses", "Changement de tenue possible", "10 photos retouchées", "Livraison numérique"]}
                                    highlight delay={0.05} />
                                <PricingCard index={3} badge="Portrait Premium" title="Séance personnalisée" price="120 €"
                                    items={["Jusqu'à 1h30", "1 personne ou couple", "Plusieurs lieux ou ambiances", "Plusieurs tenues", "~20 photos retouchées", "Livraison numérique"]}
                                    delay={0.1} />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                className="mt-6 border border-gold/20 bg-gold/[0.04] rounded-[2px] p-5 text-center">
                                <p className="text-cream/85 text-sm font-light">
                                    <span className="text-gold font-bold">Photo supplémentaire — 8 €</span>
                                    <span className="text-cream/40"> · Achat possible après la séance</span>
                                </p>
                            </motion.div>
                        </div>
                    )}

                    {/* ENTREPRISE */}
                    {activeTab === "entreprise" && (
                        <div>
                            <SectionTitle sub="Valorisez votre image de marque avec des visuels professionnels pour le web et les réseaux.">
                                Entreprises & Commerces
                            </SectionTitle>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <PricingCard index={1} badge="Pack Essentiel" title="Premier pas" price="Dès 120 €"
                                    items={["Jusqu'à 1h de prise de vue", "Photos des locaux", "Photos de l'équipe", "Photos de l'activité", "~10 photos retouchées", "Livraison numérique"]}
                                    delay={0} />
                                <PricingCard index={2} badge="Pack Communication" title="Site web & réseaux" price="Dès 200 €"
                                    items={["Jusqu'à 2h de prise de vue", "Locaux + portraits équipe", "Activité + produits/services", "20 à 30 photos retouchées", "Livraison numérique"]}
                                    highlight delay={0.05} />
                                <PricingCard index={3} badge="Pack Premium" title="Banque d'images" price="Dès 350 €"
                                    items={["Jusqu'à 4h de prise de vue", "Locaux, équipe, portraits", "Produits et services", "40 à 60 photos retouchées", "Livraison numérique"]}
                                    delay={0.1} />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                className="mt-6 border border-white/[0.06] bg-navy/20 rounded-[2px] p-5 text-center">
                                <p className="text-cream/82 text-sm font-light">
                                    <strong className="text-cream/80 font-medium">Formule mensuelle disponible</strong> — contenu régulier pour votre communication. Tarif sur mesure.
                                </p>
                            </motion.div>
                        </div>
                    )}

                    {/* ÉVÉNEMENTIEL */}
                    {activeTab === "evenementiel" && (
                        <div>
                            <SectionTitle sub="Anniversaire, soirée, inauguration, événement associatif ou professionnel. Facturation au temps de présence.">
                                Événementiel
                            </SectionTitle>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <PricingCard index={1} badge="2 heures" title="Événement court" price="150 €"
                                    items={["Jusqu'à 2h de présence", "Reportage de l'événement", "Sélection des meilleures images", "Photos retouchées", "Galerie numérique"]}
                                    delay={0} />
                                <PricingCard index={2} badge="4 heures" title="Reportage complet" price="250 €"
                                    items={["Jusqu'à 4h de présence", "Reportage complet", "Moments forts et détails", "Photos retouchées", "Galerie numérique"]}
                                    highlight delay={0.05} />
                                <PricingCard index={3} badge="6 heures" title="Grande journée" price="350 €"
                                    items={["Jusqu'à 6h de présence", "Reportage complet", "Photos de groupe et spontanées", "Photos retouchées", "Galerie numérique"]}
                                    delay={0.1} />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                className="mt-6 border border-white/[0.06] bg-navy/20 rounded-[2px] p-5 text-center">
                                <p className="text-cream/82 text-sm font-light">
                                    <strong className="text-cream/80 font-medium">Plus de 6 heures</strong> — tarif établi sur devis personnalisé.
                                </p>
                            </motion.div>
                        </div>
                    )}

                    {/* MARIAGE */}
                    {activeTab === "mariage" && (
                        <div>
                            <SectionTitle sub="Chaque mariage est unique. Ces collections s&apos;adaptent à votre journée, de la cérémonie à la soirée.">
                                Mariage
                            </SectionTitle>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <PricingCard index={1} badge="Collection Essentielle" title="L'essentiel du jour J" price="Dès 600 €"
                                    items={["Cérémonie", "Photos de couple", "Photos de groupe", "Moments importants", "Photos retouchées", "Galerie numérique"]}
                                    delay={0} />
                                <PricingCard index={2} badge="Collection Journée" title="Du matin au cocktail" price="Dès 950 €"
                                    items={["Préparatifs + cérémonie", "Photos de couple", "Photos de groupe", "Cocktail + début réception", "Photos retouchées", "Galerie numérique"]}
                                    highlight delay={0.05} />
                                <PricingCard index={3} badge="Collection Intégrale" title="Journée complète" price="Dès 1 300 €"
                                    items={["Préparatifs → soirée", "Cérémonie complète", "Photos de couple", "Cocktail, réception, soirée", "Photos retouchées", "Galerie numérique complète"]}
                                    delay={0.1} />
                            </div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                className="mt-6 border border-white/[0.06] bg-navy/20 rounded-[2px] p-5">
                                <p className="text-cream/82 text-sm font-light text-center mb-3">
                                    <strong className="text-cream/80 font-medium">Options disponibles</strong>
                                </p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["Séance engagement", "Séance Day After", "Album photo", "Heures supplémentaires", "Deuxième photographe"].map((opt) => (
                                        <span key={opt} className="text-xs border border-gold/20 text-gold/70 px-3 py-1 rounded-[2px]">{opt}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Frais de déplacement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-16 border border-white/[0.06] bg-gradient-to-br from-navy/30 to-dark rounded-[2px] p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Car className="w-5 h-5 text-gold/60" strokeWidth={1.5} />
                            <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide">Frais de déplacement</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {[
                                { range: "0 – 15 km", price: "Inclus", highlight: true },
                                { range: "15 – 30 km", price: "+ 5 €", highlight: false },
                                { range: "30 – 50 km", price: "+ 10 €", highlight: false },
                                { range: "> 50 km", price: "Sur devis", highlight: false },
                            ].map(({ range, price, highlight }) => (
                                <div key={range} className={`text-center p-5 rounded-[2px] border ${highlight ? "border-gold/30 bg-gold/[0.06]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                                    <p className={`font-display font-bold text-base md:text-lg mb-1 ${highlight ? "text-gold" : "text-white"}`}>{range}</p>
                                    <p className={`text-sm font-medium ${highlight ? "text-gold/80" : "text-cream/75"}`}>{price}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-16 relative overflow-hidden rounded-[2px] border border-gold/20 bg-gradient-to-br from-navy via-navy/80 to-dark p-10 md:p-14 text-center"
                    >
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <div className="absolute inset-0 bg-gold/[0.02] pointer-events-none" />
                        <p className="font-serif text-xs uppercase tracking-[0.35em] text-gold/70 mb-4 relative z-10">Devis gratuit</p>
                        <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 relative z-10 leading-tight">
                            Un projet en tête ?
                        </h3>
                        <p className="text-cream/80 font-light mb-8 max-w-md mx-auto relative z-10">
                            Chaque prestation peut être adaptée à vos besoins spécifiques.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 bg-gold text-dark hover:bg-cream transition-all duration-300 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold relative z-10"
                        >
                            <Mail className="w-4 h-4" />
                            Contactez Steven
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
