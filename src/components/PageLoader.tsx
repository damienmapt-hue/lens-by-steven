"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[9998] bg-dark flex items-center justify-center"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="font-serif text-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-3">Lens By Steven</p>
                        <div className="w-16 h-[1px] bg-gold mx-auto animate-pulse" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
