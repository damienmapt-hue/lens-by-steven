"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "./CountUp";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

export default function About() {
    return (
        <section id="a-propos" className="bg-dark py-20 lg:py-32 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-0 lg:gap-12 items-start">

                    {/* Colonne gauche — photo sticky */}
                    <div className="relative lg:sticky lg:top-24 h-[70vh] lg:h-[80vh] overflow-hidden rounded-sm mb-12 lg:mb-0">
                        {/* Photo Steven */}
                        <Image
                            src="/images/steven-portrait.jpg"
                            alt="Steven Dufour photographe Auch"
                            fill
                            className="object-cover object-[50%_40%]"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            priority
                        />
                        {/* Overlay gradient subtil en bas */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                        {/* Badge flottant en bas gauche */}
                        <div className="absolute bottom-6 left-6 border border-gold/40 bg-dark/80 backdrop-blur-sm px-4 py-3">
                            <p className="text-gold text-[10px] tracking-[0.3em] uppercase">Basé à</p>
                            <p className="text-white text-sm font-display mt-0.5">Auch, Occitanie</p>
                        </div>
                    </div>

                    {/* Colonne droite — texte avec animations */}
                    <div className="flex flex-col justify-center gap-8 py-0 lg:py-16 lg:pl-16">

                        {/* Label */}
                        <motion.span
                            className="text-gold tracking-[0.3em] text-xs uppercase"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            À PROPOS
                        </motion.span>

                        {/* Titre */}
                        <TextReveal className="text-4xl lg:text-5xl font-display text-white leading-tight" delay={0.1}>
                            <h2>Passionné par l&apos;instant vrai.</h2>
                        </TextReveal>

                        {/* Ligne gold */}
                        <motion.div
                            className="h-px bg-gold origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{ width: '4rem' }}
                        />

                        {/* Paragraphe bio */}
                        <motion.p
                            className="text-cream/70 leading-relaxed text-base lg:text-lg max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Photographe passionné basé à Auch, spécialisé dans la capture d&apos;instants authentiques.
                            Mon parcours, débuté dans le sport, m&apos;a mené à l&apos;art du portrait, de l&apos;entreprise
                            et de l&apos;événementiel. Mon approche est fondée sur l&apos;écoute, la confiance
                            et une expérience humaine authentique.
                        </motion.p>

                        {/* Stats en ligne */}
                        <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gold/20">
                            {[
                                { value: 100, suffix: '+', label: 'Projets réalisés' },
                                { value: 2, suffix: ' ans', label: "d'expérience" },
                                { value: 100, suffix: '+', label: 'Clients satisfaits' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                >
                                    <p className="text-3xl lg:text-4xl font-display text-gold">
                                        <CountUp end={stat.value} suffix={stat.suffix} duration={1.8} />
                                    </p>
                                    <p className="text-cream/60 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA contact */}
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="inline-block self-start border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-all duration-300"
                            >
                                Me contacter →
                            </a>
                        </MagneticButton>

                    </div>
                </div>
            </div>
        </section>
    );
}
