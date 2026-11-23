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
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-[100dvh] w-full overflow-hidden bg-dark flex flex-col justify-end">
            {/* Photo : cadrée en entier sur mobile, plein écran sur ordinateur */}
            <motion.div
                initial={{ scale: 1.06, filter: "brightness(0.5)" }}
                animate={{ scale: 1, filter: "brightness(1)" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-x-0 top-[72px] aspect-[3/2] md:inset-0 md:top-0 md:aspect-auto origin-center [mask-image:linear-gradient(to_bottom,black_72%,transparent)] md:[mask-image:none]"
            >
                <Image
                    src="/portfolio/series/mariage/mariage-22.jpg"
                    alt="Mariés, témoins et invités autour d'une voiture de collection verte — mariage dans le Gers photographié par Steven Dufour"
                    fill
                    priority
                    quality={85}
                    className="object-cover object-bottom"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
            </motion.div>

            {/* Voiles : haut (menu) et bas (texte) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-dark/80 via-dark/5 via-30% to-transparent md:to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[62%] md:h-[44%] pointer-events-none bg-gradient-to-t from-dark via-dark/85 to-transparent" />

            <div className="relative z-10 container mx-auto max-w-7xl px-6 pb-10 md:pb-14">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
                >
                    <div className="max-w-3xl">
                        <motion.div variants={itemVariants} className="font-serif font-medium text-gold text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase mb-4 [text-shadow:0_1px_10px_rgba(13,21,32,0.9)]">
                            Photographe · Auch, Occitanie
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="font-display font-medium text-[2.1rem] sm:text-5xl md:text-[2.9rem] lg:text-5xl leading-[1.08] tracking-tight">
                            <span className="text-white md:inline block">Capturer l&apos;instant.</span>{" "}
                            <span className="text-gold md:inline block">Révéler l&apos;émotion.</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-cream/90 text-base md:text-lg font-light mt-4 max-w-xl leading-relaxed">
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

            {/* Transition vers le portfolio */}
            <div className="absolute bottom-0 left-0 w-full h-[40px] bg-navy [clip-path:polygon(0_60%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
