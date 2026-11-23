"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
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

const PER_SERVICE = 3;
const TOTAL_STEPS = services.length * PER_SERVICE;

export default function Services() {
    const track = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(0);

    // La section reste bloquée à l'écran ; la progression du scroll choisit la prestation et la photo
    const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
    useMotionValueEvent(scrollYProgress, "change", (p) => {
        const next = Math.min(TOTAL_STEPS - 1, Math.max(0, Math.floor(p * TOTAL_STEPS)));
        setStep((prev) => (prev === next ? prev : next));
    });

    const sIdx = Math.floor(step / PER_SERVICE);
    const pIdx = step % PER_SERVICE;
    const current = services[sIdx];

    return (
        <section
            id="prestations"
            className="relative scroll-mt-0"
            style={{ background: "linear-gradient(180deg, #0D1520 0%, #111e33 50%, #0D1520 100%)" }}
        >
            {/* Zone de scroll : 6 écrans de haut, pendant lesquels le contenu reste fixe */}
            <div ref={track} className="relative h-[600vh]">
                <div className="sticky top-0 h-[100dvh] overflow-hidden">
                    <div className="container mx-auto max-w-7xl h-full px-5 md:px-8 pt-24 md:pt-28 pb-6 md:pb-10 grid gap-x-16 gap-y-4 lg:grid-cols-12 lg:grid-rows-[auto_1fr] content-start lg:content-stretch">
                        {/* Titre fixe */}
                        <div className="lg:col-span-5">
                            <span className="block text-gold/80 font-light tracking-[0.35em] text-[10px] md:text-xs uppercase mb-2 md:mb-4">
                                Prestations
                            </span>
                            <TextReveal delay={0.1}>
                                <h2 className="font-display text-[1.65rem] leading-[1.1] sm:text-4xl lg:text-5xl text-white">
                                    Cinq façons de<br />travailler ensemble.
                                </h2>
                            </TextReveal>
                        </div>

                        {/* Photos : une seule visible, elles changent au scroll */}
                        <Link
                            href={current.href}
                            aria-label={`${current.title} : en savoir plus`}
                            className="relative block w-full h-[40dvh] sm:h-[42dvh] lg:h-[min(74dvh,700px)] lg:w-auto lg:aspect-[4/5] lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-2 lg:self-center lg:justify-self-end overflow-hidden bg-dark"
                        >
                            {services.map((s, si) =>
                                Math.abs(si - sIdx) <= 1
                                    ? s.photos.map((photo, pi) => {
                                          const on = si === sIdx && pi === pIdx;
                                          return (
                                              <motion.div
                                                  key={photo.src}
                                                  className="absolute inset-0"
                                                  initial={false}
                                                  animate={{ opacity: on ? 1 : 0, scale: on ? 1 : 1.1 }}
                                                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                              >
                                                  <Image
                                                      src={photo.src}
                                                      alt={photo.alt}
                                                      fill
                                                      quality={85}
                                                      priority={si === 0 && pi === 0}
                                                      sizes="(max-width: 1024px) 100vw, 560px"
                                                      className="object-cover"
                                                      style={{ objectPosition: photo.position ?? "50% 50%" }}
                                                  />
                                              </motion.div>
                                          );
                                      })
                                    : null
                            )}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark/70 to-transparent" />
                            {/* Barres de progression : 5 groupes de 3 */}
                            <div className="absolute inset-x-4 bottom-4 flex gap-3" aria-hidden>
                                {services.map((s, si) => (
                                    <div key={s.id} className="flex flex-1 gap-1">
                                        {s.photos.map((p, pi) => {
                                            const done = si < sIdx || (si === sIdx && pi <= pIdx);
                                            return (
                                                <span
                                                    key={p.src}
                                                    className={`h-[2px] flex-1 transition-colors duration-500 ${done ? "bg-gold" : "bg-white/30"}`}
                                                />
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </Link>

                        {/* Texte de la prestation en cours */}
                        <div className="lg:col-span-5 lg:self-start lg:pt-6 min-h-[200px]">
                            <div className="border-t border-white/10 pt-4 md:pt-8">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -16 }}
                                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="flex items-baseline gap-3 mb-2 md:mb-3">
                                            <span className="font-display text-xs text-gold tabular-nums tracking-widest">
                                                0{sIdx + 1} / 0{services.length}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-2xl md:text-4xl text-white mb-2 md:mb-4">{current.title}</h3>
                                        <p className="text-cream/85 text-sm md:text-base leading-relaxed font-light max-w-md">
                                            {current.description}
                                        </p>
                                        <div className="mt-3 md:mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                                            {current.tags.map((t) => (
                                                <span key={t} className="text-[10px] uppercase tracking-[0.2em] text-cream/55">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            href={current.href}
                                            className="group mt-4 md:mt-6 inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.25em] border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                                        >
                                            En savoir plus
                                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Après la zone fixe : appel à l'action */}
            <div className="container mx-auto max-w-7xl px-5 md:px-8 pt-6 pb-32 md:pb-52 relative z-10">
                <div className="max-w-xl">
                    <p className="text-cream/80 font-light leading-relaxed">
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

            {/* Section Divider to Tarifs (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
