"use client";

import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import React, { useState } from "react";
import AnimatedGoldLine from "./AnimatedGoldLine";
import MagneticButton from "./MagneticButton";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Basic client-side validation
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus("error");
            setErrorMessage("Veuillez entrer une adresse email valide.");
            return;
        }

        if (!message || message.trim().length < 10) {
            setStatus("error");
            setErrorMessage("Votre message doit contenir au moins 10 caractères.");
            return;
        }

        try {
            // On utilise la route API interne du site au lieu de l'IP directe
            // Cela permet de contourner le problème du "Mixed Content" sur Vercel
            const API_URL = "/api/contact";

            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                type: formData.get("type"),
                message: formData.get("message"),
                date: new Date().toISOString()
            };

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
                setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Impossible de joindre le serveur. Vérifiez votre connexion.");
        }
    };

    const fadeUp = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
    };

    return (
        <section id="contact" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-dark border-t border-white/5 scroll-mt-20">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.span
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="block font-serif text-cream/90 font-medium tracking-[0.3em] text-xs md:text-sm uppercase mb-4"
                    >
                        Contact
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl text-white mt-2 mb-4"
                    >
                        Travaillons Ensemble
                    </motion.h2>
                    <AnimatedGoldLine className="mt-4 mb-8" />
                    <motion.p
                        variants={fadeUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-cream/70 font-light"
                    >
                        Un projet ? Une idée ? N&apos;hésitez pas à me contacter.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-navy text-gold rounded-full flex items-center justify-center mb-6 border border-gold/30">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="font-display text-2xl text-white font-bold mb-2">Message envoyé !</h3>
                                <p className="text-cream/70 font-light">Je vous répondrai dans les plus brefs délais.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-gold font-serif text-sm uppercase tracking-widest hover:text-white transition-colors border-b border-gold pb-1"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label htmlFor="name" className="block font-serif text-xs tracking-widest uppercase text-cream/70 mb-3">Nom</label>
                                        <input type="text" id="name" name="name" required className="w-full bg-[#111A28] border border-white/5 text-white p-4 outline-none focus:border-gold/50 transition-colors" placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block font-serif text-xs tracking-widest uppercase text-cream/70 mb-3">Email</label>
                                        <input type="email" id="email" name="email" required className="w-full bg-[#111A28] border border-white/5 text-white p-4 outline-none focus:border-gold/50 transition-colors" placeholder="votre@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="type" className="block font-serif text-xs tracking-widest uppercase text-cream/70 mb-3">Type de prestation</label>
                                    <select id="type" name="type" required defaultValue="" className="w-full bg-[#111A28] border border-white/5 text-white p-4 outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer">
                                        <option value="" disabled>Sélectionnez une prestation</option>
                                        <option value="sport">Photographie Sportive</option>
                                        <option value="portrait">Portrait</option>
                                        <option value="business">Entreprise &amp; Commerce</option>
                                        <option value="event">Événementiel</option>
                                        <option value="other">Autre demande</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-serif text-xs tracking-widest uppercase text-cream/70 mb-3">Message</label>
                                    <textarea id="message" name="message" required rows={4} minLength={10} className="w-full bg-[#111A28] border border-white/5 text-white p-4 outline-none focus:border-gold/50 transition-colors resize-none" placeholder="Décrivez votre projet..."></textarea>
                                </div>

                                {/* Error message */}
                                {status === "error" && (
                                    <p className="text-red-400 text-sm">{errorMessage}</p>
                                )}

                                <div className="pt-2">
                                    <MagneticButton className="inline-block">
                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="border border-gold text-gold hover:bg-gold hover:text-dark transition-all duration-300 px-10 py-4 uppercase tracking-[0.2em] text-xs font-medium disabled:opacity-70 min-h-[48px]"
                                        >
                                            {status === "submitting" ? "Envoi en cours..." : "Envoyer"}
                                        </button>
                                    </MagneticButton>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-12 lg:pl-16 mt-8 lg:mt-0 lg:border-l lg:border-white/10"
                    >
                        <div>
                            <div className="font-serif text-xs tracking-[0.2em] uppercase text-gold mb-4">Email</div>
                            <a href="mailto:sd.photo32@gmail.com" className="font-medium text-cream/90 tracking-wide text-lg hover:text-gold transition-colors">
                                sd.photo32@gmail.com
                            </a>
                        </div>

                        <div>
                            <div className="font-serif text-xs tracking-[0.2em] uppercase text-gold mb-4">Localisation</div>
                            <div className="font-medium text-cream/90 tracking-wide text-lg">
                                Auch, Occitanie — France
                            </div>
                        </div>

                        <div>
                            <div className="font-serif text-xs tracking-[0.2em] uppercase text-gold mb-4">Réseaux</div>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/lens.bysteve/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-transparent border border-white/10 rounded-sm flex items-center justify-center hover:border-gold/50 transition-colors duration-300 group">
                                    <Instagram className="text-cream/70 w-5 h-5 group-hover:text-gold transition-colors" />
                                </a>
                                <a href="mailto:sd.photo32@gmail.com" className="w-12 h-12 bg-transparent border border-white/10 rounded-sm flex items-center justify-center hover:border-gold/50 transition-colors duration-300 group">
                                    <Mail className="text-cream/70 w-5 h-5 group-hover:text-gold transition-colors" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Section Divider to Footer (Navy) */}
            <div className="absolute bottom-0 left-0 w-full h-[80px] bg-navy [clip-path:polygon(0_40%,100%_0%,100%_100%,0_100%)] z-20 pointer-events-none" />
        </section>
    );
}
