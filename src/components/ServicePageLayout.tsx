"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TextReveal from "./TextReveal";
import JustifiedGallery from "./portfolio/JustifiedGallery";
import { Photo, series } from "@/data/series";

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
    /** Cadrage de la photo d'en-tête (ex. "50% 30%") */
    heroPosition?: string;
    badge: string;
    h1: string;
    intro: string;
    /** Tarif de départ affiché sous l'introduction (ex. "Dès 600 €") */
    priceFrom?: string;
    body: string[];
    bullets: string[];
    photos: ServicePhoto[];
    /** Lien « voir toute la série » */
    galleryHref?: string;
    faq: FAQItem[];
}

const known = new Map<string, Photo>(series.flatMap((s) => s.photos).map((p) => [p.src, p]));

function toPhoto(p: ServicePhoto, i: number): Photo {
    const hit = known.get(p.src);
    if (hit) return { ...hit, alt: p.alt };
    return { id: `svc-${i}`, src: p.src, w: 683, h: 1024, caption: p.alt, alt: p.alt, series: "portraits" } as Photo;
}

const diagTop = "pointer-events-none absolute -top-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]";
const diagBottom = "pointer-events-none absolute -bottom-px inset-x-0 h-[60px] md:h-[110px] bg-dark [clip-path:polygon(100%_0,100%_100%,0_100%)]";

