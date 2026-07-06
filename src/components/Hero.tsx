"use client";

import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import type { ReactNode } from "react";

const activationDuration = 2.15;
const activationCycle = 9.4;

type OperatingIconName =
  | "origin"
  | "authority"
  | "intelligence"
  | "infrastructure";

type OperatingNodeConfig = {
  label: string;
  icon: OperatingIconName;
  path: string;
  pulse: {
    cx: number[];
    cy: number[];
  };
  className: string;
};

const operatingNodes: OperatingNodeConfig[] = [
  {
    label: "Origin",
    icon: "origin",
    path: "M 50 50 L 50 26",
    pulse: { cx: [50, 50, 50, 50], cy: [50, 44, 26, 26] },
    className: "left-1/2 top-[4%] -translate-x-1/2",
  },
  {
    label: "Authority",
    icon: "authority",
    path: "M 50 50 L 77 50",
    pulse: { cx: [50, 58, 77, 77], cy: [50, 50, 50, 50] },
    className: "right-[1%] top-1/2 -translate-y-1/2",
  },
  {
    label: "Intelligence",
    icon: "intelligence",
    path: "M 50 50 L 23 50",
    pulse: { cx: [50, 42, 23, 23], cy: [50, 50, 50, 50] },
    className: "left-[1%] top-1/2 -translate-y-1/2",
  },
  {
    label: "Infrastructure",
    icon: "infrastructure",
    path: "M 50 50 L 50 74",
    pulse: { cx: [50, 50, 50, 50], cy: [50, 56, 74, 74] },
    className: "bottom-[4%] left-1/2 -translate-x-1/2",
  },
];

export function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(32);
  const glowX = useSpring(mouseX, { stiffness: 45, damping: 24, mass: 0.6 });
  const glowY = useSpring(mouseY, { stiffness: 45, damping: 24, mass: 0.6 });

  return (
    <section
      id="home"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-36 md:px-8 md:pt-40"
    >
      <HeroBackground glowX={glowX} glowY={glowY} />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 bg-gradient-to-r from-[#8A641E] via-gold to-[#F2D36A] bg-clip-text text-xs font-semibold uppercase tracking-[0.38em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.22)]"
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
            <span className="block bg-[linear-gradient(180deg,#F2D36A_0%,#E0B84A_24%,#C4912F_54%,#8A641E_100%)] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(196,145,47,0.28)]">
              Gent Ascend
            </span>
            <span className="mt-2 block text-ivory drop-shadow-[0_0_24px_rgba(66,106,140,0.16)]">
              Collective
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-4xl font-serif text-[clamp(2rem,6.8vw,3.5rem)] leading-tight text-ivory drop-shadow-[0_0_24px_rgba(196,145,47,0.08)]">
            Built for Businesses With Roots, Reputation, and Room to Ascend.
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[rgba(237,232,222,0.74)] md:text-lg">
            We build the digital world around serious local businesses — the
            story people connect with, the presence they trust, the intelligent
            tools that save time, and the infrastructure that keeps the
            operation moving.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <HeroButton href="#apply" variant="primary">
              Start Your Ascent
            </HeroButton>
            <HeroButton href="#framework" variant="secondary">
              Explore the Framework
            </HeroButton>
          </div>
          <p className="mx-auto mt-9 max-w-3xl text-xs font-semibold uppercase leading-7 tracking-[0.24em] text-[rgba(237,232,222,0.56)]">
            Identity • Presence • Intelligence • Infrastructure
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function HeroBackground({
  glowX,
  glowY,
}: {
  glowX: MotionValue<number>;
  glowY: MotionValue<number>;
}) {
  const interactiveGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(66,106,140,0.16), rgba(196,145,47,0.08) 18%, transparent 40%)`;

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_28%,rgba(66,106,140,0.5),transparent_28%),radial-gradient(circle_at_52%_16%,rgba(196,145,47,0.16),transparent_24%),radial-gradient(circle_at_18%_60%,rgba(47,69,92,0.22),transparent_30%),linear-gradient(180deg,#0A0A0A_0%,#111111_42%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ background: interactiveGlow }}
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.38, 0.18], backgroundPosition: ["0px 0px", "22px -28px", "0px 0px"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.025)_1px,transparent_1px)] bg-[size:92px_92px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: ["2%", "-5%", "2%"], opacity: [0.16, 0.32, 0.16] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[12%] top-20 -z-10 h-[78%] bg-[linear-gradient(90deg,transparent,rgba(66,106,140,0.1),rgba(237,232,222,0.035),rgba(196,145,47,0.08),transparent)] blur-sm"
      />
      <div className="absolute left-1/2 top-24 -z-10 h-[74%] w-px -translate-x-1/2 bg-gradient-to-b from-gold/45 via-steel-bright/26 to-transparent" />
      <div className="absolute left-[18%] top-28 -z-10 h-[58%] w-px rotate-[-9deg] bg-gradient-to-b from-transparent via-steel-bright/20 to-transparent" />
      <div className="absolute right-[18%] top-28 -z-10 h-[58%] w-px rotate-[9deg] bg-gradient-to-b from-transparent via-gold/18 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-55%", "55%", "-55%"], opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-28 left-1/2 -z-10 h-px w-[min(980px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C4912F] to-transparent shadow-[0_0_30px_rgba(196,145,47,0.22)]"
      />
      <div className="absolute inset-0 -z-10 opacity-[0.09] [background-image:radial-gradient(circle_at_center,#426A8C_0.7px,transparent_0.8px)] [background-size:20px_20px]" />
      <div className="absolute left-[8%] top-[34%] -z-10 hidden h-52 w-72 border-l border-t border-steel-bright/12 md:block" />
      <div className="absolute right-[8%] top-[38%] -z-10 hidden h-52 w-72 border-r border-t border-gold/12 md:block" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.38, 0.18] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[13%] top-[48%] -z-10 hidden h-px w-[28%] bg-gradient-to-r from-transparent via-steel-bright/35 to-transparent md:block"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.32, 0.12] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute right-[14%] top-[52%] -z-10 hidden h-px w-[24%] bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block"
      />
    </>
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
          ? "border-[#F2D36A]/60 bg-[linear-gradient(145deg,#F2D36A_0%,#E0B84A_18%,#C4912F_48%,#8A641E_100%)] text-obsidian shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-10px_24px_rgba(10,10,10,0.18),0_18px_50px_rgba(196,145,47,0.22)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-10px_24px_rgba(10,10,10,0.16),0_22px_70px_rgba(196,145,47,0.36)]"
          : "border-gold/35 bg-[linear-gradient(145deg,rgba(26,26,26,0.78),rgba(10,10,10,0.62)_58%,rgba(47,69,92,0.22))] text-ivory shadow-[inset_0_1px_0_rgba(237,232,222,0.12),0_18px_52px_rgba(66,106,140,0.16)] hover:border-steel-bright/70 hover:text-gold-bright hover:shadow-[inset_0_1px_0_rgba(237,232,222,0.16),0_22px_70px_rgba(66,106,140,0.28)]"
      }`}
    >
      <span className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/22 to-transparent transition-transform duration-700 group-hover:translate-x-[130%]" />
      <span className="relative">{children}</span>
    </motion.a>
  );
}

