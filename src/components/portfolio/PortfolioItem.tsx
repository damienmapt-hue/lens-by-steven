'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Photo } from '@/data/portfolio'
import { useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Hauteurs selon la taille
const heightMap = {
    sm: 'h-[260px]',
    md: 'h-[380px]',
    lg: 'h-[520px]',
}

interface PortfolioItemProps {
    photo: Photo
    index: number
    onClick?: () => void
}

export default function PortfolioItem({ photo, index, onClick }: PortfolioItemProps) {
    const containerRef = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Subtil décalage parallax — lissé avec useSpring et désactivé sur mobile
    const yRaw = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -60])
    const y = useSpring(yRaw, { stiffness: 100, damping: 30, restDelta: 0.001 })

    return (
        <motion.div
            ref={containerRef}
            data-cursor="VOIR"
            onClick={onClick}
            className={`relative overflow-hidden rounded-sm mb-3 group cursor-pointer transition-all duration-500 ${heightMap[photo.size]}`}
            // Animation d'entrée isolée (Slide depuis le bas)
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.8,
                delay: (index % 3) * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
            }}
        >
            {/* Conteneur Interne pour le Parallax — évite les conflits de transformation 'y' */}
            <motion.div style={{ y }} className="w-full h-full will-change-transform">
                {/* Image avec zoom au hover (Lens Effect) */}
                <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-all duration-700"
                        style={{ objectPosition: photo.objectPosition || 'center' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Vignette dynamique au hover (Effect Lens) */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"
                    />
                </motion.div>

                {/* Overlay au hover — more subtle and elegant */}
                <motion.div
                    className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8"
                >
                    <motion.div
                        className="transform transition-all duration-700 delay-100 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        {/* Ligne gold animée */}
                        <div
                            className="h-[1px] bg-gold mb-4 transition-all duration-1000 delay-200 w-0 group-hover:w-10"
                        />

                        <p className="text-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-2">
                            {photo.category}
                        </p>
                        <h3 className="text-2xl font-display text-white tracking-wide leading-tight">
                            {photo.title || 'Portfolio Project'}
                        </h3>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
