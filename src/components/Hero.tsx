"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImageProps } from "next/image";
import MagneticButton from "./MagneticButton";

const imageBase = { alt: "", fill: true, priority: true, quality: 85, sizes: "100vw" } as const;
const { props: { srcSet: desktopSrcSet } } = getImageProps({ ...imageBase, src: "/portfolio/series/mariage/mariage-22.jpg" });
const { props: { srcSet: mobileSrcSet, ...mobileImg } } = getImageProps({ ...imageBase, src: "/portfolio/series/mariage/mariage-24.jpg" });

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-dark flex flex-col justify-end">
            {/* Photo : groupe en paysage sur ordinateur, couple en vertical sur mobile (une seule image téléchargée) */}
            <motion.div
                initial={{ scale: 1.06, filter: "brightness(0.5)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 origin-center"
            >
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
                    <source media="(max-width: 767px)" srcSet={mobileSrcSet} sizes="100vw" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        {...mobileImg}
                        alt="Mariage dans le Gers près d'une voiture de collection verte, photographié par Steven Dufour"
                        className="absolute inset-0 h-full w-full object-cover object-[50%_25%] md:object-[50%_12%]"
                    />
                </picture>
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </motion.div>

            {/* Voiles : haut (menu) et bas (texte) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-dark/80 via-dark/5 via-30% to-transparent md:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[62%] md:h-[56%] pointer-events-none bg-gradient-to-t from-dark from-15% via-dark/75 via-50% to-transparent" />

            <div className="relative z-10 container mx-auto max-w-7xl px-6 pb-16 md:pb-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-3xl">
                        <motion.div variants={itemVariants} className="font-sans font-medium text-[#E6CB7E] text-[11px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 [text-shadow:0_0_14px_rgba(13,21,32,1),0_1px_4px_rgba(13,21,32,1)]">
                            Photographe · Auch, Occitanie
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="font-display font-medium text-[2.1rem] sm:text-5xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight">
                            <span className="text-white block">Capturer l&apos;instant.</span>{" "}
                            <span className="text-gold block">Révéler l&apos;émotion.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-cream/90 text-base md:text-lg font-normal mt-4 max-w-xl leading-relaxed">
                            Mariages, concerts, sport, portraits : des images qui ressemblent à ceux qui les vivent.
                        </motion.p>
                    </div>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 shrink-0">
                        <MagneticButton className="w-full sm:w-auto">
                            <Link
                                href="#travail"
                                data-cursor="DÉCOUVRIR"
                                className="group flex items-center justify-center gap-3 px-8 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm font-medium w-full text-center"
                            >
                                Voir mon travail
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton className="w-full sm:w-auto">
                            <Link
                                href="#contact"
                                className="group flex items-center justify-center gap-3 text-white hover:text-gold transition-colors uppercase tracking-widest text-sm font-medium w-full text-center"
                            >
                                Me contacter
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Fondu vers la section suivante (même couleur que le haut du portfolio) + repère de défilement */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-dark z-20 pointer-events-none" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-3 pointer-events-none"
            >
                <span className="font-serif text-gold text-[11px] tracking-[0.4em] uppercase opacity-80">Défiler</span>
                <span className="block w-px h-10 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
