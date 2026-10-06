"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, User, Briefcase, CalendarHeart, Heart, Car, Check, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
    { id: "sport", label: "Sport", icon: Camera },
    { id: "portrait", label: "Portrait", icon: User },
    { id: "entreprise", label: "Entreprise", icon: Briefcase },
    { id: "evenementiel", label: "Événementiel", icon: CalendarHeart },
    { id: "mariage", label: "Mariage", icon: Heart },
];

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
};

function PricingCard({
    badge,
    title,
    price,
    priceNote,
    items,
    highlight = false,
    delay = 0,
}: {
    badge?: string;
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
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={`relative flex flex-col rounded-[2px] border p-8 group overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                highlight
                    ? "border-gold/40 bg-gold/[0.04]"
                    : "border-white/[0.08] bg-white/[0.02]"
            }`}
        >
            {/* Gold accent left */}
            <div className={`absolute left-0 top-0 w-[2px] h-0 bg-gold transition-all duration-700 ease-out group-hover:h-full ${highlight ? "h-full" : ""}`} />

            {badge && (
                <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.25em] text-gold font-serif border border-gold/30 px-3 py-1 w-fit">
                    {badge}
                </span>
            )}

            <div className="mb-6">
                <p className="font-serif text-xs uppercase tracking-[0.2em] text-cream/50 mb-2">{title}</p>
                <p className="font-display text-3xl md:text-4xl text-white">
                    {price}
                </p>
                {priceNote && (
                    <p className="text-cream/50 text-xs mt-1 font-light">{priceNote}</p>
                )}
            </div>

            <div className="w-8 h-px bg-gold/30 mb-6 group-hover:w-16 transition-all duration-500" />

            <ul className="space-y-3 flex-1">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-cream/70 text-sm font-light leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-gold/70 mt-0.5 shrink-0" strokeWidth={2} />
                        {item}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">{children}</h2>
            <div className="w-12 h-px bg-gold mx-auto" />
        </div>
    );
}

