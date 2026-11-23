"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "./TextReveal";

const services = [
    {
        id: "mariage",
        href: "/photographe-mariage-auch",
        title: "Mariage",
        description: "Votre jour J, raconté sans mise en scène. Un reportage naturel et discret à Auch et dans le Gers, des préparatifs à la soirée.",
        tags: ["Préparatifs", "Cérémonie", "Soirée"],
        photo: "/portfolio/series/mariage/mariage-24.jpg",
        alt: "Le baiser des mariés près d'une voiture de collection verte",
        position: "50% 30%",
    },
    {
        id: "events",
        href: "/photographe-evenementiel",
        title: "Événementiel",
        description: "Concerts, galas, conférences, fêtes : l'énergie de la salle et les instants qu'on ne vit qu'une fois, avec discrétion.",
        tags: ["Concerts", "Galas", "Soirées privées"],
        photo: "/portfolio/series/scene/scene-09.jpg",
        alt: "Guitariste sur scène dans la fumée colorée",
        position: "50% 40%",
    },
    {
        id: "sport",
        href: "/photographie-sportive",
        title: "Photographie sportive",
        description: "L'intensité du geste, la joie de la victoire. Matchs, entraînements et portraits d'équipe pour les clubs du Gers et d'Occitanie.",
        tags: ["Matchs", "Clubs", "Portraits d'équipe"],
        photo: "/portfolio/series/sport/sport-40.jpg",
        alt: "Joueur de football en plein coup de pied sous les projecteurs",
        position: "50% 55%",
    },
    {
        id: "portrait",
        href: "/portrait",
        title: "Portraits",
        description: "Des portraits naturels et élégants, dans une ambiance de confiance pour que vous soyez pleinement vous-même.",
        tags: ["Studio", "Famille", "Artistique"],
        photo: "/portfolio/portrait-rose-doree.jpeg",
        alt: "Portrait artistique d'une femme tenant une rose dorée",
        position: "50% 30%",
    },
    {
        id: "business",
        href: "/photographe-entreprise",
        title: "Entreprises & commerces",
        description: "Des visuels professionnels qui renforcent votre image : reportages, portraits corporate, locaux et produits, pour les TPE, PME et commerces.",
        tags: ["Corporate", "Locaux", "Produits"],
        photo: "/portfolio/entreprise-salon.jpg",
        alt: "Salon d'attente lumineux d'une entreprise",
        position: "50% 50%",
    },
];

const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
    return (
        <section
            id="prestations"
            className="relative pt-24 pb-32 md:pt-32 md:pb-52 scroll-mt-20"
            style={{ background: "linear-gradient(180deg, #0D1520 0%, #111e33 50%, #0D1520 100%)" }}
        >
            <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Titre — reste visible pendant le défilement de la liste */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7 }}
                                className="block text-gold/80 font-light tracking-[0.35em] text-xs uppercase mb-4"
                            >
                                Prestations
                            </motion.span>
                            <TextReveal delay={0.1}>
                                <h2 className="font-display text-4xl md:text-6xl text-white leading-[1.05]">
                                    Cinq façons de<br />travailler ensemble.
                                </h2>
                            </TextReveal>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="text-cream/80 font-light leading-relaxed mt-6 max-w-md"
                            >
                                Chaque prestation a sa page, avec des exemples, les tarifs et les réponses aux questions que l&apos;on me pose le plus souvent.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.45 }}
                                className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
                            >
                                <Link
                                    href="/tarifs"
                                    className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
                                >
                                    Voir les tarifs
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="#contact"
                                    className="group inline-flex items-center justify-center gap-3 text-white hover:text-gold transition-colors uppercase tracking-widest text-xs font-medium"
                                >
                                    Me contacter
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Liste des prestations */}
                    <motion.ul
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="lg:col-span-7 border-b border-white/10"
                    >
                        {services.map((s, i) => (
                            <motion.li key={s.id} variants={rowVariants} className="border-t border-white/10">
                                <Link
                                    href={s.href}
                                    className="group grid grid-cols-[1fr_auto] gap-5 md:gap-8 items-center py-7 md:py-9 px-1 md:px-4 -mx-1 md:-mx-4 transition-colors duration-500 hover:bg-white/[0.03] focus-visible:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                                >
                                    <div>
                                        <div className="flex items-baseline gap-4 mb-3">
                                            <span className="font-display text-xs text-gold/70 tabular-nums">0{i + 1}</span>
                                            <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-300">
                                                {s.title}
                                            </h3>
                                        </div>
                                        <p className="text-cream/80 text-sm md:text-[15px] leading-relaxed font-light max-w-md md:pl-9">
                                            {s.description}
                                        </p>
                                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:pl-9">
                                            {s.tags.map((t) => (
                                                <span key={t} className="text-[10px] uppercase tracking-[0.2em] text-cream/55">
                                                    {t}
                                                </span>
                                            ))}
                                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-gold md:ml-auto">
                                                En savoir plus
                                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-36 md:h-44 overflow-hidden bg-dark shrink-0">
                                        <Image
                                            src={s.photo}
                                            alt={s.alt}
                                            fill
                                            quality={80}
                                            sizes="(max-width: 768px) 112px, 144px"
                                            className="object-cover saturate-[0.8] transition-all duration-700 ease-out group-hover:scale-[1.07] group-hover:saturate-100"
                                            style={{ objectPosition: s.position }}
                                        />
                                    </div>
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>

            {/* Section Divider to Tarifs (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
