'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface TextRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.16, 1, 0.3, 1] // Custom luxury ease
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
