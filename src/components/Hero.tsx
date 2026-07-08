"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const CYCLE = 9.2;
const ACTIVE = 1.8;
const REPEAT_DELAY = CYCLE - ACTIVE;

type NodeKey = "origin" | "authority" | "intelligence" | "infrastructure";

const NODE_ORDER: NodeKey[] = ["origin", "authority", "intelligence", "infrastructure"];

const NODE_COPY: Record<NodeKey, string> = {
  origin: "Origin",
  authority: "Authority",
  intelligence: "Intelligence",
  infrastructure: "Infrastructure",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 md:px-8 md:pt-40"
    >
      <HeroBackground />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <Eyebrow />
        <HeroStage />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl sm:mt-14"
        >
          <Wordmark />
          <p className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(1.7rem,5.4vw,2.9rem)] leading-[1.15] text-ivory">
            Built for Businesses With{" "}
            <span className="bg-[linear-gradient(90deg,#E0B84A,#C4912F)] bg-clip-text text-transparent">
              Roots, Reputation,
            </span>{" "}
            and Room to Ascend.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[rgba(237,232,222,0.72)] md:text-lg">
            We build the digital world around serious local businesses — the
            story people connect with, the presence they trust, the intelligent
            tools that save time, and the infrastructure that keeps the
            operation moving.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <HeroButton href="#apply" variant="primary">
              Start Your Ascent
            </HeroButton>
            <HeroButton href="#framework" variant="secondary">
              Explore the Framework
            </HeroButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Eyebrow() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-9 bg-[linear-gradient(90deg,#8A641E_0%,#E0B84A_50%,#8A641E_100%)] bg-clip-text text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-transparent sm:mb-11"
    >
      Gent Ascend Collective
    </motion.p>
  );
}

