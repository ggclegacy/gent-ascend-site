"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const pillars = ["Identity", "Presence", "Intelligence", "Infrastructure"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_28%,rgba(66,106,140,0.42),transparent_28%),radial-gradient(circle_at_50%_15%,rgba(224,184,74,0.14),transparent_24%),radial-gradient(circle_at_18%_60%,rgba(47,69,92,0.2),transparent_30%),linear-gradient(180deg,#0A0A0A_0%,#111111_42%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.022)_1px,transparent_1px)] bg-[size:92px_92px]"
      />
      <div className="absolute inset-x-[10%] top-24 -z-10 h-[76%] bg-[linear-gradient(90deg,transparent,rgba(237,232,222,0.04),transparent)] blur-sm" />
      <div className="absolute left-1/2 top-24 -z-10 h-[74%] w-px -translate-x-1/2 bg-gradient-to-b from-gold/50 via-steel-bright/20 to-transparent" />
      <div className="absolute bottom-28 left-1/2 -z-10 h-px w-[min(980px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#EDE8DE_0.7px,transparent_0.8px)] [background-size:18px_18px]" />

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
          <h1 className="font-serif text-[clamp(3rem,8vw,6.75rem)] uppercase leading-[0.86] tracking-[0.13em] text-ivory">
            <span className="block bg-gradient-to-b from-gold-bright via-gold to-[#8F651F] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(196,145,47,0.22)]">
              Gent Ascend
            </span>
            <span className="mt-2 block text-ivory drop-shadow-[0_0_22px_rgba(237,232,222,0.08)]">
              Collective
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-4xl font-serif text-3xl leading-tight text-ivory md:text-5xl">
            Built for Businesses With Roots, Reputation, and Room to Ascend.
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted md:text-lg">
            We build the digital world around serious local businesses — the
            story people connect with, the presence they trust, the intelligent
            tools that save time, and the infrastructure that keeps the
            operation moving.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="#apply"
              className="border-gold-bright/70 bg-[linear-gradient(135deg,#E0B84A_0%,#C4912F_48%,#8F651F_100%)] px-6 text-obsidian shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_0_44px_rgba(196,145,47,0.22)] hover:bg-[linear-gradient(135deg,#F0CA60_0%,#C4912F_54%,#8F651F_100%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_0_58px_rgba(224,184,74,0.34)]"
            >
              Start Your Ascent
            </Button>
            <Button
              href="#framework"
              variant="secondary"
              className="border-gold/45 bg-obsidian/45 px-6 text-ivory shadow-[inset_0_1px_0_rgba(237,232,222,0.08),0_0_34px_rgba(66,106,140,0.14)] hover:border-gold hover:bg-steel/20 hover:shadow-[0_0_48px_rgba(66,106,140,0.28)]"
            >
              Explore the Framework
            </Button>
          </div>
          <p className="mx-auto mt-9 max-w-3xl text-xs font-semibold uppercase leading-7 tracking-[0.24em] text-muted">
            Identity • Presence • Intelligence • Infrastructure
          </p>
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
      className="relative aspect-square w-full max-w-[700px]"
      aria-label="Gent Ascend Collective emblem"
    >
      <motion.div
        animate={{ opacity: [0.38, 0.86, 0.38], scale: [0.94, 1.07, 0.94] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[9%] rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.2),rgba(66,106,140,0.28)_42%,transparent_70%)] blur-3xl"
      />

      <div className="absolute inset-[13%] rounded-[2.5rem] border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.68),rgba(10,10,10,0.42))] shadow-[0_45px_150px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(237,232,222,0.08),inset_0_0_70px_rgba(66,106,140,0.11)] backdrop-blur-md [transform:perspective(900px)_rotateX(3deg)]" />
      <div className="absolute inset-[15%] rounded-[2rem] border border-gold/15 bg-[linear-gradient(135deg,rgba(196,145,47,0.07),transparent_36%,rgba(66,106,140,0.09))]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 68, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[3%] rounded-full border border-gold/30 shadow-[0_0_52px_rgba(196,145,47,0.12)]"
      >
        <span className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright to-transparent" />
        <span className="absolute bottom-0 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright to-transparent" />
        <span className="absolute right-[11%] top-[17%] h-px w-20 rotate-45 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="absolute bottom-[17%] left-[11%] h-px w-20 rotate-45 bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 92, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[9%] rounded-full border border-dashed border-steel-bright/45 shadow-[0_0_48px_rgba(66,106,140,0.14)]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[17%] rounded-full"
      >
        <span className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-bright to-transparent shadow-[0_0_30px_rgba(224,184,74,0.62)]" />
        <span className="absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-steel-bright to-transparent shadow-[0_0_30px_rgba(66,106,140,0.58)]" />
        <span className="absolute left-0 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="absolute right-0 top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-steel-bright to-transparent" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.28, 0.62, 0.28], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[23%] rounded-full border border-steel-bright/25 bg-steel/10"
      />
      <div className="absolute inset-[22%] rounded-full border border-white/10 bg-graphite/58 shadow-[inset_0_0_90px_rgba(0,0,0,0.62)] backdrop-blur-sm" />
      <div className="absolute inset-[27%] rounded-full border border-gold/35 bg-obsidian/78 shadow-[0_0_100px_rgba(196,145,47,0.2),inset_0_0_76px_rgba(66,106,140,0.16)]" />

      <motion.div
        animate={{
          scale: [1, 1.032, 1],
          filter: [
            "drop-shadow(0 0 24px rgba(196,145,47,0.3)) drop-shadow(0 0 38px rgba(66,106,140,0.22))",
            "drop-shadow(0 0 40px rgba(224,184,74,0.44)) drop-shadow(0 0 68px rgba(66,106,140,0.34))",
            "drop-shadow(0 0 24px rgba(196,145,47,0.3)) drop-shadow(0 0 38px rgba(66,106,140,0.22))",
          ],
        }}
        transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[28%] grid place-items-center"
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

      <div className="absolute inset-[29%] overflow-hidden rounded-full">
        <motion.span
          animate={{ x: ["-140%", "140%"] }}
          transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-gold-bright/18 to-transparent"
        />
      </div>

      {pillars.map((pillar, index) => {
        const positions = [
          "left-1/2 top-1 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "bottom-1 left-1/2 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
        ];

        return (
          <motion.a
            key={pillar}
            href="#framework"
            whileHover={{ y: -3, scale: 1.02 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`absolute ${positions[index]} group min-w-28 border border-gold/30 bg-[linear-gradient(135deg,rgba(26,26,26,0.86),rgba(10,10,10,0.72))] px-3 py-2 text-center text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_0_28px_rgba(66,106,140,0.18),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md transition-colors hover:border-gold-bright hover:text-gold-bright hover:shadow-[0_0_42px_rgba(66,106,140,0.4),inset_0_1px_0_rgba(237,232,222,0.12)] sm:min-w-40 sm:px-4 sm:py-3 sm:text-xs`}
          >
            <span className="mx-auto mb-2 block h-px w-8 bg-gradient-to-r from-transparent via-steel-bright to-transparent transition-all group-hover:w-12 group-hover:via-gold-bright" />
            {pillar}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
