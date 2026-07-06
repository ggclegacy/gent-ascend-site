"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const frameworkPlaques = [
  {
    label: "Identity",
    position:
      "left-[7%] top-[18%] sm:left-[8%] sm:top-[20%] lg:left-[6%] lg:top-[19%]",
  },
  {
    label: "Presence",
    position:
      "right-[7%] top-[18%] sm:right-[8%] sm:top-[20%] lg:right-[6%] lg:top-[19%]",
  },
  {
    label: "Intelligence",
    position:
      "bottom-[15%] left-[5%] sm:bottom-[17%] sm:left-[7%] lg:bottom-[18%] lg:left-[5%]",
  },
  {
    label: "Infrastructure",
    position:
      "bottom-[15%] right-[5%] sm:bottom-[17%] sm:right-[7%] lg:bottom-[18%] lg:right-[5%]",
  },
];

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
      className="relative aspect-square w-full max-w-[720px]"
      aria-label="Gent Ascend Collective emblem"
    >
      <div className="absolute inset-[4%] rounded-full border border-white/[0.04] bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.024)_1px,transparent_1px)] bg-[size:38px_38px] opacity-80 [mask-image:radial-gradient(circle,black_0%,black_56%,transparent_76%)]" />
      <div className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/28 to-transparent" />
      <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/22 to-transparent" />
      <div className="absolute inset-[16%] rounded-full border border-white/[0.06]" />
      <div className="absolute inset-[24%] rounded-full border border-white/[0.04]" />

      <motion.div
        animate={{ opacity: [0.34, 0.7, 0.34], scale: [0.97, 1.035, 0.97] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.28)_0%,rgba(196,145,47,0.13)_34%,transparent_68%)] blur-3xl"
      />

      <div className="absolute inset-[13%] rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_50%_35%,rgba(237,232,222,0.05),transparent_24%),linear-gradient(145deg,rgba(26,26,26,0.66),rgba(10,10,10,0.5)_58%,rgba(47,69,92,0.16))] shadow-[0_56px_150px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(237,232,222,0.08),inset_0_-1px_0_rgba(196,145,47,0.14),inset_0_0_86px_rgba(66,106,140,0.12)] backdrop-blur-md" />
      <div className="absolute inset-[17%] rounded-full border border-gold/20 bg-[conic-gradient(from_40deg,transparent_0deg,rgba(196,145,47,0.22)_18deg,transparent_42deg,transparent_142deg,rgba(66,106,140,0.24)_174deg,transparent_206deg,transparent_308deg,rgba(224,184,74,0.18)_326deg,transparent_360deg)] opacity-70" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 86, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[3%] rounded-full border border-gold/20 shadow-[0_0_42px_rgba(196,145,47,0.1)]"
      >
        <span className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright/80 to-transparent" />
        <span className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright/70 to-transparent" />
        <span className="absolute right-[12%] top-[16%] h-px w-24 rotate-45 bg-gradient-to-r from-transparent via-gold/75 to-transparent" />
        <span className="absolute bottom-[16%] left-[12%] h-px w-24 rotate-45 bg-gradient-to-r from-transparent via-steel-bright/70 to-transparent" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 118, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[9%] rounded-full border border-dashed border-steel-bright/30 shadow-[0_0_40px_rgba(66,106,140,0.12)]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 64, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[7%] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,transparent_28deg,rgba(224,184,74,0.78)_34deg,rgba(196,145,47,0.45)_44deg,transparent_55deg,transparent_166deg,rgba(66,106,140,0.72)_178deg,transparent_194deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 74, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[20%] rounded-full bg-[conic-gradient(from_10deg,transparent_0deg,rgba(66,106,140,0.64)_24deg,transparent_46deg,transparent_214deg,rgba(224,184,74,0.72)_236deg,transparent_258deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[16%] rounded-full"
      >
        <span className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-bright/85 to-transparent shadow-[0_0_26px_rgba(224,184,74,0.48)]" />
        <span className="absolute bottom-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-steel-bright/85 to-transparent shadow-[0_0_26px_rgba(66,106,140,0.48)]" />
        <span className="absolute left-0 top-1/2 h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/65 to-transparent" />
        <span className="absolute right-0 top-1/2 h-px w-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-steel-bright/75 to-transparent" />
      </motion.div>

      <div className="absolute inset-[12%] rounded-full">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-2 w-px bg-ivory/10"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                index * 7.5
              }deg) translateY(calc(-1 * min(36vw, 276px)))`,
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ opacity: [0.24, 0.52, 0.24], scale: [0.99, 1.025, 0.99] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[23%] rounded-full border border-steel-bright/25 bg-steel/10 shadow-[0_0_54px_rgba(66,106,140,0.16)]"
      />
      <div className="absolute inset-[22%] rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.68),rgba(10,10,10,0.8))] shadow-[inset_0_0_92px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-sm" />
      <div className="absolute inset-[27%] rounded-full border border-gold/30 bg-[radial-gradient(circle_at_50%_34%,rgba(66,106,140,0.14),rgba(10,10,10,0.86)_58%)] shadow-[0_0_96px_rgba(196,145,47,0.17),inset_0_0_78px_rgba(66,106,140,0.14),inset_0_1px_0_rgba(224,184,74,0.12)]" />

      <motion.div
        animate={{
          scale: [1, 1.018, 1],
          filter: [
            "drop-shadow(0 0 18px rgba(196,145,47,0.22)) drop-shadow(0 0 28px rgba(66,106,140,0.18))",
            "drop-shadow(0 0 28px rgba(224,184,74,0.32)) drop-shadow(0 0 44px rgba(66,106,140,0.26))",
            "drop-shadow(0 0 18px rgba(196,145,47,0.22)) drop-shadow(0 0 28px rgba(66,106,140,0.18))",
          ],
        }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
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
          animate={{ x: ["-145%", "145%"] }}
          transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-ivory/12 to-transparent"
        />
      </div>

      {frameworkPlaques.map((plaque) => (
        <motion.a
          key={plaque.label}
          href="#framework"
          whileHover={{ y: -4, scale: 1.015 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className={`absolute ${plaque.position} group w-[9.2rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(26,26,26,0.86),rgba(10,10,10,0.72)_58%,rgba(47,69,92,0.18))] px-3 py-2.5 text-center text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_0_24px_rgba(66,106,140,0.16),inset_0_1px_0_rgba(237,232,222,0.08),inset_0_-1px_0_rgba(196,145,47,0.12)] backdrop-blur-md transition-colors hover:border-gold-bright hover:text-gold-bright hover:shadow-[0_0_42px_rgba(66,106,140,0.34),inset_0_1px_0_rgba(237,232,222,0.13)] sm:w-44 sm:px-4 sm:py-3 sm:text-xs`}
        >
          <span className="mb-2 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <span className="h-px bg-gradient-to-r from-transparent to-steel-bright/60 transition-colors group-hover:to-gold-bright/70" />
            <span className="size-1.5 rotate-45 border border-steel-bright/70 transition-colors group-hover:border-gold-bright" />
            <span className="h-px bg-gradient-to-l from-transparent to-steel-bright/60 transition-colors group-hover:to-gold-bright/70" />
          </span>
          {plaque.label}
        </motion.a>
      ))}
    </motion.div>
  );
}