function GoldLine({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="relative block bg-[linear-gradient(180deg,#F2D36A_0%,#E0B84A_28%,#C4912F_62%,#8A641E_100%)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(196,145,47,0.28)]">
      <span>{children}</span>
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_0%,transparent_30%,rgba(255,248,213,0.95)_45%,#F2D36A_52%,transparent_70%,transparent_100%)] bg-[length:260%_100%] bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["160% 50%", "-80% 50%", "160% 50%"],
          opacity: [0, 0.85, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Wordmark() {
  return (
    <h1
      className="font-serif text-[clamp(2.6rem,9vw,6rem)] uppercase leading-[0.94] tracking-[0.08em]"
      aria-label="Gent Ascend Collective"
    >
      <GoldLine>Gent</GoldLine>
      <span className="mt-1 block">
        <GoldLine delay={0.45}>Ascend</GoldLine>
      </span>
      <span className="mt-2 block text-ivory drop-shadow-[0_2px_20px_rgba(66,106,140,0.22)]">
        Collective
      </span>
    </h1>
  );
}

function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-obsidian" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_31%,rgba(47,69,92,0.28),transparent_34%),radial-gradient(circle_at_50%_43%,rgba(66,106,140,0.16),transparent_42%),linear-gradient(180deg,#0A0A0A_0%,#111111_42%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.56, 0.95, 0.56], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[36%] -z-10 h-[68vh] w-[68vh] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.14)_0%,rgba(196,145,47,0.2)_26%,rgba(66,106,140,0.16)_54%,transparent_76%)] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.28, 0.44, 0.28],
          backgroundPosition: ["0px 0px", "34px -42px", "0px 0px"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.075)_1px,transparent_1px),linear-gradient(90deg,rgba(196,145,47,0.042)_1px,transparent_1px)] bg-[size:86px_86px] [mask-image:radial-gradient(ellipse_at_50%_38%,black_0%,black_46%,transparent_78%)]"
      />
      <div className="absolute left-1/2 top-14 -z-10 h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(224,184,74,0.24)] to-transparent shadow-[0_0_24px_rgba(196,145,47,0.16)]" />
      <div className="absolute left-1/2 top-[36%] -z-10 aspect-square w-[min(740px,88vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
      <div className="absolute left-1/2 top-[36%] -z-10 aspect-square w-[min(560px,76vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-steel-bright/12" />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360, opacity: [0.22, 0.42, 0.22] }}
        transition={{ rotate: { duration: 48, repeat: Infinity, ease: "linear" }, opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute left-1/2 top-[36%] -z-10 aspect-square w-[min(690px,84vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(242,211,106,0.28)_18deg,transparent_42deg,transparent_152deg,rgba(66,106,140,0.28)_188deg,transparent_220deg,transparent_314deg,rgba(196,145,47,0.2)_336deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-58%", "58%", "-58%"], opacity: [0.08, 0.34, 0.08] }}
        transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[36%] -z-10 h-px w-[min(980px,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent shadow-[0_0_36px_rgba(224,184,74,0.2)]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_38%,transparent_38%,rgba(0,0,0,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-obsidian to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-obsidian to-transparent" />
    </>
  );
}

function HeroStage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className="hero-stage w-full max-w-[700px]"
    >
      <div className="hero-stage__origin flex flex-col items-center">
        <OperatingNode nodeKey="origin" />
        <VConnector delay={NODE_ORDER.indexOf("origin") * ACTIVE} reverse />
      </div>

      <div className="hero-stage__icon">
        <OperatingCore />
      </div>

      <div className="hero-stage__flank">
        <div className="hero-stage__intel flex items-center">
          <OperatingNode nodeKey="intelligence" />
          <HConnector delay={NODE_ORDER.indexOf("intelligence") * ACTIVE} reverse />
        </div>
        <div className="hero-stage__auth flex items-center">
          <HConnector delay={NODE_ORDER.indexOf("authority") * ACTIVE} />
          <OperatingNode nodeKey="authority" />
        </div>
      </div>

      <div className="hero-stage__infra flex flex-col items-center">
        <VConnector delay={NODE_ORDER.indexOf("infrastructure") * ACTIVE} />
        <OperatingNode nodeKey="infrastructure" />
      </div>
    </motion.div>
  );
}

function OperatingCore() {
  return (
    <div className="relative aspect-square w-[228px] sm:w-[300px] md:w-[356px] lg:w-[400px]">
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.7, 1, 0.7], scale: [0.97, 1.045, 0.97] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-[20%] rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.28)_0%,rgba(196,145,47,0.18)_42%,rgba(66,106,140,0.16)_66%,transparent_78%)] blur-2xl"
      />

      <div className="absolute inset-0 rounded-full border border-gold/18" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.32, 0.58, 0.32] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[3%] rounded-full border border-dashed border-steel-bright/25"
      />

      <div className="absolute inset-[3%] rounded-full [mask-image:radial-gradient(circle,transparent_92%,black_93%)]">
        {Array.from({ length: 48 }).map((_, index) => (
          <span
            key={index}
            className={`absolute left-1/2 top-1/2 w-px origin-top ${
              index % 4 === 0 ? "h-2 bg-gold/45" : "h-1 bg-ivory/10"
            }`}
            style={{ transform: `rotate(${index * 7.5}deg) translateY(-49%)` }}
          />
        ))}
      </div>

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_320deg,rgba(242,211,106,0.9)_340deg,rgba(196,145,47,0.4)_355deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <div className="absolute inset-[9%] rounded-full border border-gold/30 shadow-[0_0_44px_rgba(196,145,47,0.18),inset_0_0_30px_rgba(196,145,47,0.08)]" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.22, 0.5, 0.22] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[13%] rounded-full bg-[conic-gradient(from_120deg,transparent_0deg,rgba(66,106,140,0.7)_18deg,transparent_44deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <div className="absolute inset-[17%] rounded-full border border-white/10 bg-[linear-gradient(150deg,rgba(26,26,26,0.86),rgba(10,10,10,0.92))] shadow-[inset_0_1px_0_rgba(237,232,222,0.08),inset_0_-20px_50px_rgba(0,0,0,0.6),0_40px_100px_rgba(0,0,0,0.55)] backdrop-blur-sm" />

      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[20%] rounded-full border border-gold/40 shadow-[0_0_46px_rgba(196,145,47,0.24),inset_0_0_28px_rgba(66,106,140,0.12)]"
      />

      <motion.div
        animate={{
          scale: [1, 1.035, 1],
          filter: [
            "drop-shadow(0 0 18px rgba(196,145,47,0.35)) drop-shadow(0 0 28px rgba(66,106,140,0.18))",
            "drop-shadow(0 0 36px rgba(224,184,74,0.55)) drop-shadow(0 0 52px rgba(196,145,47,0.32))",
            "drop-shadow(0 0 18px rgba(196,145,47,0.35)) drop-shadow(0 0 28px rgba(66,106,140,0.18))",
          ],
        }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[25%] z-10 grid place-items-center"
      >
        <Image
          src="/heroicon.png"
          alt="Gent Ascend Collective emblem"
          width={480}
          height={480}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="absolute inset-[25%] z-10 overflow-hidden rounded-full">
        <motion.span
          animate={{ x: ["-145%", "145%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/5 rotate-12 bg-gradient-to-r from-transparent via-ivory/10 to-transparent"
        />
      </div>
    </div>
  );
}

function HConnector({ delay, reverse = false }: { delay: number; reverse?: boolean }) {
  return (
    <span className="relative hidden h-[3px] w-12 shrink-0 sm:block sm:w-16 md:w-24">
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-steel-bright/34 to-transparent blur-[1px]" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/42 to-transparent" />
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, left: reverse ? "100%" : "0%" }}
        animate={{
          opacity: [0, 1, 0.85, 0],
          left: reverse ? ["100%", "0%"] : ["0%", "100%"],
        }}
        transition={{
          duration: ACTIVE,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          delay,
          ease: "easeInOut",
          times: [0, 0.15, 0.85, 1],
        }}
        className="absolute top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-gold-bright to-transparent shadow-[0_0_14px_3px_rgba(224,184,74,0.46),0_0_22px_rgba(66,106,140,0.36)]"
      />
    </span>
  );
}

function VConnector({ delay, reverse = false }: { delay: number; reverse?: boolean }) {
  return (
    <span className="relative block h-7 w-[3px] shrink-0 sm:h-10 md:h-14">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/34 to-transparent blur-[1px]" />
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/42 to-transparent" />
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, top: reverse ? "100%" : "0%" }}
        animate={{
          opacity: [0, 1, 0.85, 0],
          top: reverse ? ["100%", "0%"] : ["0%", "100%"],
        }}
        transition={{
          duration: ACTIVE,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          delay,
          ease: "easeInOut",
          times: [0, 0.15, 0.85, 1],
        }}
        className="absolute left-1/2 h-10 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-transparent via-gold-bright to-transparent shadow-[0_0_14px_3px_rgba(224,184,74,0.46),0_0_22px_rgba(66,106,140,0.36)]"
      />
    </span>
  );
}

