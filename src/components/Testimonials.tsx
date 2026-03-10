"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import AnimatedGoldLine from "./AnimatedGoldLine";
import TextReveal from "./TextReveal";

export default function Testimonials() {
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

    const fadeUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <section id="temoignages" className="relative pt-24 pb-32 md:pt-32 md:pb-52 bg-cream text-navy scroll-mt-20">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="block font-serif text-navy/80 font-medium tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
                    >
                        Témoignages
                    </motion.span>
                    <TextReveal delay={0.1}>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy mt-2 mb-4">
                            Ce qu&apos;ils disent
                        </h2>
                    </TextReveal>
                    <AnimatedGoldLine />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white/80 backdrop-blur-md p-10 rounded-sm shadow-md border border-navy/5 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-xl hover:bg-white transition-all duration-300 group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                                ))}
                            </div>
                            <p className="text-navy/80 font-light italic leading-relaxed mb-8 flex-grow">
                                &quot;{t.text}&quot;
                            </p>
                            <div className="font-serif text-navy/70 font-medium tracking-widest text-sm uppercase">
                                — {t.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section Divider to Contact (Dark) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-dark [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
