'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Photo } from '@/data/portfolio'
import { useEffect, useCallback, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface LightboxProps {
    photos: Photo[]
    currentIndex: number
    onClose: () => void
    onNext: () => void
    onPrev: () => void
}

export default function Lightbox({ photos, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
    const photo = photos[currentIndex]
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [direction, setDirection] = useState(0)

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    // Keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
        if (e.key === 'ArrowRight') { setDirection(1); onNext() }
        if (e.key === 'ArrowLeft') { setDirection(-1); onPrev() }
    }, [onClose, onNext, onPrev])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    // Swipe handling
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return
        const diff = touchStart - e.changedTouches[0].clientX
        if (Math.abs(diff) > 60) {
            if (diff > 0) { setDirection(1); onNext() }
            else { setDirection(-1); onPrev() }
        }
        setTouchStart(null)
    }

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-dark/95 backdrop-blur-xl"
                    onClick={onClose}
                />

                {/* Header bar */}
                <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-3">
                        <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-light">
                            {photo.category}
                        </span>
                        <span className="text-cream/30 text-xs">—</span>
                        <span className="text-cream/50 text-xs font-light">
                            {photo.alt}
                        </span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-cream/40 text-xs tracking-widest font-light tabular-nums">
                            {currentIndex + 1} / {photos.length}
                        </span>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center text-cream/60 hover:text-white transition-colors"
                            aria-label="Fermer"
                        >
                            <X className="w-5 h-5" strokeWidth={1.5} />
                        </button>
                    </div>
                </div>

                {/* Main image */}
                <div
                    className="relative z-10 w-full h-full px-4 py-20 md:px-20 md:py-24 flex items-center justify-center pointer-events-none"
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={photo.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative w-full h-full max-w-6xl mx-auto pointer-events-auto"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation arrows — desktop only */}
                <button
                    onClick={() => { setDirection(-1); onPrev() }}
                    className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border border-white/10 bg-dark/40 backdrop-blur-sm text-cream/60 hover:text-white hover:border-gold/40 transition-all duration-300 group"
                    aria-label="Photo précédente"
                >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </button>
                <button
                    onClick={() => { setDirection(1); onNext() }}
                    className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full border border-white/10 bg-dark/40 backdrop-blur-sm text-cream/60 hover:text-white hover:border-gold/40 transition-all duration-300 group"
                    aria-label="Photo suivante"
                >
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </button>

                {/* Bottom gold line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gold/60"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / photos.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
            </motion.div>
        </AnimatePresence>
    )
}