export default function TarifsPage() {
    const [activeTab, setActiveTab] = useState("sport");

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 text-center px-6">
                <motion.span {...fadeUp} className="block font-serif text-gold/80 text-xs uppercase tracking-[0.3em] mb-4">
                    Lens by Steven
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-display text-5xl md:text-7xl text-white mb-6"
                >
                    Tarifs & Prestations
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-cream/60 font-light max-w-xl mx-auto leading-relaxed"
                >
                    Des tarifs transparents et accessibles. Chaque prestation peut être adaptée à vos besoins — un devis personnalisé gratuit est disponible sur demande.
                </motion.p>
            </section>

            {/* Tabs */}
            <section className="sticky top-[72px] z-40 bg-dark/95 backdrop-blur-md border-b border-white/[0.06] px-6 py-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex gap-2 overflow-x-auto scrollbar-none justify-center flex-wrap">
                        {categories.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium border rounded-[2px] transition-all duration-300 whitespace-nowrap ${
                                    activeTab === id
                                        ? "border-gold text-gold bg-gold/[0.06]"
                                        : "border-white/10 text-cream/50 hover:border-white/30 hover:text-cream/80"
                                }`}
                            >
                                <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content */}
            <div className="container mx-auto px-6 max-w-5xl py-20">

                {/* SPORT */}
                {activeTab === "sport" && (
                    <div>
                        <SectionTitle>Photographie Sportive</SectionTitle>
                        <p className="text-center text-cream/50 font-light text-sm max-w-2xl mx-auto mb-14 -mt-6 leading-relaxed">
                            Le tarif reflète le temps de présence, le type de sport et le travail de sélection et de retouche.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <PricingCard
                                badge="Pack Découverte"
                                title="Idéal pour découvrir"
                                price="25 €"
                                items={[
                                    "Présence sur la rencontre",
                                    "Environ 5 photos retouchées",
                                    "Sélection des meilleures images",
                                    "Livraison numérique haute qualité",
                                ]}
                                delay={0}
                            />
                            <PricingCard
                                badge="Pack Joueur"
                                title="Plus de souvenirs"
                                price="40 €"
                                items={[
                                    "Présence sur la rencontre",
                                    "10 à 15 photos retouchées",
                                    "Sélection des meilleures actions",
                                    "Livraison numérique haute qualité",
                                ]}
                                delay={0.05}
                            />
                            <PricingCard
                                badge="Pack Performance"
                                title="Galerie complète"
                                price="55 €"
                                items={[
                                    "Présence sur la rencontre",
                                    "20 à 25 photos retouchées",
                                    "Meilleures actions et moments forts",
                                    "Galerie complète",
                                    "Livraison numérique haute qualité",
                                ]}
                                delay={0.1}
                            />
                            <PricingCard
                                badge="Formule Équipe"
                                title="Clubs & équipes"
                                price="À partir de 100 €"
                                priceNote="Tarif selon le sport, la durée et le nombre de joueurs"
                                items={[
                                    "Photos d'action",
                                    "Photos individuelles des joueurs",
                                    "Photos d'équipe",
                                    "Avant-match et après-match",
                                    "Galerie numérique complète",
                                ]}
                                highlight
                                delay={0.15}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 border border-white/[0.06] bg-white/[0.02] rounded-[2px] p-6 text-center"
                        >
                            <p className="text-cream/60 text-sm font-light">
                                <span className="text-gold font-medium">Collaborations disponibles</span> — tarif préférentiel pour les clubs et sportifs en échange d&apos;utilisation des images pour la communication de Lens by Steven. Chaque demande est étudiée au cas par cas.
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* PORTRAIT */}
                {activeTab === "portrait" && (
                    <div>
                        <SectionTitle>Portraits Authentiques</SectionTitle>
                        <p className="text-center text-cream/50 font-light text-sm max-w-2xl mx-auto mb-14 -mt-6 leading-relaxed">
                            Séances naturelles et personnalisées pour mettre en valeur une personne, un couple ou un projet.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PricingCard
                                badge="Portrait Essentiel"
                                title="Séance courte"
                                price="50 €"
                                items={[
                                    "30 à 45 min de séance",
                                    "1 personne",
                                    "5 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                delay={0}
                            />
                            <PricingCard
                                badge="Portrait Standard"
                                title="Séance complète"
                                price="80 €"
                                items={[
                                    "Environ 1h de séance",
                                    "1 personne",
                                    "Plusieurs poses et situations",
                                    "Changement de tenue possible",
                                    "10 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                highlight
                                delay={0.05}
                            />
                            <PricingCard
                                badge="Portrait Premium"
                                title="Séance personnalisée"
                                price="120 €"
                                items={[
                                    "Jusqu'à 1h30 de séance",
                                    "1 personne ou couple",
                                    "Plusieurs lieux ou ambiances",
                                    "Plusieurs tenues possibles",
                                    "Environ 20 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                delay={0.1}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 border border-gold/20 bg-gold/[0.03] rounded-[2px] p-6 text-center"
                        >
                            <p className="text-cream/70 text-sm font-light">
                                <span className="text-gold font-medium">Photo supplémentaire — 8 €</span>
                                <span className="text-cream/50"> · Possibilité d&apos;acheter des photos supplémentaires après la séance</span>
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* ENTREPRISE */}
                {activeTab === "entreprise" && (
                    <div>
                        <SectionTitle>Entreprises & Commerces</SectionTitle>
                        <p className="text-center text-cream/50 font-light text-sm max-w-2xl mx-auto mb-14 -mt-6 leading-relaxed">
                            Valorisez votre image de marque avec des visuels professionnels pensés pour le web, les réseaux sociaux et la communication.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PricingCard
                                badge="Pack Essentiel"
                                title="Premier pas"
                                price="À partir de 120 €"
                                items={[
                                    "Jusqu'à 1h de prise de vue",
                                    "Photos des locaux",
                                    "Photos de l'équipe",
                                    "Photos de l'activité",
                                    "Environ 10 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                delay={0}
                            />
                            <PricingCard
                                badge="Pack Communication"
                                title="Site web & réseaux"
                                price="À partir de 200 €"
                                items={[
                                    "Jusqu'à 2h de prise de vue",
                                    "Photos des locaux",
                                    "Portraits de l'équipe",
                                    "Photos de l'activité",
                                    "Photos de produits ou services",
                                    "20 à 30 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                highlight
                                delay={0.05}
                            />
                            <PricingCard
                                badge="Pack Premium"
                                title="Banque d'images complète"
                                price="À partir de 350 €"
                                items={[
                                    "Jusqu'à 4h de prise de vue",
                                    "Locaux, équipe, portraits",
                                    "Produits et services",
                                    "Photos d'activité",
                                    "40 à 60 photos retouchées",
                                    "Livraison numérique",
                                ]}
                                delay={0.1}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 border border-white/[0.06] bg-white/[0.02] rounded-[2px] p-6 text-center"
                        >
                            <p className="text-cream/60 text-sm font-light">
                                <span className="text-gold font-medium">Formule mensuelle disponible</span> — contenu régulier pour alimenter votre communication. Tarif sur mesure selon vos besoins.
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* ÉVÉNEMENTIEL */}
                {activeTab === "evenementiel" && (
                    <div>
                        <SectionTitle>Événementiel</SectionTitle>
                        <p className="text-center text-cream/50 font-light text-sm max-w-2xl mx-auto mb-14 -mt-6 leading-relaxed">
                            Anniversaire, soirée, inauguration, événement associatif ou professionnel. Facturation selon le temps de présence.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PricingCard
                                badge="2 heures"
                                title="Événement court"
                                price="150 €"
                                items={[
                                    "Jusqu'à 2h de présence",
                                    "Reportage de l'événement",
                                    "Sélection des meilleures images",
                                    "Photos retouchées",
                                    "Galerie numérique",
                                ]}
                                delay={0}
                            />
                            <PricingCard
                                badge="4 heures"
                                title="Reportage complet"
                                price="250 €"
                                items={[
                                    "Jusqu'à 4h de présence",
                                    "Reportage complet",
                                    "Moments forts et détails",
                                    "Photos retouchées",
                                    "Galerie numérique",
                                ]}
                                highlight
                                delay={0.05}
                            />
                            <PricingCard
                                badge="6 heures"
                                title="Grande journée"
                                price="350 €"
                                items={[
                                    "Jusqu'à 6h de présence",
                                    "Reportage complet",
                                    "Moments forts",
                                    "Photos de groupe et spontanées",
                                    "Photos retouchées",
                                    "Galerie numérique",
                                ]}
                                delay={0.1}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 border border-white/[0.06] bg-white/[0.02] rounded-[2px] p-6 text-center"
                        >
                            <p className="text-cream/60 text-sm font-light">
                                <span className="text-gold font-medium">Événement de plus de 6 heures</span> — tarif établi sur devis personnalisé.
                            </p>
                        </motion.div>
                    </div>
                )}

                {/* MARIAGE */}
                {activeTab === "mariage" && (
                    <div>
                        <SectionTitle>Mariage</SectionTitle>
                        <p className="text-center text-cream/50 font-light text-sm max-w-2xl mx-auto mb-14 -mt-6 leading-relaxed">
                            Chaque mariage est unique. Ces collections s&apos;adaptent à votre journée, de la cérémonie à la soirée.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PricingCard
                                badge="Collection Essentielle"
                                title="L'essentiel du jour J"
                                price="À partir de 600 €"
                                items={[
                                    "Cérémonie",
                                    "Photos de couple",
                                    "Photos de groupe",
                                    "Moments importants de la journée",
                                    "Photos retouchées",
                                    "Galerie numérique",
                                ]}
                                delay={0}
                            />
                            <PricingCard
                                badge="Collection Journée"
                                title="Du matin au cocktail"
                                price="À partir de 950 €"
                                items={[
                                    "Préparatifs",
                                    "Cérémonie",
                                    "Photos de couple",
                                    "Photos de groupe",
                                    "Cocktail",
                                    "Début de réception",
                                    "Photos retouchées",
                                    "Galerie numérique",
                                ]}
                                highlight
                                delay={0.05}
                            />
                            <PricingCard
                                badge="Collection Intégrale"
                                title="Journée complète"
                                price="À partir de 1 300 €"
                                items={[
                                    "Préparatifs",
                                    "Cérémonie",
                                    "Photos de couple",
                                    "Photos de groupe",
                                    "Cocktail",
                                    "Réception et soirée",
                                    "Photos retouchées",
                                    "Galerie numérique complète",
                                ]}
                                delay={0.1}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 border border-white/[0.06] bg-white/[0.02] rounded-[2px] p-6"
                        >
                            <p className="text-cream/60 text-sm font-light text-center mb-3">
                                <span className="text-gold font-medium">Options disponibles</span>
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Séance engagement", "Séance Day After", "Album photo", "Heures supplémentaires", "Deuxième photographe"].map((opt) => (
                                    <span key={opt} className="text-xs border border-white/10 text-cream/50 px-3 py-1 rounded-[2px]">
                                        {opt}
                                    </span>
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
                    className="mt-16 border border-white/[0.06] bg-white/[0.02] rounded-[2px] p-8"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Car className="w-5 h-5 text-gold/70" strokeWidth={1.5} />
                        <h3 className="font-display text-xl text-white">Frais de déplacement</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { range: "0 – 15 km", price: "Inclus" },
                            { range: "15 – 30 km", price: "+ 5 €" },
                            { range: "30 – 50 km", price: "+ 10 €" },
                            { range: "Au-delà de 50 km", price: "Sur devis" },
                        ].map(({ range, price }) => (
                            <div key={range} className="text-center border border-white/[0.06] p-4 rounded-[2px]">
                                <p className="text-cream/40 text-xs font-serif uppercase tracking-wider mb-2">{range}</p>
                                <p className="text-white font-medium">{price}</p>
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
                    className="mt-16 text-center"
                >
                    <div className="w-12 h-px bg-gold/40 mx-auto mb-8" />
                    <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold/70 mb-4">Devis personnalisé</p>
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-4">
                        Un projet en tête ?
                    </h3>
                    <p className="text-cream/50 font-light mb-8 max-w-md mx-auto">
                        Chaque prestation peut être adaptée. Contactez Steven pour un devis gratuit.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 px-10 py-4 uppercase tracking-[0.2em] text-xs font-medium"
                    >
                        <Mail className="w-4 h-4" />
                        Demander un devis
                    </Link>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
