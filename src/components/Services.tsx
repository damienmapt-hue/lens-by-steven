"use client";

import { motion, Variants } from "framer-motion";
import { Camera, User, Briefcase, CalendarHeart, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedGoldLine from "./AnimatedGoldLine";
import TextReveal from "./TextReveal";

const services = [
    {
        id: "sport",
        href: "/photographie-sportive",
        title: "Photographie Sportive",
        description: "Capturer l'intensité du mouvement, la puissance du geste et l'émotion brute de la victoire. Spécialisé dans le sport collectif et individuel, j'immortalise chaque action avec précision et réactivité. De la compétition amateur aux clubs professionnels du Gers et d'Occitanie, mes photos racontent l'histoire de chaque rencontre.",
        icon: Camera,
    },
    {
        id: "portrait",
        href: "/portrait",
        title: "Portraits Authentiques",
        description: "Révéler votre personnalité à travers des portraits naturels, élégants et intemporels. Que ce soit pour un portrait professionnel, une séance en famille ou un shooting artistique, je crée une atmosphère de confiance pour que vous soyez pleinement vous-même. Disponible à Auch et dans toute l'Occitanie.",
        icon: User,
    },
    {
        id: "business",
        href: "/photographe-entreprise",
        title: "Entreprises & Commerces",
        description: "Valoriser votre image de marque avec des visuels professionnels et percutants. Reportage d'entreprise, portraits corporate, photos de locaux et de produits — chaque image est conçue pour renforcer votre identité visuelle. Une approche sur mesure pour les TPE, PME et commerces du Gers et d'Occitanie.",
        icon: Briefcase,
    },
    {
        id: "events",
        href: "/photographe-evenementiel",
        title: "Événementiel",
        description: "Immortaliser vos moments précieux avec discrétion, sensibilité et un regard toujours en éveil. Galas, conférences, fêtes de fin d'année ou événements privés — je couvre chaque occasion avec professionnalisme. Chaque image livrée sera le souvenir vivant d'un instant unique et partagé.",
        icon: CalendarHeart,
    },
    {
        id: "mariage",
        href: "/photographe-mariage-auch",
        title: "Mariage",
        description: "Votre jour J mérite des photos qui racontent votre histoire. Reportage naturel et discret de votre mariage à Auch et dans le Gers — des préparatifs à la soirée, sans rien manquer des moments qui comptent.",
        icon: Heart,
    },
];

export default function Services() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const fadeUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <section id="prestations" className="relative pt-24 pb-32 md:pt-32 md:pb-52 bg-dark scroll-mt-20">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="block font-serif text-gold/80 font-medium tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
                    >
                        Services
                    </motion.span>
                    <TextReveal delay={0.1}>
                        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mt-2 mb-4">
                            Mes Prestations
                        </h2>
                    </TextReveal>
                    <AnimatedGoldLine />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className="relative bg-white/[0.02] border border-white/[0.08] rounded-[2px] p-8 md:p-10 group overflow-hidden hover:-translate-y-1 transition-all duration-500"
                        >
                            {/* Left gold accent — appears on hover */}
                            <div className="absolute left-0 top-0 w-[2px] h-0 bg-gold group-hover:h-full transition-all duration-700 ease-out" />

                            {/* Subtle gold glow on hover */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/0 group-hover:bg-gold/[0.04] blur-3xl transition-all duration-700 pointer-events-none" />

                            {/* Icon */}
                            <div className="mb-5">
                                <service.icon
                                    className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors duration-400"
                                    strokeWidth={1.2}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-xl md:text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Separator — expands on hover */}
                            <div className="w-8 h-px bg-gold/30 mb-4 group-hover:w-16 transition-all duration-500 ease-out" />

                            {/* Description */}
                            <p className="text-cream/60 text-sm leading-relaxed font-light mb-6">
                                {service.description}
                            </p>

                            {/* Lien vers la page dédiée */}
                            <Link
                                href={service.href}
                                className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest hover:gap-3 transition-all duration-300 font-medium"
                            >
                                En savoir plus <ArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Section Divider to About (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
