"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import TextReveal from "./TextReveal";

const testimonials = [
    {
        name: "Morganne_frdz",
        text: "L'expérience du shooting photo était excellente, une super ambiance. Steven m'a mise à l'aise directement. Les photos sont juste magnifiques !",
    },
    {
        name: "Maelys.gaumard",
        text: "On a énormément rigolé, l'ambiance était super conviviale. Les photos sont incroyables, je suis trop contente du résultat !",
    },
    {
        name: "Guiming_lb",
        text: "Quand je fais appel à Steven, tout est clair et efficace. Le rendu est propre et de qualité, et les tarifs sont accessibles.",
    },
];

const DURATION = 8; // secondes avant de passer à l'avis suivant

function Stars({ className = "" }: { className?: string }) {
    return (
        <div className={`flex gap-1 ${className}`} aria-label="5 étoiles sur 5">
            {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
            ))}
        </div>
    );
}

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const reduce = useReducedMotion();
    const count = testimonials.length;
    const current = testimonials[index];

    useEffect(() => {
        if (paused || reduce) return;
        const t = setTimeout(() => setIndex((i) => (i + 1) % count), DURATION * 1000);
        return () => clearTimeout(t);
    }, [index, paused, reduce, count]);

    const go = (i: number) => setIndex((i + count) % count);

    return (
        <section
            id="temoignages"
            className="relative pt-24 pb-28 md:pt-36 md:pb-40 scroll-mt-20 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #0D1520 0%, #16233b 50%, #0D1520 100%)" }}
        >
            <div className="absolute -top-20 right-[-6rem] w-[520px] h-[520px] rounded-full bg-gold/[0.05] blur-[120px] pointer-events-none" />

            <div
                className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Titre + commandes */}
                    <div className="lg:col-span-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="block text-gold/80 tracking-[0.35em] text-xs uppercase mb-5"
                        >
                            Témoignages
                        </motion.span>
                        <TextReveal delay={0.1}>
                            <h2 className="font-display text-[2.2rem] sm:text-5xl lg:text-6xl leading-[1.05] text-white">
                                <span className="block">Ce qu&apos;ils</span>
                                <span className="block text-gold">disent.</span>
                            </h2>
                        </TextReveal>
                        <p className="mt-6 text-cream/80 max-w-xs leading-relaxed">
                            Des clients qui racontent leur séance, avec leurs mots.
                        </p>

                        <div className="mt-8 hidden lg:flex items-center gap-4">
                            <button
                                type="button"
                                onClick={() => go(index - 1)}
                                aria-label="Avis précédent"
                                className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={() => go(index + 1)}
                                aria-label="Avis suivant"
                                className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:border-gold hover:text-gold transition-colors"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <span className="ml-2 text-xs tracking-[0.25em] text-cream/70 tabular-nums">
                                0{index + 1} / 0{count}
                            </span>
                        </div>
                    </div>

                    {/* Grande citation */}
                    <div className="lg:col-span-8 relative">
                        <span
                            aria-hidden
                            className="pointer-events-none absolute -top-16 -left-2 lg:-top-20 lg:-left-10 font-display text-[9rem] lg:text-[14rem] leading-none text-gold/20 select-none"
                        >
                            &ldquo;
                        </span>

                        <div className="relative min-h-[300px] sm:min-h-[260px] lg:min-h-[320px] pt-10">
                            <AnimatePresence mode="wait">
                                <motion.figure
                                    key={index}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Stars className="mb-6" />
                                    <blockquote className="font-display text-[1.45rem] sm:text-3xl lg:text-4xl leading-[1.25] text-white font-medium">
                                        {current.text}
                                    </blockquote>
                                    <figcaption className="mt-8 flex items-center gap-4">
                                        <span className="w-12 h-12 rounded-full bg-gold text-dark font-display text-lg flex items-center justify-center">
                                            {current.name[0].toUpperCase()}
                                        </span>
                                        <span>
                                            <span className="block text-white font-medium">@{current.name}</span>
                                            <span className="block text-cream/70 text-sm">Client de Steven</span>
                                        </span>
                                    </figcaption>
                                </motion.figure>
                            </AnimatePresence>
                        </div>

                        {/* Sélecteur des 3 avis, avec barre de progression */}
                        <div className="mt-10 lg:mt-12 grid grid-cols-3 gap-3 md:gap-5">
                            {testimonials.map((t, i) => {
                                const on = i === index;
                                return (
                                    <button
                                        key={t.name}
                                        type="button"
                                        onClick={() => setIndex(i)}
                                        aria-label={`Voir l'avis de ${t.name}`}
                                        aria-current={on}
                                        className="group text-left"
                                    >
                                        <span className="relative block h-[2px] bg-white/15 overflow-hidden">
                                            {on && (
                                                <motion.span
                                                    key={`${index}-${paused}`}
                                                    className="absolute inset-0 bg-gold origin-left"
                                                    initial={{ scaleX: reduce ? 1 : 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: reduce || paused ? 0 : DURATION, ease: "linear" }}
                                                />
                                            )}
                                        </span>
                                        <span
                                            className={`mt-3 block text-xs md:text-sm truncate transition-colors duration-300 ${on ? "text-white" : "text-cream/50 group-hover:text-cream"}`}
                                        >
                                            @{t.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
