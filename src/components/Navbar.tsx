"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import MagneticButton from "./MagneticButton";

const links = [
    { name: "Travail", href: "#travail" },
    { name: "Prestations", href: "#prestations" },
    { name: "À propos", href: "#a-propos" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [navState, setNavState] = useState<'top' | 'scrolled' | 'light'>('top');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 50) {
                setNavState('top');
                return;
            }

            const testimonialsEl = document.getElementById('temoignages');
            if (testimonialsEl) {
                const rect = testimonialsEl.getBoundingClientRect();
                // Check if the navbar is overlapping with the testimonials section
                if (rect.top <= 80 && rect.bottom >= 80) {
                    setNavState('light');
                    return;
                }
            }

            setNavState('scrolled');
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check in case they loaded halfway down the page
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getNavBg = () => {
        if (navState === 'top') return 'bg-transparent py-6';
        if (navState === 'light') return 'bg-cream/95 backdrop-blur-md py-4 shadow-lg border-b border-navy/10';
        return 'bg-navy/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-gold/20';
    };

    const getTextColor = () => {
        if (navState === 'light') return 'text-navy hover:text-gold';
        return 'text-white hover:text-gold';
    };

    const getLogoColor = () => {
        if (navState === 'light') return 'text-navy';
        return 'text-gold';
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${getNavBg()}`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <MagneticButton>
                    <Link href="#" className={`font-display text-2xl font-bold tracking-wide transition-colors ${getLogoColor()}`}>
                        Lens By Steven
                    </Link>
                </MagneticButton>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-4">
                    {links.map((link) => (
                        <MagneticButton key={link.name}>
                            <Link
                                href={link.href}
                                className={`${getTextColor()} px-4 py-2 transition-colors text-[11px] font-medium tracking-[0.2em] uppercase`}
                            >
                                {link.name}
                            </Link>
                        </MagneticButton>
                    ))}
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className={`md:hidden ${getTextColor()} transition-colors`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left z-50"
                style={{ scaleX }}
            />

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy border-t border-navy/50 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 gap-4">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white hover:text-gold transition-colors py-2 text-lg font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
