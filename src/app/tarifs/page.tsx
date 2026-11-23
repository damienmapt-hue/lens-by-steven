"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";

interface Tier {
    name: string;
    tagline: string;
    price: string;
    from?: boolean;
    note?: string;
    items: string[];
    featured?: boolean;
}

interface Category {
    id: string;
    label: string;
    title: string;
    intro: string;
    note: string;
    options?: string[];
    tiers: Tier[];
}

const categories: Category[] = [
    {
        id: "mariage",
        label: "Mariage",
        title: "Mariage",
        intro: "Chaque mariage est unique. Ces collections s'adaptent à votre journée, de la cérémonie à la soirée.",
        note: "Des options peuvent compléter la collection choisie.",
        options: ["Séance engagement", "Séance Day After", "Album photo", "Heures supplémentaires", "Deuxième photographe"],
        tiers: [
            { name: "Collection Essentielle", tagline: "L'essentiel du jour J", price: "600 €", from: true, items: ["Cérémonie", "Photos de couple", "Photos de groupe", "Moments importants", "Photos retouchées", "Galerie numérique"] },
            { name: "Collection Journée", tagline: "Du matin au cocktail", price: "950 €", from: true, featured: true, items: ["Préparatifs + cérémonie", "Photos de couple", "Photos de groupe", "Cocktail + début de réception", "Photos retouchées", "Galerie numérique"] },
            { name: "Collection Intégrale", tagline: "Journée complète", price: "1 300 €", from: true, items: ["Des préparatifs à la soirée", "Cérémonie complète", "Photos de couple", "Cocktail, réception, soirée", "Photos retouchées", "Galerie numérique complète"] },
        ],
    },
    {
        id: "evenementiel",
        label: "Événementiel",
        title: "Événementiel",
        intro: "Anniversaire, soirée, inauguration, événement associatif ou professionnel. Facturation au temps de présence.",
        note: "Au-delà de 6 heures, le tarif est établi sur devis personnalisé.",
        tiers: [
            { name: "2 heures", tagline: "Événement court", price: "150 €", items: ["Jusqu'à 2 h de présence", "Reportage de l'événement", "Sélection des meilleures images", "Photos retouchées", "Galerie numérique"] },
            { name: "4 heures", tagline: "Reportage complet", price: "250 €", featured: true, items: ["Jusqu'à 4 h de présence", "Reportage complet", "Moments forts et détails", "Photos retouchées", "Galerie numérique"] },
            { name: "6 heures", tagline: "Grande journée", price: "350 €", items: ["Jusqu'à 6 h de présence", "Reportage complet", "Photos de groupe et spontanées", "Photos retouchées", "Galerie numérique"] },
        ],
    },
    {
        id: "sport",
        label: "Sport",
        title: "Photographie sportive",
        intro: "Le tarif reflète le temps de présence, le type de sport et le travail de retouche.",
        note: "Collaborations : tarif préférentiel pour les clubs et sportifs en échange d'une utilisation des images, étudié au cas par cas.",
        tiers: [
            { name: "Pack Découverte", tagline: "Idéal pour démarrer", price: "25 €", items: ["Présence sur la rencontre", "5 photos retouchées", "Sélection des meilleures images", "Livraison numérique HD"] },
            { name: "Pack Joueur", tagline: "Plus de souvenirs", price: "40 €", items: ["Présence sur la rencontre", "10 à 15 photos retouchées", "Sélection des meilleures actions", "Livraison numérique HD"] },
            { name: "Pack Performance", tagline: "Galerie complète", price: "55 €", items: ["Présence sur la rencontre", "20 à 25 photos retouchées", "Actions et moments forts", "Galerie complète"] },
            { name: "Formule Équipe", tagline: "Clubs et associations", price: "100 €", from: true, featured: true, note: "Selon sport, durée et nombre de joueurs", items: ["Photos d'action", "Photos individuelles", "Photo d'équipe", "Avant et après-match", "Galerie numérique complète"] },
        ],
    },
    {
        id: "portrait",
        label: "Portrait",
        title: "Portraits authentiques",
        intro: "Séances naturelles pour mettre en valeur une personne, un couple ou un projet.",
        note: "Photo supplémentaire : 8 €, achat possible après la séance.",
        tiers: [
            { name: "Portrait Essentiel", tagline: "Séance courte", price: "50 €", items: ["30 à 45 min de séance", "1 personne", "5 photos retouchées", "Livraison numérique"] },
            { name: "Portrait Standard", tagline: "Séance complète", price: "80 €", featured: true, items: ["Environ 1 h de séance", "Plusieurs poses", "Changement de tenue possible", "10 photos retouchées", "Livraison numérique"] },
            { name: "Portrait Premium", tagline: "Séance personnalisée", price: "120 €", items: ["Jusqu'à 1 h 30, seul ou en couple", "Plusieurs lieux ou ambiances", "Plusieurs tenues", "Environ 20 photos retouchées", "Livraison numérique"] },
        ],
    },
    {
        id: "entreprise",
        label: "Entreprise",
        title: "Entreprises et commerces",
        intro: "Valorisez votre image de marque avec des visuels professionnels pour le web et les réseaux.",
        note: "Une formule mensuelle est possible pour un contenu régulier, sur mesure.",
        tiers: [
            { name: "Pack Essentiel", tagline: "Premier pas", price: "120 €", from: true, items: ["Jusqu'à 1 h de prise de vue", "Locaux, équipe, activité", "Environ 10 photos retouchées", "Livraison numérique"] },
            { name: "Pack Communication", tagline: "Site web et réseaux", price: "200 €", from: true, featured: true, items: ["Jusqu'à 2 h de prise de vue", "Locaux et portraits d'équipe", "Activité, produits, services", "20 à 30 photos retouchées", "Livraison numérique"] },
            { name: "Pack Premium", tagline: "Banque d'images", price: "350 €", from: true, items: ["Jusqu'à 4 h de prise de vue", "Locaux, équipe, portraits", "Produits et services", "40 à 60 photos retouchées", "Livraison numérique"] },
        ],
    },
];

