'use client'
import { motion } from 'framer-motion'
import { Category } from '@/data/portfolio'

const categories: { value: Category; label: string }[] = [
    { value: 'tous', label: 'Tous' },
    { value: 'sport', label: 'Sport' },
    { value: 'portraits', label: 'Portraits' },
    { value: 'evenementiel', label: 'Événementiel' },
    { value: 'entreprises', label: 'Entreprises' },
]

interface FiltersProps {
    active: Category
    onChange: (cat: Category) => void
}

export default function PortfolioFilters({ active, onChange }: FiltersProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {categories.map((cat) => (
                <button
                    key={cat.value}
                    onClick={() => onChange(cat.value)}
                    className="relative px-6 py-3 text-xs tracking-[0.25em] uppercase transition-colors duration-300 min-h-[44px]"
                    style={{ color: active === cat.value ? '#0D1520' : '#E8DCC8' }}
                >
                    {/* Background pill animé */}
                    {active === cat.value && (
                        <motion.span
                            layoutId="active-filter"
                            className="absolute inset-0 bg-[#C9A84C]/90 rounded-sm backdrop-blur-[2px] border border-[#C9A84C]/50 shadow-lg shadow-gold/20"
                            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                    )}
                    {/* Bordure sur les inactifs */}
                    {active !== cat.value && (
                        <span className="absolute inset-0 border border-[#C9A84C]/30 rounded-sm" />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                </button>
            ))}
        </div>
    )
}
