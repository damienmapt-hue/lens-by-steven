"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ServicePhoto {
    src: string;
    alt: string;
}

export interface FAQItem {
    q: string;
    a: string;
}

interface ServicePageLayoutProps {
    heroSrc: string;
    heroAlt: string;
    badge: string;
    h1: string;
    intro: string;
    body: string[];
    bullets: string[];
    photos: ServicePhoto[];
    faq: FAQItem[];
}

export default function ServicePageLayout({
    heroSrc, heroAlt, badge, h1, intro, body, bullets, photos, faq,
}: ServicePageLayoutProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[75vh] flex items-center overflow-hidden">
                <Image src={heroSrc} alt={heroAlt} fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/20" />
                <div className="absolute inset-0 bg-dark/40 mix-blend-multiply" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="font-serif text-gold text-[10px] tracking-[0.4em] uppercase mb-6 block">
                            {badge}
                        </span>
                        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-6">
                            {h1}
                        </h1>
                        <p className="text-cream/80 text-lg max-w-xl mb-10 font-light leading-relaxed">
                            {intro}
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 border border-gold text-gold px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                            Demander un devis
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Contenu */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            {body.map((p, i) => (
                                <p key={i} className="text-cream/70 leading-relaxed text-lg">{p}</p>
                            ))}
                        </div>
                        <div className="border-l border-gold/20 pl-10">
                            <p className="font-serif text-gold text-xs tracking-[0.3em] uppercase mb-6">Ce que je propose</p>
                            <ul className="space-y-5">
                                {bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-4 text-cream/70">
                                        <span className="text-gold text-lg mt-0.5 leading-none">—</span>
                                        <span className="leading-relaxed">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galerie */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-7xl">
                    <p className="font-serif text-gold text-xs tracking-[0.3em] uppercase mb-10 text-center">Galerie</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {photos.map((photo, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="relative aspect-square overflow-hidden group"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            href="/portfolio"
                            className="text-gold uppercase tracking-widest text-sm border-b border-gold/50 pb-1 hover:text-white hover:border-white transition-colors"
                        >
                            Voir tout le portfolio →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="font-serif text-gold text-xs tracking-[0.3em] uppercase mb-4 text-center">FAQ</p>
                    <h2 className="font-display text-4xl text-white mb-14 text-center">Questions fréquentes</h2>
                    <div className="space-y-3">
                        {faq.map((item, i) => (
                            <div key={i} className="border border-white/10">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left text-white hover:text-gold transition-colors"
                                >
                                    <span className="font-medium pr-4">{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-gold" : ""}`} />
                                </button>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="px-6 pb-6 text-cream/70 leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-navy text-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Un projet en tête ?</h2>
                        <p className="text-cream/60 mb-10 max-w-sm mx-auto font-light">
                            Contactez Steven pour discuter de votre projet et obtenir un devis gratuit.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 border border-gold text-gold px-10 py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
                        >
                            Me contacter <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