function OperatingNode({ nodeKey }: { nodeKey: NodeKey }) {
  const index = NODE_ORDER.indexOf(nodeKey);
  const delay = index * ACTIVE;

  return (
    <motion.a
      href="#framework"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex w-[5.6rem] shrink-0 flex-col items-center gap-2.5 sm:w-[7rem] md:w-[7.5rem]"
    >
      <motion.div
        animate={{
          opacity: [0.42, 0.9, 0.42],
          scale: [0.92, 1.1, 0.92],
        }}
        transition={{
          duration: ACTIVE,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          delay,
          ease: "easeInOut",
        }}
        className="absolute top-1 size-16 rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.22),rgba(66,106,140,0.18)_48%,transparent_72%)] blur-xl sm:size-20"
      />

      <motion.span
        animate={{
          scale: [1, 1.045, 1],
          boxShadow: [
            "0 18px 44px rgba(0,0,0,0.56), 0 0 22px rgba(66,106,140,0.16), inset 0 1px 0 rgba(237,232,222,0.08)",
            "0 24px 62px rgba(0,0,0,0.62), 0 0 38px rgba(196,145,47,0.32), 0 0 42px rgba(66,106,140,0.3), inset 0 1px 0 rgba(242,211,106,0.2)",
            "0 18px 44px rgba(0,0,0,0.56), 0 0 22px rgba(66,106,140,0.16), inset 0 1px 0 rgba(237,232,222,0.08)",
          ],
        }}
        transition={{
          duration: ACTIVE,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          delay,
          ease: "easeInOut",
        }}
        className="relative grid size-16 place-items-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#F2D36A_0%,#E0B84A_20%,#C4912F_48%,#8A641E_72%,rgba(66,106,140,0.82)_100%)] p-[1.5px] transition-transform duration-500 group-hover:-translate-y-1 sm:size-20 md:size-[5.5rem]"
      >
        <motion.span
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay,
            ease: "linear",
          }}
          className="absolute inset-[6px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(242,211,106,0.32)_28deg,transparent_58deg,transparent_210deg,rgba(66,106,140,0.36)_242deg,transparent_276deg,transparent_360deg)]"
        />
        <motion.span
          aria-hidden="true"
          animate={{ x: ["-140%", "160%"] }}
          transition={{
            duration: ACTIVE,
            repeat: Infinity,
            repeatDelay: REPEAT_DELAY,
            delay,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent"
        />
        <span className="relative grid size-full place-items-center rounded-full border border-gold/24 bg-[radial-gradient(circle_at_50%_38%,rgba(224,184,74,0.14),transparent_28%),radial-gradient(circle_at_50%_64%,rgba(66,106,140,0.2),transparent_50%),linear-gradient(145deg,rgba(26,26,26,0.92),rgba(10,10,10,0.94))] shadow-[inset_0_1px_0_rgba(237,232,222,0.08),inset_0_0_28px_rgba(66,106,140,0.12)]">
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0.34, 0.8, 0.34], scale: [0.78, 1.08, 0.78] }}
            transition={{
              duration: ACTIVE,
              repeat: Infinity,
              repeatDelay: REPEAT_DELAY,
              delay,
              ease: "easeInOut",
            }}
            className="absolute inset-3 rounded-full bg-[radial-gradient(circle,rgba(224,184,74,0.2),rgba(66,106,140,0.12)_48%,transparent_70%)] blur-sm"
          />
          <motion.span
            animate={{
              color: [
                "rgba(224,184,74,0.84)",
                "rgba(242,211,106,1)",
                "rgba(224,184,74,0.84)",
              ],
              filter: [
                "drop-shadow(0 0 8px rgba(66,106,140,0.18))",
                "drop-shadow(0 0 14px rgba(224,184,74,0.4)) drop-shadow(0 0 18px rgba(66,106,140,0.28))",
                "drop-shadow(0 0 8px rgba(66,106,140,0.18))",
              ],
            }}
            transition={{
              duration: ACTIVE,
              repeat: Infinity,
              repeatDelay: REPEAT_DELAY,
              delay,
              ease: "easeInOut",
            }}
            className="relative grid size-9 place-items-center sm:size-11"
          >
            <OperatingIcon icon={nodeKey} />
          </motion.span>
        </span>
      </motion.span>

      <motion.span
        animate={{
          color: [
            "rgba(237,232,222,0.72)",
            "rgba(242,211,106,0.98)",
            "rgba(237,232,222,0.72)",
          ],
        }}
        transition={{
          duration: ACTIVE,
          repeat: Infinity,
          repeatDelay: REPEAT_DELAY,
          delay,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden px-2 pb-1 text-center text-[0.62rem] font-semibold uppercase leading-none tracking-[0.18em] text-ivory/75 sm:text-[0.7rem] md:text-xs"
      >
        <span className="relative">{NODE_COPY[nodeKey]}</span>
        <span className="mx-auto mt-2 block h-px w-8 bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
        <motion.span
          aria-hidden="true"
          animate={{
            x: ["-130%", "130%"],
            opacity: [0, 0.55, 0],
          }}
          transition={{
            duration: ACTIVE,
            repeat: Infinity,
            repeatDelay: REPEAT_DELAY,
            delay,
            ease: "easeInOut",
          }}
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      </motion.span>
    </motion.a>
  );
}

