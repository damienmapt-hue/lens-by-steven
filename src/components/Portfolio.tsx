'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { series } from '@/data/series'
import JustifiedGallery from '@/components/portfolio/JustifiedGallery'
import TextReveal from '@/components/TextReveal'

export default function Portfolio() {
    return (
        <section id="travail" className="py-24 md:py-32 scroll-mt-20" style={{ background: 'linear-gradient(180deg, #0D1520 0%, #1B2A4A 12%, #1B2A4A 88%, #0D1520 100%)' }}>
            <div className="max-w-7xl mx-auto px-5 md:px-12">

                <div className="mb-16 md:mb-24 max-w-3xl">
                    <motion.span
                        className="text-gold tracking-[0.35em] text-xs uppercase font-normal"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Portfolio
                    </motion.span>
                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl font-display text-white mt-4 leading-[1.08]">
                            Quatre univers,<br />un même regard.
                        </h2>
                    </TextReveal>
                    <motion.p
                        className="text-cream/80 mt-6 max-w-xl font-normal leading-relaxed"
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
                            <div className="grid md:grid-cols-12 gap-x-8 gap-y-5 items-end mb-8 md:mb-10">
                                <div className="md:col-span-7">
                                    <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-3">
                                        {s.index} — {s.kicker}
                                    </p>
                                    <h3 id={`serie-${s.slug}`} className="font-display text-4xl md:text-6xl text-white leading-[1.05]">
                                        {s.title}
                                    </h3>
                                </div>
                                <div className="md:col-span-5 md:pb-2">
                                    <p className="text-cream/80 font-normal leading-relaxed max-w-sm mb-5">{s.tagline}</p>
                                    <Link
                                        href={`/portfolio/${s.slug}`}
                                        className="group inline-flex items-center gap-3 text-gold uppercase tracking-[0.25em] text-xs border-b border-gold/40 pb-2 hover:border-gold transition-colors"
                                    >
                                        Voir la série · {s.photos.length} photos
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
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