function HeroMedallion() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.05, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square w-full max-w-[760px]"
      aria-label="Gent Ascend Collective emblem"
    >
      <div className="absolute inset-[3%] rounded-full border border-white/[0.04] bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.022)_1px,transparent_1px)] bg-[size:36px_36px] opacity-75 [mask-image:radial-gradient(circle,black_0%,black_52%,transparent_76%)]" />
      <div className="absolute left-1/2 top-[9%] h-[82%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/24 to-transparent" />
      <div className="absolute left-[9%] top-1/2 h-px w-[82%] -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-[14%] rounded-full border border-white/[0.055]" />
      <div className="absolute inset-[25%] rounded-full border border-white/[0.045]" />

      <motion.div
        animate={{ opacity: [0.28, 0.64, 0.28], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[2%] rounded-full bg-[radial-gradient(circle,rgba(242,211,106,0.15)_0%,rgba(196,145,47,0.17)_24%,rgba(66,106,140,0.18)_49%,transparent_72%)] blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.24, 0.74, 0.24], scale: [0.94, 1.05, 0.94] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[19%] rounded-full bg-[radial-gradient(circle,rgba(242,211,106,0.28)_0%,rgba(224,184,74,0.24)_26%,rgba(196,145,47,0.1)_48%,transparent_70%)] blur-2xl"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.34, 0.12], scale: [0.98, 1.07, 0.98] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.22),transparent_58%)] blur-2xl"
      />

      <div className="absolute inset-[12%] rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_50%_35%,rgba(237,232,222,0.05),transparent_24%),linear-gradient(145deg,rgba(26,26,26,0.66),rgba(10,10,10,0.5)_58%,rgba(47,69,92,0.16))] shadow-[0_56px_150px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(237,232,222,0.08),inset_0_-1px_0_rgba(196,145,47,0.14),inset_0_0_86px_rgba(66,106,140,0.12)] backdrop-blur-md" />
      <div className="absolute inset-[17%] rounded-full border border-gold/18 bg-[conic-gradient(from_40deg,transparent_0deg,rgba(196,145,47,0.2)_18deg,transparent_42deg,transparent_142deg,rgba(66,106,140,0.2)_174deg,transparent_206deg,transparent_308deg,rgba(224,184,74,0.16)_326deg,transparent_360deg)] opacity-65" />

      <motion.div
        animate={{ opacity: [0.5, 0.82, 0.5] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[3%] rounded-full border border-gold/18 shadow-[0_0_42px_rgba(196,145,47,0.1)]"
      >
        <span className="absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright/80 to-transparent" />
        <span className="absolute bottom-0 left-1/2 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright/70 to-transparent" />
        <span className="absolute right-[12%] top-[16%] h-px w-24 rotate-45 bg-gradient-to-r from-transparent via-gold/75 to-transparent" />
        <span className="absolute bottom-[16%] left-[12%] h-px w-24 rotate-45 bg-gradient-to-r from-transparent via-steel-bright/70 to-transparent" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.32, 0.6, 0.32] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute inset-[9%] rounded-full border border-dashed border-steel-bright/28 shadow-[0_0_40px_rgba(66,106,140,0.12)]"
      />

      <motion.div
        animate={{ opacity: [0.38, 0.76, 0.38] }}
        transition={{ duration: 6.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute inset-[7%] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,transparent_28deg,rgba(224,184,74,0.78)_34deg,rgba(196,145,47,0.45)_44deg,transparent_55deg,transparent_166deg,rgba(66,106,140,0.72)_178deg,transparent_194deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <motion.div
        animate={{ opacity: [0.34, 0.68, 0.34] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
        className="absolute inset-[20%] rounded-full bg-[conic-gradient(from_10deg,transparent_0deg,rgba(66,106,140,0.64)_24deg,transparent_46deg,transparent_214deg,rgba(224,184,74,0.72)_236deg,transparent_258deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <motion.div
        animate={{ opacity: [0.46, 0.9, 0.46] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
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
        className="absolute inset-[22%] rounded-full border border-steel-bright/25 bg-steel/10 shadow-[0_0_54px_rgba(66,106,140,0.16)]"
      />
      <div className="absolute inset-[21%] rounded-full border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.68),rgba(10,10,10,0.8))] shadow-[inset_0_0_92px_rgba(0,0,0,0.68),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-sm" />
      <div className="absolute inset-[22.5%] rounded-full border border-gold/30 bg-[radial-gradient(circle_at_50%_34%,rgba(66,106,140,0.14),rgba(10,10,10,0.86)_58%)] shadow-[0_0_120px_rgba(196,145,47,0.22),inset_0_0_82px_rgba(66,106,140,0.15),inset_0_1px_0_rgba(224,184,74,0.14)]" />

      <motion.div
        animate={{
          scale: [1, 1.035, 1],
          filter: [
            "drop-shadow(0 0 24px rgba(196,145,47,0.34)) drop-shadow(0 0 34px rgba(66,106,140,0.2))",
            "drop-shadow(0 0 44px rgba(224,184,74,0.5)) drop-shadow(0 0 60px rgba(66,106,140,0.3))",
            "drop-shadow(0 0 24px rgba(196,145,47,0.34)) drop-shadow(0 0 34px rgba(66,106,140,0.2))",
          ],
        }}
        transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[20%] z-20 grid place-items-center"
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

      <div className="absolute inset-[22.5%] z-20 overflow-hidden rounded-full">
        <motion.span
          animate={{ x: ["-145%", "145%"] }}
          transition={{ duration: 9.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/5 rotate-12 bg-gradient-to-r from-transparent via-ivory/10 to-transparent"
        />
      </div>

      <svg
        className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <filter id="gold-signal-bloom" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="1.25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {operatingNodes.map((node, index) => (
          <SignalPath key={node.label} node={node} index={index} />
        ))}
      </svg>

      {operatingNodes.map((node, index) => (
        <OperatingNode key={node.label} node={node} index={index} />
      ))}
    </motion.div>
  );
}

function SignalPath({
  node,
  index,
}: {
  node: (typeof operatingNodes)[number];
  index: number;
}) {
  const delay = index * activationDuration;
  const repeatDelay = activationCycle - activationDuration;

  return (
    <g>
      <path
        d={node.path}
        fill="none"
        pathLength={1}
        stroke="rgba(66,106,140,0.26)"
        strokeLinecap="round"
        strokeWidth={0.28}
      />
      <path
        d={node.path}
        fill="none"
        pathLength={1}
        stroke="rgba(196,145,47,0.28)"
        strokeDasharray="0.035 0.055"
        strokeLinecap="round"
        strokeWidth={0.18}
      />
      <motion.path
        d={node.path}
        fill="none"
        pathLength={1}
        stroke="rgba(224,184,74,0.92)"
        strokeLinecap="round"
        strokeWidth={0.42}
        filter="url(#gold-signal-bloom)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 0.92, 1, 1], opacity: [0, 0.95, 0.6, 0] }}
        transition={{
          duration: activationDuration,
          repeat: Infinity,
          repeatDelay,
          delay,
          ease: "easeInOut",
          times: [0, 0.42, 0.68, 1],
        }}
      />
      <motion.circle
        r="0.95"
        fill="#F2D36A"
        filter="url(#gold-signal-bloom)"
        initial={{ opacity: 0, cx: node.pulse.cx[0], cy: node.pulse.cy[0] }}
        animate={{
          cx: node.pulse.cx,
          cy: node.pulse.cy,
          opacity: [0, 1, 0.95, 0],
        }}
        transition={{
          duration: activationDuration,
          repeat: Infinity,
          repeatDelay,
          delay,
          ease: "easeInOut",
          times: [0, 0.22, 0.72, 1],
        }}
      />
    </g>
  );
}

function OperatingNode({
  node,
  index,
}: {
  node: (typeof operatingNodes)[number];
  index: number;
}) {
  const delay = index * activationDuration;
  const repeatDelay = activationCycle - activationDuration;

  return (
    <motion.a
      href="#framework"
      whileHover={{ scale: 1.025 }}
      animate={{
        borderColor: [
          "rgba(196,145,47,0.32)",
          "rgba(242,211,106,0.88)",
          "rgba(196,145,47,0.32)",
        ],
        color: [
          "rgba(66,106,140,0.86)",
          "rgba(182,212,234,0.98)",
          "rgba(66,106,140,0.86)",
        ],
        boxShadow: [
          "inset 0 1px 0 rgba(237,232,222,0.12), inset 0 -10px 22px rgba(10,10,10,0.28), 0 18px 40px rgba(0,0,0,0.32), 0 0 22px rgba(196,145,47,0.1)",
          "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -10px 24px rgba(10,10,10,0.18), 0 22px 56px rgba(0,0,0,0.36), 0 0 42px rgba(224,184,74,0.34), 0 0 34px rgba(66,106,140,0.24)",
          "inset 0 1px 0 rgba(237,232,222,0.12), inset 0 -10px 22px rgba(10,10,10,0.28), 0 18px 40px rgba(0,0,0,0.32), 0 0 22px rgba(196,145,47,0.1)",
        ],
      }}
      transition={{
        duration: activationDuration,
        repeat: Infinity,
        repeatDelay,
        delay,
        ease: "easeInOut",
        times: [0, 0.62, 1],
      }}
      className={`group absolute z-30 flex h-[3.15rem] w-[7.05rem] items-center gap-2 border bg-[linear-gradient(145deg,rgba(224,184,74,0.11),rgba(17,17,17,0.88)_30%,rgba(10,10,10,0.82)_64%,rgba(47,69,92,0.2))] px-2.5 text-[0.51rem] font-semibold uppercase tracking-[0.14em] text-steel-bright backdrop-blur-md [clip-path:polygon(10%_0,90%_0,100%_28%,100%_72%,90%_100%,10%_100%,0_72%,0_28%)] sm:h-[4.15rem] sm:w-40 sm:gap-3 sm:px-4 sm:text-xs ${node.className}`}
    >
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [0.08, 0.28, 0.08], x: ["-120%", "135%", "135%"] }}
        transition={{
          duration: activationDuration,
          repeat: Infinity,
          repeatDelay,
          delay,
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent"
      />
      <span className="absolute inset-x-4 top-1 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <span className="absolute inset-x-5 bottom-1 h-px bg-gradient-to-r from-transparent via-steel-bright/28 to-transparent" />
      <span className="relative grid size-6 shrink-0 place-items-center rounded-full border border-gold/30 bg-obsidian/70 shadow-[inset_0_1px_0_rgba(237,232,222,0.08),0_0_16px_rgba(196,145,47,0.12)] sm:size-8">
        <OperatingIcon icon={node.icon} />
      </span>
      <span className="relative min-w-0 leading-none">{node.label}</span>
    </motion.a>
  );
}

function OperatingIcon({ icon }: { icon: OperatingIconName }) {
  const common = "stroke-current";

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4 sm:size-5"
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
