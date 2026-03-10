"use client";

import { motion } from "framer-motion";

interface AnimatedGoldLineProps {
    className?: string;
}

export default function AnimatedGoldLine({ className = "mt-6" }: AnimatedGoldLineProps) {
    return (
        <motion.div
            className={`h-[1px] bg-gold mx-auto ${className}`}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
    );
}
