'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Photo } from '@/data/series'
import Lightbox from './Lightbox'

interface JustifiedGalleryProps {
    photos: Photo[]
    /** Hauteur cible d'une rangée, en pixels (desktop). */
    rowHeight?: number
    priorityCount?: number
    /** Photos parcourues dans la visionneuse (par défaut : celles affichées). */
    lightboxPhotos?: Photo[]
    /** Toutes les photos sur une seule rangée (ordinateur). */
    singleRow?: boolean
}

export default function JustifiedGallery({ photos, rowHeight = 320, priorityCount = 0, lightboxPhotos, singleRow = false }: JustifiedGalleryProps) {
    const all = lightboxPhotos ?? photos
    const [open, setOpen] = useState<number | null>(null)
    const close = useCallback(() => setOpen(null), [])
    const next = useCallback(() => setOpen(i => (i === null ? null : (i + 1) % all.length)), [all.length])
    const prev = useCallback(() => setOpen(i => (i === null ? null : (i - 1 + all.length) % all.length)), [all.length])

    return (
        <>
            <div
                className={`flex flex-wrap ${singleRow ? 'md:flex-nowrap' : ''} gap-2 md:gap-3 [--rh:190px] sm:[--rh:240px] md:[--rh:var(--rh-md)]`}
                style={{ ['--rh-md' as string]: `${rowHeight}px` }}
            >
                {photos.map((photo, i) => {
                    const ratio = photo.w / photo.h
                    return (
                        <motion.button
                            key={photo.id}
                            type="button"
                            onClick={() => setOpen(Math.max(0, all.findIndex(p => p.id === photo.id)))}
                            aria-label={`Agrandir : ${photo.caption}`}
                            className="group relative block overflow-hidden bg-dark/40 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                            style={{
                                flexGrow: ratio * 100,
                                flexBasis: `calc(var(--rh) * ${ratio})`,
                            }}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="block" style={{ paddingBottom: `${100 / ratio}%` }} />
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                quality={85}
                                priority={i < priorityCount}
                                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 40vw, 600px"
                                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                            />
                            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-dark/80 via-dark/20 to-transparent px-4 pb-3 pt-12 text-left opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                                <span className="mb-2 block h-px w-6 bg-gold" />
                                <span className="text-sm font-light leading-snug text-white">{photo.caption}</span>
                            </span>
                        </motion.button>
                    )
                })}
                {!singleRow && <span aria-hidden className="block" style={{ flexGrow: 10000, flexBasis: 0 }} />}
            </div>

            {open !== null && (
                <Lightbox photos={all} currentIndex={open} onClose={close} onNext={next} onPrev={prev} />
            )}
        </>
    )
}
