"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PremiumCardProps = {
  children: ReactNode;
  className?: string;
};

export function PremiumCard({ children, className = "" }: PremiumCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden border border-white/10 bg-carbon/80 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
      <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-steel-bright/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.article>
  );
}