function OperatingIcon({ icon }: { icon: NodeKey }) {
  const common = "stroke-current";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 sm:size-6"
    >
      {icon === "origin" && (
        <>
          <path className={common} d="M12 5v14" strokeWidth="1.45" strokeLinecap="round" />
          <path className={common} d="M12 11c-3.2 0-5.2-1.6-6-4 3.8-.4 5.6.9 6 4Z" strokeWidth="1.45" strokeLinejoin="round" />
          <path className={common} d="M12 13c3.2 0 5.2-1.6 6-4-3.8-.4-5.6.9-6 4Z" strokeWidth="1.45" strokeLinejoin="round" />
          <path className={common} d="M12 19c-1.7-1.8-3.4-2.8-5.4-3.2M12 19c1.7-1.8 3.4-2.8 5.4-3.2" strokeWidth="1.3" strokeLinecap="round" />
        </>
      )}
      {icon === "authority" && (
        <>
          <path className={common} d="M5 17.5h14M7 15V8.2L12 5l5 3.2V15" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
          <path className={common} d="M9.5 15v-4.5M14.5 15v-4.5" strokeWidth="1.45" strokeLinecap="round" />
          <path className={common} d="M10 9h4" strokeWidth="1.35" strokeLinecap="round" />
        </>
      )}
      {icon === "intelligence" && (
        <>
          <path className={common} d="M8 8.5h8v7H8z" strokeWidth="1.35" strokeLinejoin="round" />
          <path className={common} d="M12 8.5V5.5M12 18.5v-3M5.5 12h2.5M16 12h2.5M7.2 7.2l1.8 1.8M15 15l1.8 1.8M16.8 7.2 15 9M9 15l-1.8 1.8" strokeWidth="1.25" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.7" className={common} strokeWidth="1.25" />
        </>
      )}
      {icon === "infrastructure" && (
        <>
          <path className={common} d="M12 5v14M6.5 9.5h11M6.5 14.5h11" strokeWidth="1.45" strokeLinecap="round" />
          <circle cx="12" cy="5" r="1.7" className={common} strokeWidth="1.35" />
          <circle cx="6.5" cy="9.5" r="1.5" className={common} strokeWidth="1.35" />
          <circle cx="17.5" cy="9.5" r="1.5" className={common} strokeWidth="1.35" />
          <circle cx="6.5" cy="14.5" r="1.5" className={common} strokeWidth="1.35" />
          <circle cx="17.5" cy="14.5" r="1.5" className={common} strokeWidth="1.35" />
          <circle cx="12" cy="19" r="1.7" className={common} strokeWidth="1.35" />
        </>
      )}
    </svg>
  );
}

