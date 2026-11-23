"use client";

import { useRef, useState } from "react";
import { motion, Variants, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "./TextReveal";

interface ServicePhoto {
    src: string;
    alt: string;
    position?: string;
}

interface Service {
    id: string;
    href: string;
    title: string;
    description: string;
    tags: string[];
    photos: ServicePhoto[];
}

const services: Service[] = [
    {
        id: "mariage",
        href: "/photographe-mariage-auch",
        title: "Mariage",
        description: "Votre jour J, raconté sans mise en scène. Un reportage naturel et discret à Auch et dans le Gers, des préparatifs à la soirée.",
        tags: ["Préparatifs", "Cérémonie", "Soirée"],
        photos: [
            { src: "/portfolio/series/mariage/mariage-24.jpg", alt: "Le baiser des mariés près d'une voiture de collection verte", position: "50% 30%" },
            { src: "/portfolio/series/mariage/mariage-27.jpg", alt: "Les mariés enlacés sous le voile", position: "50% 30%" },
            { src: "/portfolio/series/mariage/mariage-31.jpg", alt: "Les mariés en noir et blanc", position: "50% 40%" },
        ],
    },
    {
        id: "events",
        href: "/photographe-evenementiel",
        title: "Événementiel",
        description: "Concerts, galas, conférences, fêtes : l'énergie de la salle et les instants qu'on ne vit qu'une fois, avec discrétion.",
        tags: ["Concerts", "Galas", "Soirées privées"],
        photos: [
            { src: "/portfolio/series/scene/scene-09.jpg", alt: "Guitariste sur scène dans la fumée colorée", position: "50% 40%" },
            { src: "/portfolio/series/scene/scene-10.jpg", alt: "Chanteuse sous les projecteurs", position: "50% 45%" },
            { src: "/portfolio/series/scene/scene-05.jpg", alt: "Élection de Miss, la lauréate sur scène", position: "50% 30%" },
        ],
    },
    {
        id: "sport",
        href: "/photographie-sportive",
        title: "Photographie sportive",
        description: "L'intensité du geste, la joie de la victoire. Matchs, entraînements et portraits d'équipe pour les clubs du Gers et d'Occitanie.",
        tags: ["Matchs", "Clubs", "Portraits d'équipe"],
        photos: [
            { src: "/portfolio/series/sport/sport-40.jpg", alt: "Joueur de football en plein coup de pied sous les projecteurs", position: "50% 55%" },
            { src: "/portfolio/series/sport/sport-35.jpg", alt: "Plongeon d'un gardien de but", position: "50% 55%" },
            { src: "/portfolio/series/sport/sport-39.jpg", alt: "Duel pour le ballon sur un terrain de football", position: "50% 60%" },
        ],
    },
    {
        id: "portrait",
        href: "/portrait",
        title: "Portraits",
        description: "Des portraits naturels et élégants, dans une ambiance de confiance pour que vous soyez pleinement vous-même.",
        tags: ["Studio", "Famille", "Artistique"],
        photos: [
            { src: "/portfolio/portrait-rose-doree.jpeg", alt: "Portrait artistique d'une femme tenant une rose dorée", position: "50% 30%" },
            { src: "/portfolio/portrait-fourrure.jpeg", alt: "Portrait mode, veste en fourrure", position: "50% 30%" },
            { src: "/portfolio/portrait-duo-amies.jpeg", alt: "Portrait en noir et blanc de deux amies complices", position: "50% 35%" },
        ],
    },
    {
        id: "business",
        href: "/photographe-entreprise",
        title: "Entreprises & commerces",
        description: "Des visuels professionnels qui renforcent votre image : reportages, portraits corporate, locaux et produits, pour les TPE, PME et commerces.",
        tags: ["Corporate", "Locaux", "Produits"],
        photos: [
            { src: "/portfolio/entreprise-salon.jpg", alt: "Salon d'attente lumineux d'une entreprise" },
            { src: "/portfolio/entreprise-bureau.jpg", alt: "Espace de travail d'une entreprise" },
            { src: "/portfolio/entreprise-entree.jpg", alt: "Façade vitrée d'une entreprise" },
        ],
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

function ServiceRow({ service, index }: { service: Service; index: number }) {
    const ref = useRef<HTMLLIElement>(null);
    const [active, setActive] = useState(0);
    const count = service.photos.length;

    // La photo affichée dépend de la position de la ligne dans l'écran pendant le scroll
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "end 32%"] });
    useMotionValueEvent(scrollYProgress, "change", (p) => {
        const next = Math.min(count - 1, Math.max(0, Math.floor(p * count)));
        setActive((prev) => (prev === next ? prev : next));
    });

    return (
        <motion.li ref={ref} variants={rowVariants} className="border-t border-white/10">
            <Link
                href={service.href}
                className="group grid grid-cols-[1fr_auto] gap-5 md:gap-8 items-center py-8 md:py-12 px-1 md:px-4 -mx-1 md:-mx-4 transition-colors duration-500 hover:bg-white/[0.03] focus-visible:bg-white/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
                <div>
                    <div className="flex items-baseline gap-4 mb-3">
                        <span className="font-display text-xs text-gold/70 tabular-nums">0{index + 1}</span>
                        <h3 className="font-display text-2xl md:text-3xl text-white group-hover:text-gold transition-colors duration-300">
                            {service.title}
                        </h3>
                    </div>
                    <p className="text-cream/80 text-sm md:text-[15px] leading-relaxed font-light max-w-md md:pl-9">
                        {service.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 md:pl-9">
                        {service.tags.map((t) => (
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

                {/* Photos : une seule visible, elle change pendant le défilement */}
                <div className="relative w-28 h-40 sm:w-32 sm:h-44 md:w-44 md:h-60 lg:w-52 lg:h-72 overflow-hidden bg-dark shrink-0">
                    {service.photos.map((photo, i) => (
                        <motion.div
                            key={photo.src}
                            className="absolute inset-0"
                            initial={false}
                            animate={{
                                opacity: active === i ? 1 : 0,
                                scale: active === i ? 1 : 1.12,
                            }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                quality={80}
                                sizes="(max-width: 768px) 128px, 208px"
                                className="object-cover"
                                style={{ objectPosition: photo.position ?? "50% 50%" }}
                            />
                        </motion.div>
                    ))}
                    <div className="absolute inset-x-2 bottom-2 flex gap-1" aria-hidden>
                        {service.photos.map((photo, i) => (
                            <span
                                key={photo.src}
                                className={`h-[2px] flex-1 transition-colors duration-500 ${active === i ? "bg-gold" : "bg-white/35"}`}
                            />
                        ))}
                    </div>
                </div>
            </Link>
        </motion.li>
    );
}

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
                            <ServiceRow key={s.id} service={s} index={i} />
                        ))}
                    </motion.ul>
                </div>
            </div>

            {/* Section Divider to Tarifs (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
