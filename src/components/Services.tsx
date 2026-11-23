"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TextReveal from "./TextReveal";

interface Service {
    id: string;
    href: string;
    title: string;
    short: string;
    description: string;
    tags: string[];
    photo: string;
    alt: string;
    position: string;
}

const services: Service[] = [
    {
        id: "mariage",
        href: "/photographe-mariage-auch",
        title: "Mariage",
        short: "Mariage",
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
        short: "Événementiel",
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
        short: "Sport",
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
        short: "Portraits",
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
        short: "Entreprises",
        description: "Des visuels professionnels qui renforcent votre image : reportages, portraits corporate, locaux et produits, pour les TPE, PME et commerces.",
        tags: ["Corporate", "Locaux", "Produits"],
        photo: "/portfolio/entreprise-salon.jpg",
        alt: "Salon d'attente lumineux d'une entreprise",
        position: "50% 50%",
    },
];

export default function Services() {
    const track = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

    // La section reste bloquée à l'écran ; la progression du scroll choisit la prestation affichée
    const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
    useMotionValueEvent(scrollYProgress, "change", (p) => {
        const next = Math.min(services.length - 1, Math.max(0, Math.floor(p * services.length)));
        setActive((prev) => (prev === next ? prev : next));
    });

    const goTo = (i: number) => {
        const el = track.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const range = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + ((i + 0.5) / services.length) * range, behavior: "smooth" });
    };

    const current = services[active];

    return (
        <section
            id="prestations"
            className="relative scroll-mt-0"
            style={{ background: "linear-gradient(180deg, #0D1520 0%, #111e33 50%, #0D1520 100%)" }}
        >
            {/* Zone de scroll : la partie fixe reste à l'écran pendant ~3 écrans de défilement */}
            <div ref={track} className="relative h-[400vh]">
                <div className="sticky top-0 h-[100dvh] overflow-hidden">
                    <div className="container mx-auto max-w-7xl h-full px-5 md:px-8 pt-24 md:pt-28 pb-6 md:pb-10 grid gap-x-12 gap-y-4 lg:grid-cols-12 lg:grid-rows-[auto_1fr_auto] content-start lg:content-stretch">
                        {/* Titre fixe, sur 2 lignes */}
                        <div className="lg:col-span-7">
                            <span className="block text-gold/80 font-normal tracking-[0.35em] text-[11px] md:text-xs uppercase mb-2 md:mb-4">
                                Prestations
                            </span>
                            <TextReveal delay={0.1}>
                                <h2 className="font-display text-[1.65rem] leading-[1.25] sm:text-4xl lg:text-[clamp(2.4rem,4.1vw,3.4rem)] text-white">
                                    <span className="block whitespace-nowrap">Cinq façons de</span>
                                    <span className="block whitespace-nowrap">travailler ensemble.</span>
                                </h2>
                            </TextReveal>
                        </div>

                        {/* Photo : une par prestation, en fondu au scroll */}
                        <Link
                            href={current.href}
                            aria-label={`${current.title} : en savoir plus`}
                            className="relative block w-full h-[40dvh] sm:h-[42dvh] lg:h-[min(78dvh,720px)] lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-3 lg:self-center overflow-hidden bg-dark"
                        >
                            {services.map((s, i) => (
                                <motion.div
                                    key={s.id}
                                    className="absolute inset-0"
                                    initial={false}
                                    animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.1 }}
                                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Image
                                        src={s.photo}
                                        alt={s.alt}
                                        fill
                                        quality={85}
                                        loading="eager"
                                        sizes="(max-width: 1024px) 100vw, 520px"
                                        className="object-cover"
                                        style={{ objectPosition: s.position }}
                                    />
                                </motion.div>
                            ))}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark/70 to-transparent" />
                            <div className="absolute inset-x-4 bottom-4 flex gap-2" aria-hidden>
                                {services.map((s, i) => (
                                    <span
                                        key={s.id}
                                        className={`h-[2px] flex-1 transition-colors duration-500 ${i <= active ? "bg-gold" : "bg-white/30"}`}
                                    />
                                ))}
                            </div>
                        </Link>

                        {/* Texte de la prestation en cours */}
                        <div className="lg:col-span-6 lg:self-center min-h-[190px]">
                            <div className="border-t border-white/10 pt-4 md:pt-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -16 }}
                                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <span className="block font-display text-xs text-gold tabular-nums tracking-widest mb-2 md:mb-4">
                                            0{active + 1} / 0{services.length}
                                        </span>
                                        <h3 className="font-display text-2xl md:text-4xl lg:text-5xl text-white mb-2 md:mb-5 leading-[1.2]">
                                            {current.title}
                                        </h3>
                                        <p className="text-cream/85 text-sm md:text-base lg:text-lg leading-relaxed font-normal max-w-lg">
                                            {current.description}
                                        </p>
                                        <div className="mt-3 md:mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                                            {current.tags.map((t) => (
                                                <span key={t} className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-cream/60">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={current.href}
                                            className="group mt-4 md:mt-7 inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.25em] border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                                        >
                                            En savoir plus
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Menu des 5 prestations (ordinateur) */}
                        <nav aria-label="Prestations" className="hidden lg:block lg:col-span-7 lg:self-end">
                            <ul className="flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-5">
                                {services.map((s, i) => (
                                    <li key={s.id}>
                                        <button
                                            type="button"
                                            onClick={() => goTo(i)}
                                            aria-current={active === i}
                                            className={`group flex items-baseline gap-1.5 text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${active === i ? "text-gold" : "text-cream/50 hover:text-cream"}`}
                                        >
                                            <span className="tabular-nums">0{i + 1}</span>
                                            <span className={`pb-1 border-b transition-colors duration-300 ${active === i ? "border-gold" : "border-transparent group-hover:border-cream/40"}`}>
                                                {s.short}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Après la zone fixe : appel à l'action */}
            <div className="container mx-auto max-w-7xl px-5 md:px-8 pt-6 pb-24 md:pb-36 relative z-10">
                <div className="max-w-xl">
                    <p className="text-cream/80 font-normal leading-relaxed">
                        Chaque prestation a sa page, avec des exemples, les tarifs et les réponses aux questions que l&apos;on me pose le plus souvent.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
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
                    </div>
                </div>
            </div>
        </section>
    );
}