function HeroButton({
  children,
  href,
  variant,
}: {
  children: ReactNode;
  href: string;
  variant: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={`group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full border px-7 text-sm font-semibold uppercase tracking-[0.16em] backdrop-blur-md ${
        isPrimary
          ? "border-[#F2D36A]/60 bg-[linear-gradient(135deg,#F2D36A_0%,#E0B84A_22%,#C4912F_55%,#8A641E_100%)] text-obsidian shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-10px_24px_rgba(10,10,10,0.18),0_18px_50px_rgba(196,145,47,0.22)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-10px_24px_rgba(10,10,10,0.16),0_22px_70px_rgba(196,145,47,0.36)]"
          : "border-gold/35 bg-[linear-gradient(145deg,rgba(26,26,26,0.78),rgba(10,10,10,0.62)_58%,rgba(47,69,92,0.22))] text-ivory shadow-[inset_0_1px_0_rgba(237,232,222,0.12),0_18px_52px_rgba(66,106,140,0.16)] hover:border-steel-bright/70 hover:text-gold-bright hover:shadow-[inset_0_1px_0_rgba(237,232,222,0.16),0_22px_70px_rgba(66,106,140,0.28)]"
      }`}
    >
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
      <span className="relative">{children}</span>
    </motion.a>
  );
}
