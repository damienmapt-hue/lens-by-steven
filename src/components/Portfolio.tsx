'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { series } from '@/data/series'
import JustifiedGallery from '@/components/portfolio/JustifiedGallery'
import TextReveal from '@/components/TextReveal'

export default function Portfolio() {
    return (
        <section id="travail" className="pt-16 pb-24 md:pt-20 md:pb-32 scroll-mt-20" style={{ background: 'linear-gradient(180deg, #0D1520 0%, #1B2A4A 12%, #1B2A4A 88%, #0D1520 100%)' }}>
            <div className="max-w-7xl mx-auto px-5 md:px-12">

                <div className="mb-14 md:mb-20 grid lg:grid-cols-12 gap-6 lg:gap-12 items-end">
                    <div className="lg:col-span-7">
                        <motion.span
                            className="block text-gold tracking-[0.35em] text-xs uppercase font-normal mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Portfolio
                        </motion.span>
                        <TextReveal delay={0.1}>
                            <h2 className="text-[2.2rem] sm:text-5xl lg:text-6xl font-display text-white leading-[1.2]">
                                <span className="block">Quatre univers,</span>
                                <span className="block text-gold">un même regard.</span>
                            </h2>
                        </TextReveal>
                    </div>
                    <motion.p
                        className="lg:col-span-5 text-cream/85 font-normal leading-relaxed max-w-md border-l-2 border-gold pl-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Chaque série rassemble mes meilleures images, sans recadrage. Touchez une photo pour l&apos;agrandir et parcourir toute la série.
                    </motion.p>
                </div>

                <div className="space-y-24 md:space-y-36">
                    {series.map((s) => (
                        <article key={s.slug} aria-labelledby={`serie-${s.slug}`}>
                            <div className="border-t border-white/20 pt-5 mb-7 md:mb-9">
                                <div className="flex items-center justify-between gap-4 mb-4 md:mb-5">
                                    <p className="text-gold text-xs tracking-[0.3em] uppercase">
                                        <span className="tabular-nums">{s.index}</span>
                                        <span className="mx-3 text-gold/50">/</span>
                                        {s.kicker}
                                    </p>
                                    <Link
                                        href={`/portfolio/${s.slug}`}
                                        className="group inline-flex items-center gap-2 text-white hover:text-gold uppercase tracking-[0.2em] text-xs transition-colors whitespace-nowrap"
                                    >
                                        <span className="hidden sm:inline">Voir la série ·</span> {s.photos.length} photos
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                                <div className="grid md:grid-cols-12 gap-x-10 gap-y-3 items-end">
                                    <h3 id={`serie-${s.slug}`} className="md:col-span-7 font-display text-[2.4rem] md:text-6xl text-white leading-[1.2]">
                                        {s.title}
                                    </h3>
                                    <p className="md:col-span-5 text-cream/85 font-normal leading-relaxed max-w-sm md:pb-3">{s.tagline}</p>
                                </div>
                            </div>

                            <JustifiedGallery photos={s.preview} lightboxPhotos={s.photos} rowHeight={380} singleRow />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
