"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const nodes = ["Identity", "Presence", "Intelligence", "Infrastructure"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 md:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(66,106,140,0.34),transparent_34%),radial-gradient(circle_at_22%_18%,rgba(196,145,47,0.18),transparent_31%),linear-gradient(135deg,#0A0A0A_0%,#111111_46%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(237,232,222,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.025)_1px,transparent_1px)] bg-[size:88px_88px]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-gold">
            Gent Ascend Collective
          </p>
          <h1 className="font-serif text-5xl leading-[0.96] text-ivory sm:text-6xl lg:text-7xl">
            Built for Businesses With Roots, Reputation, and Room to Ascend.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted md:text-lg">
            We build the digital world around serious local businesses: the story
            people connect with, the website they trust, the systems that capture
            the work, and the intelligent tools that help the operation move sharper.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="#apply">Start Your Ascent</Button>
            <Button href="#framework" variant="secondary">
              Explore the Framework
            </Button>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Identity • Presence • Intelligence • Infrastructure
          </p>
        </motion.div>
        <Emblem />
      </div>
    </section>
  );
}

function Emblem() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[560px]"
      aria-label="Ascend Framework emblem"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[8%] rounded-full border border-gold/45 shadow-[0_0_70px_rgba(196,145,47,0.18)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[15%] rounded-full border border-dashed border-steel-bright/45"
      />
      <motion.div
        animate={{ opacity: [0.5, 0.95, 0.5], scale: [0.98, 1.03, 0.98] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[26%] rounded-full bg-steel/18 blur-2xl"
      />
      <div className="absolute inset-[25%] rounded-full border border-white/10 bg-graphite/65 backdrop-blur-sm" />
      <div className="absolute left-1/2 top-1/2 h-[42%] w-[32%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright via-gold to-gold-bright" />
        <div className="absolute bottom-[14%] left-[16%] h-[54%] w-px rotate-[-31deg] bg-gradient-to-t from-steel-bright/40 to-gold" />
        <div className="absolute bottom-[14%] right-[16%] h-[54%] w-px rotate-[31deg] bg-gradient-to-t from-steel-bright/40 to-gold" />
        <div className="absolute left-1/2 top-0 h-[34%] w-[34%] -translate-x-1/2 rotate-45 border-l border-t border-gold-bright" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
      {nodes.map((node, index) => {
        const positions = [
          "left-1/2 top-0 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "bottom-0 left-1/2 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
        ];
        return (
          <div
            key={node}
            className={`absolute ${positions[index]} min-w-24 border border-gold/35 bg-obsidian/80 px-3 py-2 text-center text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-ivory shadow-[0_0_28px_rgba(66,106,140,0.2)] backdrop-blur-md sm:min-w-32 sm:text-xs`}
          >
            {node}
          </div>
        );
      })}
    </motion.div>
  );
}
