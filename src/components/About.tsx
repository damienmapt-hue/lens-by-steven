"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import CountUp from "./CountUp";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import { series } from "@/data/series";

const stats = [
    { value: 100, suffix: "+", label: "Projets réalisés" },
    { value: 2, suffix: " ans", label: "d'expérience" },
    { value: 100, suffix: "+", label: "Clients satisfaits" },
];

const values = ["Écoute", "Confiance", "Sincérité"];

// Bandeau : quelques images de chaque série, mélangées
const [mariage, scene, sport, portraits] = series;
const strip = [
    mariage.photos[0], scene.photos[0], sport.photos[0], portraits.photos[0],
    mariage.photos[3], scene.photos[1], sport.photos[2], portraits.photos[1],
    mariage.photos[6], scene.photos[4], sport.photos[4], portraits.photos[2],
];

export default function About() {
    const visual = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: visual, offset: ["start end", "end start"] });
    const yPortrait = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const yA = useTransform(scrollYProgress, [0, 1], [70, -50]);
    const yB = useTransform(scrollYProgress, [0, 1], [-20, 70]);

    return (
        <section
            id="a-propos"
            className="relative pt-24 lg:pt-36 scroll-mt-20 overflow-hidden"
            style={{ background: "linear-gradient(180deg, #0D1520 0%, #16233b 45%, #0D1520 100%)" }}
        >
            <div className="container mx-auto px-5 md:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                    {/* Visuel : portrait + deux photos de son travail qui se chevauchent */}
                    <div ref={visual} className="lg:col-span-6 relative">
                        <div className="relative mx-auto lg:mx-0 w-[82%] sm:w-[70%] lg:w-[84%] aspect-[4/5]">
                            <span className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 border border-gold/40" aria-hidden />
                            <motion.div style={{ y: yPortrait }} className="absolute inset-0 overflow-hidden bg-dark">
                                <Image
                                    src="/images/steven-portrait.jpg"
                                    alt="Steven Dufour, photographe à Auch, appareil photo en main"
                                    fill
                                    quality={85}
                                    className="object-cover object-[50%_35%]"
                                    sizes="(max-width: 1024px) 80vw, 480px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 border border-gold/40 bg-dark/80 backdrop-blur-sm px-4 py-3">
                                    <p className="text-gold text-[11px] tracking-[0.3em] uppercase">Basé à</p>
                                    <p className="text-white text-sm font-display mt-0.5">Auch, Occitanie</p>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y: yA }}
                                className="absolute -right-6 sm:-right-10 lg:-right-14 bottom-[8%] w-[34%] aspect-[3/4] border-[5px] border-dark shadow-2xl overflow-hidden"
                            >
                                <Image
                                    src={mariage.photos[0].src}
                                    alt={mariage.photos[0].alt}
                                    fill
                                    quality={80}
                                    sizes="200px"
                                    className="object-cover object-[50%_30%]"
                                />
                            </motion.div>
                            <motion.div
                                style={{ y: yB }}
                                className="absolute -left-3 sm:-left-8 lg:-left-6 top-[10%] w-[26%] aspect-[3/4] border-[5px] border-dark shadow-2xl overflow-hidden"
                            >
                                <Image
                                    src={sport.photos[0].src}
                                    alt={sport.photos[0].alt}
                                    fill
                                    quality={80}
                                    sizes="160px"
                                    className="object-cover object-[50%_55%]"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Texte */}
                    <div className="lg:col-span-6 lg:pl-8">
                        <motion.span
                            className="block text-gold tracking-[0.3em] text-xs uppercase mb-5"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            À propos
                        </motion.span>

                        <TextReveal delay={0.1}>
                            <h2 className="font-display text-[2rem] sm:text-5xl lg:text-6xl leading-[1.05] text-white">
                                <span className="block">Passionné par</span>
                                <span className="block text-gold">l&apos;instant vrai.</span>
                            </h2>
                        </TextReveal>

                        <motion.p
                            className="mt-8 text-white text-xl lg:text-2xl leading-snug font-normal max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                        >
                            Photographe professionnel basé à Auch, dans le Gers, spécialisé dans la capture d&apos;instants authentiques.
                        </motion.p>

                        <motion.p
                            className="mt-5 text-cream/90 leading-relaxed text-base lg:text-[17px] max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                        >
                            Mon parcours, débuté dans le sport, m&apos;a progressivement mené à l&apos;art du portrait, de la photographie
                            d&apos;entreprise et de l&apos;événementiel. Avec plus de 100 projets réalisés en Occitanie, j&apos;ai développé une
                            approche fondée sur l&apos;écoute, la confiance et une relation humaine sincère. Chaque séance est unique : je
                            prends le temps de comprendre vos attentes pour livrer des images qui vous ressemblent vraiment.
                        </motion.p>

                        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                            {values.map((v, i) => (
                                <li key={v} className="flex items-baseline gap-2 text-sm uppercase tracking-[0.2em] text-cream">
                                    <span className="text-gold text-xs tabular-nums">0{i + 1}</span>
                                    {v}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                >
                                    <p className="font-display text-3xl md:text-4xl lg:text-5xl text-gold leading-none tabular-nums whitespace-nowrap">
                                        <CountUp end={stat.value} suffix={stat.suffix} duration={1.8} />
                                    </p>
                                    <p className="text-cream/85 text-[11px] md:text-xs tracking-widest uppercase mt-3">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <MagneticButton>
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 text-xs font-medium tracking-[0.2em] uppercase"
                                >
                                    Me contacter
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bandeau de photos qui défile lentement */}
            <div
                className="relative mt-24 md:mt-32 pb-20 md:pb-28 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                aria-label="Aperçu des réalisations de Steven"
            >
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...strip, ...strip].map((photo, i) => (
                        <div
                            key={`${photo.id}-${i}`}
                            className="relative shrink-0 mr-3 h-[170px] md:h-[240px] overflow-hidden"
                            style={{ aspectRatio: photo.w / photo.h }}
                            aria-hidden={i >= strip.length}
                        >
                            <Image
                                src={photo.src}
                                alt={i < strip.length ? photo.alt : ""}
                                fill
                                quality={75}
                                sizes="(max-width: 768px) 130px, 200px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
