'use client'
import { motion } from 'framer-motion'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import TextReveal from '@/components/TextReveal'

export default function Portfolio() {
    return (
        <section id="travail" className="py-24 bg-navy scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header section — pattern uniforme */}
                <div className="text-center mb-16">
                    <motion.span
                        className="text-gold tracking-[0.35em] text-xs uppercase font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        PORTFOLIO
                    </motion.span>

                    <TextReveal delay={0.1}>
                        <h2 className="text-5xl md:text-6xl font-display text-white mt-3">
                            Mon Travail
                        </h2>
                    </TextReveal>

                    {/* Ligne gold qui se dessine */}
                    <motion.div
                        className="h-px bg-gold mx-auto mt-5"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: '4rem', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <motion.p
                        className="text-cream/60 text-sm mt-5 max-w-md mx-auto font-light tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Une sélection de réalisations à travers la diversité de mes compétences.
                    </motion.p>
                </div>

                {/* Grille masonry */}
                <PortfolioGrid />

            </div>
        </section>
    )
}