const travel = [
    { range: "0 – 15 km", price: "Inclus", strong: true },
    { range: "15 – 30 km", price: "+ 5 €" },
    { range: "30 – 50 km", price: "+ 10 €" },
    { range: "Au-delà de 50 km", price: "Sur devis" },
];

export default function TarifsPage() {
    const [activeId, setActiveId] = useState(categories[0].id);
    const active = categories.find((c) => c.id === activeId) ?? categories[0];
    const cols = active.tiers.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-clip">
            <Navbar />

            {/* En-tête avec photo */}
            <section className="relative min-h-[62dvh] flex items-end pt-36 pb-24 md:pb-32 overflow-hidden">
                <Image
                    src="/portfolio/series/mariage/mariage-22.jpg"
                    alt=""
                    fill
                    priority
                    quality={80}
                    sizes="100vw"
                    className="object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/30 to-transparent" />

                <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="block text-[#E6CB7E] font-medium tracking-[0.35em] text-xs uppercase mb-5"
                    >
                        Tarifs et prestations
                    </motion.span>
                    <h1 className="font-display text-[2.2rem] leading-[1.2] sm:text-5xl lg:text-7xl text-white">
                        <span className="block whitespace-nowrap">Des prix clairs,</span>
                        <span className="block whitespace-nowrap text-gold">sans surprise.</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 max-w-lg text-cream/90 text-base md:text-lg leading-relaxed"
                    >
                        Des tarifs transparents et accessibles. Chaque prestation peut être adaptée, le devis personnalisé est gratuit.
                    </motion.p>
                </div>
            </section>

            {/* Formules, sur fond beige entre deux diagonales */}
            <section className="relative pt-28 pb-32 md:pt-44 md:pb-48 overflow-hidden" style={{ background: "#EFE6D5" }}>
                <div aria-hidden className="pointer-events-none absolute -top-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]" />
                <div aria-hidden className="pointer-events-none absolute -bottom-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

                <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
                    {/* Sélecteur */}
                    <div
                        role="tablist"
                        aria-label="Type de prestation"
                        className="flex gap-2 overflow-x-auto pb-2 mb-10 md:mb-14 [&::-webkit-scrollbar]:hidden"
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
                                            layoutId="tarifs-page-tab"
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

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="grid lg:grid-cols-12 gap-4 lg:gap-12 items-end mb-10 md:mb-14">
                                <h2 className="lg:col-span-7 font-display text-[1.9rem] leading-[1.2] sm:text-5xl text-navy">{active.title}</h2>
                                <p className="lg:col-span-5 text-navy/75 leading-relaxed max-w-md">{active.intro}</p>
                            </div>

                            <ul role="tabpanel" className={`grid grid-cols-1 sm:grid-cols-2 ${cols} border-b border-navy/15 lg:divide-x lg:divide-navy/15`}>
                                {active.tiers.map((t) => (
                                    <li
                                        key={t.name}
                                        className="relative flex flex-col p-6 md:p-9 border-t border-t-navy/15 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-navy/15 lg:[&:nth-child(even)]:border-l-0 bg-gradient-to-b from-transparent to-transparent data-[featured=true]:from-white/70"
                                        data-featured={t.featured ? "true" : "false"}
                                    >
                                        {t.featured && <span className="absolute -top-px inset-x-0 h-[2px] bg-gold" />}
                                        <p className="text-[11px] uppercase tracking-[0.25em] text-[#8a6a1c] font-medium mb-1">{t.name}</p>
                                        <p className="text-navy/60 text-sm mb-5 md:mb-8">{t.tagline}</p>

                                        <p className="mb-2 flex items-baseline gap-2 text-navy whitespace-nowrap">
                                            {t.from && <span className="text-xs uppercase tracking-widest text-navy/60">dès</span>}
                                            <span className={`font-display text-4xl md:text-6xl ${active.tiers.length === 4 ? "lg:text-5xl" : ""} leading-none tracking-tight tabular-nums`}>{t.price}</span>
                                        </p>
                                        <p className="mb-6 md:mb-8 min-h-[1.25rem] text-xs text-navy/60">{t.note}</p>

                                        <ul className="space-y-2.5 md:space-y-3">
                                            {t.items.map((item) => (
                                                <li key={item} className="flex gap-3 text-sm text-navy/85 leading-snug">
                                                    <span className="mt-[0.6em] block h-px w-3 bg-[#8a6a1c] shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-5 text-sm text-navy/65 max-w-3xl">{active.note}</p>
                            {active.options && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {active.options.map((o) => (
                                        <span key={o} className="text-xs border border-navy/25 text-navy/75 px-3 py-1.5">{o}</span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Déplacements + contact */}
            <section className="relative pt-12 pb-24 md:pb-32" style={{ background: "linear-gradient(180deg, #0D1520, #16233b 60%, #1B2A4A)" }}>
                <div className="container mx-auto px-5 md:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        <div className="lg:col-span-5">
                            <span className="block text-gold tracking-[0.3em] text-xs uppercase mb-4">Déplacements</span>
                            <TextReveal delay={0.1}>
                                <h2 className="font-display text-[1.9rem] sm:text-4xl leading-[1.2] text-white">
                                    <span className="block">Au départ d&apos;Auch,</span>
                                    <span className="block text-gold">partout dans le Gers.</span>
                                </h2>
                            </TextReveal>
                        </div>
                        <ul className="lg:col-span-7 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-2">
                            {travel.map((t) => (
                                <li key={t.range}>
                                    <p className="text-cream/70 text-xs uppercase tracking-[0.2em] mb-2">{t.range}</p>
                                    <p className={`font-display text-2xl md:text-3xl ${t.strong ? "text-gold" : "text-white"}`}>{t.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-16 md:mt-24 border-t border-white/10 pt-12 md:pt-16 grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <span className="block text-gold tracking-[0.3em] text-xs uppercase mb-4">Devis gratuit</span>
                            <h2 className="font-display text-[2rem] sm:text-5xl leading-[1.2] text-white">Un projet en tête ?</h2>
                            <p className="mt-4 text-cream/85 max-w-md leading-relaxed">Chaque prestation peut être adaptée à vos besoins. Parlez-moi de votre projet, je vous réponds rapidement.</p>
                        </div>
                        <div className="lg:col-span-5 lg:text-right">
                            <Link
                                href="/#contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
                            >
                                Contacter Steven
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
