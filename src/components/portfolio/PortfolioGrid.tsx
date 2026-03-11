'use client'
import { useState, useMemo, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { photos, Category } from '@/data/portfolio'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItem from './PortfolioItem'
import Lightbox from './Lightbox'
import { useRef } from 'react'

export default function PortfolioGrid() {
    const [activeCategory, setActiveCategory] = useState<Category>('tous')
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const filtered = useMemo(() => {
        if (activeCategory === 'tous') {
            return photos.slice(0, 6)
        }
        return photos.filter(p => p.category === activeCategory)
    }, [activeCategory])

    const openLightbox = useCallback((index: number) => {
        setLightboxIndex(index)
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null)
    }, [])

    const nextPhoto = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev + 1) % filtered.length : null
        )
    }, [filtered.length])

    const prevPhoto = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        )
    }, [filtered.length])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div>
            <PortfolioFilters active={activeCategory} onChange={(cat) => {
                setActiveCategory(cat)
                setLightboxIndex(null) // Close lightbox on filter change
            }} />

            {/* Grille Desktop : Grid pour "tous", Masonry pour le reste */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`desktop-${activeCategory}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className={
                        `hidden ${activeCategory === 'tous'
                            ? "md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            : "md:block md:columns-2 lg:columns-3 gap-6"}`
                    }
                >
                    {filtered.map((photo, index) => (
                        <div key={photo.id} className={activeCategory === 'tous' ? "" : "break-inside-avoid"}>
                            <PortfolioItem
                                photo={photo}
                                index={index}
                                onClick={() => openLightbox(index)}
                            />
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Carousel Mobile : Visible uniquement sur mobile */}
            <div className="md:hidden relative group/carousel overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`mobile-${activeCategory}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-8"
                        ref={scrollContainerRef}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {filtered.map((photo, index) => (
                            <div key={photo.id} className="min-w-[85vw] snap-center first:pl-2 last:pr-2">
                                <PortfolioItem
                                    photo={photo}
                                    index={index}
                                    onClick={() => openLightbox(index)}
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Boutons de navigation mobile (Overlay) */}
                {filtered.length > 1 && (
                    <>
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-navy/80 border border-gold/20 flex items-center justify-center text-gold rounded-full -translate-x-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-navy/80 border border-gold/20 flex items-center justify-center text-gold rounded-full translate-x-1/2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </>
                )}

                {/* Swipe Indicator (Subtle) */}
                <div className="flex justify-center gap-1.5 mt-2">
                    {filtered.map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gold/20" />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <Lightbox
                    photos={filtered}
                    currentIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={nextPhoto}
                    onPrev={prevPhoto}
                />
            )}
        </div>
    )
}
