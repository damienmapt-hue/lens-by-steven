"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TextReveal from "./TextReveal";

interface Tier {
    name: string;
    tagline: string;
    price: string;
    from?: boolean;
    items: string[];
    featured?: boolean;
}

interface Category {
    id: string;
    label: string;
    note: string;
    tiers: Tier[];
}

const categories: Category[] = [
    {
        id: "mariage",
        label: "Mariage",
        note: "Options : séance engagement, séance Day After, album photo, heures supplémentaires, deuxième photographe.",
        tiers: [
            { name: "Collection Essentielle", tagline: "L'essentiel du jour J", price: "600 €", from: true, items: ["Cérémonie", "Photos de couple et de groupe", "Moments importants", "Galerie numérique"] },
            { name: "Collection Journée", tagline: "Du matin au cocktail", price: "950 €", from: true, featured: true, items: ["Préparatifs et cérémonie", "Photos de couple et de groupe", "Cocktail et début de réception", "Galerie numérique"] },
            { name: "Collection Intégrale", tagline: "Journée complète", price: "1 300 €", from: true, items: ["Des préparatifs à la soirée", "Cérémonie complète", "Couple, cocktail, réception", "Galerie numérique complète"] },
        ],
    },
    {
        id: "evenementiel",
        label: "Événementiel",
        note: "Au-delà de 6 heures, le tarif est établi sur devis personnalisé.",
        tiers: [
            { name: "2 heures", tagline: "Événement court", price: "150 €", items: ["Jusqu'à 2 h de présence", "Reportage de l'événement", "Photos retouchées", "Galerie numérique"] },
            { name: "4 heures", tagline: "Reportage complet", price: "250 €", featured: true, items: ["Jusqu'à 4 h de présence", "Moments forts et détails", "Photos retouchées", "Galerie numérique"] },
            { name: "6 heures", tagline: "Grande journée", price: "350 €", items: ["Jusqu'à 6 h de présence", "Photos de groupe et spontanées", "Photos retouchées", "Galerie numérique"] },
        ],
    },
    {
        id: "sport",
        label: "Sport",
        note: "Tarif préférentiel pour les clubs et sportifs en échange d'une utilisation des images, étudié au cas par cas.",
        tiers: [
            { name: "Pack Découverte", tagline: "Idéal pour démarrer", price: "25 €", items: ["Présence sur la rencontre", "5 photos retouchées", "Livraison numérique HD"] },
            { name: "Pack Joueur", tagline: "Plus de souvenirs", price: "40 €", items: ["Présence sur la rencontre", "10 à 15 photos retouchées", "Livraison numérique HD"] },
            { name: "Pack Performance", tagline: "Galerie complète", price: "55 €", items: ["Présence sur la rencontre", "20 à 25 photos retouchées", "Galerie complète"] },
            { name: "Formule Équipe", tagline: "Clubs et associations", price: "100 €", from: true, featured: true, items: ["Photos d'action et individuelles", "Photo d'équipe", "Avant et après-match", "Galerie complète"] },
        ],
    },
    {
        id: "portrait",
        label: "Portrait",
        note: "Photo supplémentaire : 8 €, achat possible après la séance.",
        tiers: [
            { name: "Portrait Essentiel", tagline: "Séance courte", price: "50 €", items: ["30 à 45 min de séance", "1 personne", "5 photos retouchées"] },
            { name: "Portrait Standard", tagline: "Séance complète", price: "80 €", featured: true, items: ["Environ 1 h de séance", "Changement de tenue possible", "10 photos retouchées"] },
            { name: "Portrait Premium", tagline: "Séance personnalisée", price: "120 €", items: ["Jusqu'à 1 h 30, seul ou en couple", "Plusieurs lieux et tenues", "Environ 20 photos retouchées"] },
        ],
    },
    {
        id: "entreprise",
        label: "Entreprise",
        note: "Une formule mensuelle est possible pour un contenu régulier, sur mesure.",
        tiers: [
            { name: "Pack Essentiel", tagline: "Premier pas", price: "120 €", from: true, items: ["Jusqu'à 1 h de prise de vue", "Locaux, équipe, activité", "Environ 10 photos retouchées"] },
            { name: "Pack Communication", tagline: "Site web et réseaux", price: "200 €", from: true, featured: true, items: ["Jusqu'à 2 h de prise de vue", "Portraits d'équipe, produits", "20 à 30 photos retouchées"] },
            { name: "Pack Premium", tagline: "Banque d'images", price: "350 €", from: true, items: ["Jusqu'à 4 h de prise de vue", "Locaux, équipe, services", "40 à 60 photos retouchées"] },
        ],
    },
];

