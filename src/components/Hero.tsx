"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const pillars = ["Identity", "Presence", "Intelligence", "Infrastructure"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_34%,rgba(66,106,140,0.34),transparent_32%),radial-gradient(circle_at_50%_18%,rgba(196,145,47,0.16),transparent_26%),linear-gradient(180deg,#0A0A0A_0%,#111111_48%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.022)_1px,transparent_1px)] bg-[size:92px_92px]" />
      <div className="absolute inset-x-[14%] top-20 -z-10 h-[78%] bg-[linear-gradient(90deg,transparent,rgba(237,232,222,0.035),transparent)] blur-sm" />
      <div className="absolute left-1/2 top-24 -z-10 h-[70%] w-px -translate-x-1/2 bg-gradient-to-b from-gold/35 via-steel-bright/15 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-xs font-semibold uppercase tracking-[0.38em] text-gold"
        >
          Gent Ascend Collective
        </motion.p>

        <HeroMedallion />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-5xl"
        >
          <h1 className="font-serif text-5xl uppercase leading-[0.9] tracking-[0.12em] text-ivory sm:text-6xl md:text-7xl">
            <span className="block text-gold-bright">Gent Ascend</span>
            <span className="block text-ivory">Collective</span>
          </h1>
          <p className="mx-auto mt-8 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Built for Businesses With Roots, Reputation, and Room to Ascend.
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg">
            We build the digital world around serious local businesses — the
            story people connect with, the website they trust, the systems that
            capture the work, and the intelligent tools that help the operation
            move sharper.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#apply">Start Your Ascent</Button>
            <Button href="#framework" variant="secondary">
              Explore the Framework
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroMedallion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square w-full max-w-[660px]"
      aria-label="Gent Ascend Collective emblem"
    >
      <motion.div
        animate={{ opacity: [0.38, 0.82, 0.38], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[11%] rounded-full bg-[radial-gradient(circle,rgba(196,145,47,0.2),rgba(66,106,140,0.22)_42%,transparent_70%)] blur-2xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[3%] rounded-full border border-gold/25"
      >
        <span className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright to-transparent" />
        <span className="absolute bottom-0 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright to-transparent" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 76, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-dashed border-steel-bright/35"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full"
      >
        <span className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-bright to-transparent shadow-[0_0_28px_rgba(224,184,74,0.55)]" />
        <span className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-steel-bright to-transparent shadow-[0_0_28px_rgba(66,106,140,0.5)]" />
      </motion.div>

      <div className="absolute inset-[20%] rounded-full border border-white/10 bg-graphite/50 shadow-[inset_0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-sm" />
      <div className="absolute inset-[26%] rounded-full border border-gold/25 bg-obsidian/72 shadow-[0_0_90px_rgba(196,145,47,0.18),inset_0_0_70px_rgba(66,106,140,0.12)]" />

      <motion.div
        animate={{
          scale: [1, 1.025, 1],
          filter: [
            "drop-shadow(0 0 22px rgba(196,145,47,0.24)) drop-shadow(0 0 34px rgba(66,106,140,0.18))",
            "drop-shadow(0 0 34px rgba(224,184,74,0.36)) drop-shadow(0 0 54px rgba(66,106,140,0.28))",
            "drop-shadow(0 0 22px rgba(196,145,47,0.24)) drop-shadow(0 0 34px rgba(66,106,140,0.18))",
          ],
        }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[29%] grid place-items-center"
      >
        <Image
          src="/heroicon.png"
          alt="Gent Ascend Collective emblem"
          width={540}
          height={540}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="absolute inset-[31%] overflow-hidden rounded-full">
        <motion.span
          animate={{ x: ["-140%", "140%"] }}
          transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-gold-bright/15 to-transparent"
        />
      </div>

      {pillars.map((pillar, index) => {
        const positions = [
          "left-1/2 top-2 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "bottom-2 left-1/2 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
        ];

        return (
          <motion.a
            key={pillar}
            href="#framework"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`absolute ${positions[index]} min-w-28 border border-gold/30 bg-obsidian/82 px-3 py-2 text-center text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-ivory shadow-[0_0_28px_rgba(66,106,140,0.2)] backdrop-blur-md transition-colors hover:border-gold hover:text-gold-bright hover:shadow-[0_0_36px_rgba(66,106,140,0.34)] sm:min-w-40 sm:px-4 sm:py-3 sm:text-xs`}
          >
            {pillar}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
