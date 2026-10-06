"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const highlights = [
    {
        category: "Sport",
        items: ["Pack Découverte — 25 €", "Pack Joueur — 40 €", "Pack Performance — 55 €", "Formule Équipe — dès 100 €"],
    },
    {
        category: "Portrait",
        items: ["Portrait Essentiel — 50 €", "Portrait Standard — 80 €", "Portrait Premium — 120 €"],
    },
    {
        category: "Entreprise",
        items: ["Pack Essentiel — dès 120 €", "Pack Communication — dès 200 €", "Pack Premium — dès 350 €"],
    },
    {
        category: "Événementiel",
        items: ["2 heures — 150 €", "4 heures — 250 €", "6 heures — 350 €"],
    },
    {
        category: "Mariage",
        items: ["Collection Essentielle — dès 600 €", "Collection Journée — dès 950 €", "Collection Intégrale — dès 1 300 €"],
    },
];

export default function TarifsPreview() {
    return (
        <section className="relative bg-gradient-to-b from-navy via-dark to-dark pt-24 pb-32 md:pt-32 md:pb-44 overflow-hidden">
            {/* Lueur gold centrée */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gold/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="block font-serif text-gold/80 text-xs uppercase tracking-[0.3em] mb-4"
                    >
                        Tarifs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4"
                    >
                        Des tarifs <span className="text-gradient-gold">clairs</span><br />& accessibles
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-16 h-px gold-line mx-auto mt-4"
                    />
                </div>

                {/* Cards résumé */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
                >
                    {highlights.map((cat, i) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 * i }}
                        >
                            <Link
                                href="/tarifs"
                                scroll={true}
                                className="relative bg-gradient-to-br from-white/[0.04] to-dark border border-white/[0.08] hover:border-gold/25 rounded-[2px] p-6 group transition-all duration-400 hover:-translate-y-0.5 flex flex-col cursor-pointer"
                            >
                                <div className="absolute left-0 top-0 w-[2px] h-0 bg-gold group-hover:h-full transition-all duration-700 ease-out" />

                                <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-gold/70 mb-4">
                                    {cat.category}
                                </p>
                                <ul className="space-y-2">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2.5 text-cream/85 text-sm font-light">
                                            <Check className="w-3 h-3 text-gold/50 shrink-0" strokeWidth={2.5} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gold/50 group-hover:text-gold transition-colors duration-300 flex items-center gap-1.5">
                                    Voir les détails <ArrowRight className="w-3 h-3" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Card CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative bg-gradient-to-br from-navy to-dark border border-gold/30 rounded-[2px] p-6 flex flex-col justify-between group"
                    >
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <div>
                            <p className="font-serif text-xs uppercase tracking-[0.3em] text-gold/70 mb-3">Devis gratuit</p>
                            <p className="font-display font-bold text-2xl text-white leading-tight mb-3">
                                Un projet particulier ?
                            </p>
                            <p className="text-cream/80 text-sm font-light leading-relaxed">
                                Chaque prestation peut être adaptée à vos besoins. Contactez Steven pour un devis personnalisé.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="mt-6 inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold hover:gap-3 transition-all duration-300 border-b border-gold/30 pb-1 w-fit"
                        >
                            Demander un devis <ArrowRight className="w-3 h-3" />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Bouton voir tous les tarifs */}
                <div className="text-center">
                    <Link
                        href="/tarifs"
                        scroll={true}
                        className="inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold"
                    >
                        Voir tous les tarifs
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Divider vers About */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