export default function TarifsPreview() {
    const [activeId, setActiveId] = useState(categories[0].id);
    const active = categories.find((c) => c.id === activeId) ?? categories[0];
    const cols = active.tiers.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

    return (
        <section id="tarifs" className="relative pt-28 pb-32 md:pt-44 md:pb-48 overflow-hidden scroll-mt-20" style={{ background: "#EFE6D5" }}>
            {/* Diagonale du haut : le sombre de la section précédente descend en biais */}
            <div aria-hidden className="pointer-events-none absolute -top-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

            <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
                {/* En-tête */}
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 md:mb-16">
                    <div className="lg:col-span-7 min-w-0">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="block text-[#8a6a1c] font-medium tracking-[0.35em] text-xs uppercase mb-4"
                        >
                            Tarifs
                        </motion.span>
                        <TextReveal delay={0.1}>
                            <h2 className="font-display text-[1.9rem] leading-[1.2] sm:text-5xl lg:text-[clamp(2.4rem,4.4vw,3.8rem)] text-navy">
                                <span className="block whitespace-nowrap">Des prix clairs,</span>
                                <span className="block whitespace-nowrap">sans surprise.</span>
                            </h2>
                        </TextReveal>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-5 min-w-0 text-navy/75 font-normal leading-relaxed max-w-md"
                    >
                        Choisissez votre type de séance pour voir ce qui est inclus. Un projet particulier ? Chaque formule peut être adaptée, le devis est gratuit.
                    </motion.p>
                </div>

                {/* Sélecteur de prestation */}
                <div
                    role="tablist"
                    aria-label="Type de prestation"
                    className="flex gap-2 overflow-x-auto pb-2 mb-8 md:mb-10 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" }}
                >
                    {categories.map((c) => {
                        const on = c.id === activeId;
                        return (
                            <button
                                key={c.id}
                                role="tab"
                                aria-selected={on}
                                onClick={() => setActiveId(c.id)}
                                className={`relative shrink-0 px-5 md:px-7 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 min-h-[44px] ${on ? "text-dark" : "text-navy/70 hover:text-navy"}`}
                            >
                                {on && (
                                    <motion.span
                                        layoutId="tarif-tab"
                                        className="absolute inset-0 bg-gold"
                                        transition={{ type: "spring", stiffness: 400, damping: 36 }}
                                    />
                                )}
                                {!on && <span className="absolute inset-0 border border-navy/25" />}
                                <span className="relative font-medium">{c.label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Formules */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <ul
                            role="tabpanel"
                            className={`grid grid-cols-1 sm:grid-cols-2 ${cols} border-b border-navy/15 lg:divide-x lg:divide-navy/15`}
                        >
                            {active.tiers.map((t) => (
                                <li
                                    key={t.name}
                                    className={`relative flex flex-col p-6 md:p-9 border-t sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-navy/15 lg:[&:nth-child(even)]:border-l-0 ${
                                        t.featured
                                            ? "border-t-navy/15 bg-gradient-to-b from-white/70 to-transparent"
                                            : "border-t-navy/15"
                                    }`}
                                >
                                    {t.featured && <span className="absolute -top-px inset-x-0 h-[2px] bg-gold" />}
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#8a6a1c] font-medium mb-1">{t.name}</p>
                                    <p className="text-navy/60 text-sm font-normal mb-5 md:mb-8">{t.tagline}</p>

                                    <p className="mb-6 md:mb-8 flex items-baseline gap-2 text-navy whitespace-nowrap">
                                        {t.from && <span className="text-xs uppercase tracking-widest text-navy/60">dès</span>}
                                        <span className={`font-display text-4xl md:text-6xl ${active.tiers.length === 4 ? "lg:text-5xl" : ""} leading-none tracking-tight tabular-nums`}>{t.price}</span>
                                    </p>

                                    <ul className="space-y-2.5 md:space-y-3">
                                        {t.items.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm font-normal text-navy/85 leading-snug">
                                                <span className="mt-[0.6em] block h-px w-3 bg-[#8a6a1c] shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-sm text-navy/65 font-normal max-w-3xl">{active.note}</p>
                    </motion.div>
                </AnimatePresence>

                {/* Bas de section : déplacements + appels à l'action */}
                <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-navy/15 pt-8 md:pt-10">
                    <p className="lg:col-span-5 text-navy/75 text-sm font-normal leading-relaxed">
                        <span className="text-navy font-semibold">Déplacement :</span> inclus jusqu&apos;à 15 km d&apos;Auch, puis +5 € (15 à 30 km), +10 € (30 à 50 km), au-delà sur devis.
                    </p>
                    <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center lg:justify-end gap-5 sm:gap-8">
                        <Link
                            href="/#contact"
                            className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-navy text-cream hover:bg-gold hover:text-dark transition-colors duration-300 uppercase tracking-widest text-xs font-medium whitespace-nowrap"
                        >
                            Demander un devis gratuit
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/tarifs"
                            scroll={true}
                            className="group inline-flex items-center justify-center gap-3 text-navy hover:text-[#8a6a1c] transition-colors uppercase tracking-widest text-xs font-medium whitespace-nowrap"
                        >
                            Tout le détail des tarifs
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
