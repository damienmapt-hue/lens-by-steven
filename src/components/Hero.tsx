"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-start overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, filter: "brightness(0.5)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0 origin-center"
            >
                <Image
                    src="/portfolio/hero-basketball-bw.jpg"
                    alt="Steven Dufour Photography Hero"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
                <div className="absolute inset-0 bg-dark/60 mix-blend-multiply" />
            </motion.div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl pt-24 md:pt-20"
                >
                    <motion.div variants={itemVariants} className="font-serif text-gold font-medium text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-6 md:mb-10">
                        Photographe Professionnel · Auch, Occitanie
                    </motion.div>
                    <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-medium leading-[1.1] md:leading-[1] tracking-tight mb-8 md:mb-12">
                        <span className="text-white block">Capturer l&apos;instant.</span>
                        <span className="text-gold block">Révéler l&apos;émotion.</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-cream/90 text-base md:text-xl font-light mb-10 md:mb-16 max-w-2xl leading-relaxed">
                        Steven Dufour immortalise vos moments avec une sensibilité unique — sport, portrait, entreprise, événementiel.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-8">
                        <MagneticButton className="w-full sm:w-auto">
                            <Link
                                href="#travail"
                                data-cursor="DÉCOUVRIR"
                                className="group flex items-center justify-center gap-3 px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-300 uppercase tracking-widest text-sm font-medium w-full text-center"
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

            {/* Scroll Indicator - Hidden on small mobile to avoid overlap */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 z-10"
            >
                <span className="font-serif text-gold text-[10px] tracking-[0.4em] uppercase opacity-70">Défiler</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>

            {/* Section Divider to Portfolio (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
