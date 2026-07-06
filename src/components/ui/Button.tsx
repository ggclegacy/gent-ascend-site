"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = HTMLMotionProps<"a"> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "border-gold/70 bg-gold text-obsidian shadow-[0_0_36px_rgba(196,145,47,0.18)] hover:bg-gold-bright"
      : "border-steel/45 bg-graphite/45 text-ivory hover:border-steel-bright hover:bg-steel/20";

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`inline-flex min-h-12 items-center justify-center border px-5 text-sm font-semibold uppercase tracking-[0.16em] transition-colors ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