export default function ServicePageLayout({
    heroSrc, heroAlt, heroPosition = "50% 30%", badge, h1, intro, priceFrom, body, bullets, photos, galleryHref = "/portfolio", faq,
}: ServicePageLayoutProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const gallery = photos.map(toPhoto);

    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-clip">
            <Navbar />

            {/* En-tête : texte à gauche, photo encadrée à droite */}
            <section
                className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0D1520 0%, #16233b 55%, #0D1520 100%)" }}
            >
                <div className="container mx-auto px-5 md:px-8 max-w-7xl grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="block text-[#E6CB7E] font-medium tracking-[0.3em] text-xs uppercase mb-5"
                        >
                            {badge}
                        </motion.span>
                        <h1 className="font-display text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.2] text-white">
                            {h1}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="mt-6 text-cream/90 text-lg max-w-xl leading-relaxed"
                        >
                            {intro}
                        </motion.p>
                        {priceFrom && (
                            <p className="mt-6 flex items-baseline gap-3 border-l-2 border-gold pl-4">
                                <span className="font-display text-2xl text-gold">{priceFrom}</span>
                                <Link href="/tarifs" className="text-xs uppercase tracking-[0.2em] text-cream/80 hover:text-gold transition-colors underline-offset-4 hover:underline">
                                    Voir les tarifs
                                </Link>
                            </p>
                        )}
                        <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                            <Link
                                href="/#contact"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
                            >
                                Demander un devis
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href={galleryHref}
                                className="group inline-flex items-center justify-center gap-3 text-white hover:text-gold transition-colors uppercase tracking-widest text-xs font-medium"
                            >
                                Voir les photos
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="relative mx-auto w-[78%] sm:w-[60%] lg:w-[88%] lg:ml-auto aspect-[4/5]">
                            <span className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 border border-gold/40" aria-hidden />
                            <motion.div
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 overflow-hidden bg-dark"
                            >
                                <Image
                                    src={heroSrc}
                                    alt={heroAlt}
                                    fill
                                    priority
                                    quality={85}
                                    sizes="(max-width: 1024px) 80vw, 480px"
                                    className="object-cover"
                                    style={{ objectPosition: heroPosition }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenu : fond beige entre deux diagonales */}
            <section className="relative pt-28 pb-32 md:pt-44 md:pb-48 overflow-hidden" style={{ background: "#EFE6D5" }}>
                <div aria-hidden className={diagTop} />
                <div aria-hidden className={diagBottom} />
                <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
                    <div className="lg:col-span-6">
                        <span className="block text-[#8a6a1c] font-medium tracking-[0.35em] text-xs uppercase mb-5">Mon approche</span>
                        <div className="space-y-6">
                            {body.map((p, i) => (
                                <p
                                    key={i}
                                    className={i === 0 ? "text-navy text-xl lg:text-2xl leading-snug" : "text-navy/80 text-base lg:text-lg leading-relaxed"}
                                >
                                    {p}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 lg:pl-10">
                        <span className="block text-[#8a6a1c] font-medium tracking-[0.35em] text-xs uppercase mb-6">Ce que je propose</span>
                        <ul className="border-t border-navy/15">
                            {bullets.map((b, i) => (
                                <li key={i} className="flex items-baseline gap-5 py-5 border-b border-navy/15">
                                    <span className="text-[#8a6a1c] text-xs tabular-nums tracking-widest">0{i + 1}</span>
                                    <span className="text-navy/90 leading-snug">{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Galerie */}
            <section className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0D1520, #111e33 50%, #0D1520)" }}>
                <div className="container mx-auto px-5 md:px-8 max-w-7xl">
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
                        <div>
                            <span className="block text-gold tracking-[0.3em] text-xs uppercase mb-4">Galerie</span>
                            <TextReveal delay={0.1}>
                                <h2 className="font-display text-[1.9rem] sm:text-4xl lg:text-5xl leading-[1.2] text-white">Quelques images.</h2>
                            </TextReveal>
                        </div>
                        <Link
                            href={galleryHref}
                            className="group inline-flex items-center gap-3 text-gold uppercase tracking-widest text-xs font-medium border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                        >
                            Voir toute la série
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <JustifiedGallery photos={gallery} rowHeight={300} />
                </div>
            </section>

            {/* FAQ : fond beige entre deux diagonales */}
            <section className="relative pt-28 pb-32 md:pt-44 md:pb-48 overflow-hidden" style={{ background: "#E8DCC8" }}>
                <div aria-hidden className={diagTop} />
                <div aria-hidden className={diagBottom} />
                <div className="container mx-auto px-5 md:px-8 max-w-7xl relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-4">
                        <span className="block text-[#8a6a1c] font-medium tracking-[0.35em] text-xs uppercase mb-5">Questions</span>
                        <TextReveal delay={0.1}>
                            <h2 className="font-display text-[2rem] sm:text-5xl leading-[1.2] text-navy">
                                <span className="block">Vos questions,</span>
                                <span className="block text-[#8a6a1c]">mes réponses.</span>
                            </h2>
                        </TextReveal>
                    </div>
                    <ul className="lg:col-span-8 border-t border-navy/15">
                        {faq.map((item, i) => {
                            const on = openFaq === i;
                            return (
                                <li key={i} className="border-b border-navy/15">
                                    <button
                                        type="button"
                                        aria-expanded={on}
                                        onClick={() => setOpenFaq(on ? null : i)}
                                        className="w-full flex items-center justify-between gap-6 py-6 text-left text-navy hover:text-[#8a6a1c] transition-colors"
                                    >
                                        <span className="font-display text-lg md:text-xl leading-snug">{item.q}</span>
                                        <Plus className={`w-5 h-5 shrink-0 transition-transform duration-300 ${on ? "rotate-45 text-[#8a6a1c]" : ""}`} />
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {on && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 pr-10 text-navy/80 leading-relaxed">{item.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* Appel à l'action */}
            <section className="relative pt-10 pb-24 md:pb-32" style={{ background: "linear-gradient(180deg, #0D1520, #16233b 60%, #1B2A4A)" }}>
                <div className="container mx-auto px-5 md:px-8 max-w-7xl grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7">
                        <span className="block text-gold tracking-[0.3em] text-xs uppercase mb-4">Devis gratuit</span>
                        <h2 className="font-display text-[2rem] sm:text-5xl leading-[1.2] text-white">Un projet en tête ?</h2>
                        <p className="mt-4 text-cream/85 max-w-md leading-relaxed">
                            Parlez-moi de votre projet : je vous réponds rapidement et je vous propose un devis adapté, sans engagement.
                        </p>
                    </div>
                    <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end sm:items-center gap-5 sm:gap-8">
                        <Link
                            href="/#contact"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-dark hover:bg-white transition-colors duration-300 uppercase tracking-widest text-xs font-medium"
                        >
                            Me contacter
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/tarifs"
                            className="group inline-flex items-center justify-center gap-3 text-white hover:text-gold transition-colors uppercase tracking-widest text-xs font-medium"
                        >
                            Voir les tarifs
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
