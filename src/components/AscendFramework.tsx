"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";

const layers = [
  {
    number: "01",
    title: "Origin",
    support: "Story • Positioning • Trust • Visual Direction",
    body: "We uncover the roots, founder story, reputation, and signals that make the business worth supporting — then shape them into a sharper identity.",
    meaning:
      "This is where the business becomes understandable, memorable, and worth believing in.",
    mark: "origin",
  },
  {
    number: "02",
    title: "Authority",
    support: "Website • Service Pages • Mobile • Conversion",
    body: "We build the public-facing presence that makes people trust the business before they ever call, book, or buy.",
    meaning:
      "This is where the business stops looking outdated and starts carrying the weight of its real-world reputation.",
    mark: "authority",
  },
  {
    number: "03",
    title: "Intelligence",
    support: "AI Intake • Automation • Customer Insight • Content Support",
    body: "We create practical intelligence tools that capture information, educate customers, prepare quotes, support content, and help the operation move sharper.",
    meaning:
      "This is where scattered knowledge becomes structured, useful, and easier to act on.",
    mark: "intelligence",
  },
  {
    number: "04",
    title: "Infrastructure",
    support: "Quotes • Booking • Dashboards • Portals • Community",
    body: "We build the digital backbone that organizes demand, captures work, supports customers, and keeps the business moving.",
    meaning:
      "This is where the business becomes easier to run, easier to buy from, and easier to grow.",
    mark: "infrastructure",
  },
];

const microLabels = ["Origin", "Authority", "Intelligence", "Infrastructure"];

export function AscendFramework() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(42);
  const glowX = useSpring(mouseX, { stiffness: 42, damping: 24, mass: 0.7 });
  const glowY = useSpring(mouseY, { stiffness: 42, damping: 24, mass: 0.7 });

  return (
    <section
      id="framework"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative isolate overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <OperatingBackground glowX={glowX} glowY={glowY} />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.22)]">
            Proprietary Operating Layers
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ivory drop-shadow-[0_0_30px_rgba(66,106,140,0.12)] md:text-6xl">
            The Ascend Operating System
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[rgba(237,232,222,0.72)] md:text-lg">
            Four layers built to turn roots, reputation, and real-world skill
            into a modern digital ecosystem.
          </p>
        </motion.div>

        <OperatingCore />

        <div className="relative mt-16 md:mt-20">
          <SystemConnectors />
          <div className="grid gap-6 md:grid-cols-2">
            {layers.map((layer, index) => (
              <OperatingLayerCard
                key={layer.title}
                layer={layer}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OperatingBackground({
  glowX,
  glowY,
}: {
  glowX: MotionValue<number>;
  glowY: MotionValue<number>;
}) {
  const interactiveGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(66,106,140,0.14), rgba(196,145,47,0.07) 20%, transparent 44%)`;

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(66,106,140,0.32),transparent_30%),radial-gradient(circle_at_50%_46%,rgba(196,145,47,0.1),transparent_26%),linear-gradient(180deg,#0A0A0A_0%,#111111_42%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ background: interactiveGlow }}
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.16, 0.36, 0.16],
          backgroundPosition: ["0px 0px", "28px -34px", "0px 0px"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.022)_1px,transparent_1px)] bg-[size:92px_92px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: ["3%", "-4%", "3%"], opacity: [0.14, 0.32, 0.14] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[12%] top-28 -z-10 h-[64%] bg-[linear-gradient(90deg,transparent,rgba(66,106,140,0.12),rgba(237,232,222,0.025),rgba(196,145,47,0.08),transparent)] blur-sm"
      />
      <div className="absolute left-1/2 top-[23%] -z-10 h-[58%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/28 to-transparent" />
      <div className="absolute left-[18%] top-[30%] -z-10 h-[46%] w-px rotate-[-10deg] bg-gradient-to-b from-transparent via-gold/16 to-transparent" />
      <div className="absolute right-[18%] top-[30%] -z-10 h-[46%] w-px rotate-[10deg] bg-gradient-to-b from-transparent via-steel-bright/18 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-54%", "54%", "-54%"], opacity: [0.08, 0.32, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[44%] -z-10 h-px w-[min(1000px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_34px_rgba(196,145,47,0.18)]"
      />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:radial-gradient(circle_at_center,#426A8C_0.7px,transparent_0.8px)] [background-size:22px_22px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-obsidian to-transparent" />
    </>
  );
}

function OperatingCore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 aspect-square w-full max-w-[620px]"
      aria-label="Ascend Operating System icon"
    >
      <div className="absolute inset-[5%] rounded-full border border-white/[0.04] bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(circle,black_0%,black_55%,transparent_77%)]" />
      <div className="absolute left-1/2 top-[7%] h-[86%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/26 to-transparent" />
      <div className="absolute left-[7%] top-1/2 h-px w-[86%] -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/22 to-transparent" />

      <motion.div
        animate={{ opacity: [0.34, 0.74, 0.34], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[11%] rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.3)_0%,rgba(196,145,47,0.14)_36%,transparent_70%)] blur-3xl"
      />

      <div className="absolute inset-[17%] rounded-full border border-white/[0.08] bg-[radial-gradient(circle_at_50%_35%,rgba(237,232,222,0.055),transparent_24%),linear-gradient(145deg,rgba(26,26,26,0.72),rgba(10,10,10,0.58)_58%,rgba(47,69,92,0.18))] shadow-[0_54px_140px_rgba(0,0,0,0.62),inset_0_1px_0_rgba(237,232,222,0.08),inset_0_-1px_0_rgba(196,145,47,0.14),inset_0_0_80px_rgba(66,106,140,0.13)] backdrop-blur-md" />
      <div className="absolute inset-[22%] rounded-full border border-gold/24 bg-[conic-gradient(from_40deg,transparent_0deg,rgba(196,145,47,0.22)_18deg,transparent_42deg,transparent_142deg,rgba(66,106,140,0.25)_174deg,transparent_206deg,transparent_308deg,rgba(224,184,74,0.18)_326deg,transparent_360deg)]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 82, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[4%] rounded-full border border-gold/22 shadow-[0_0_44px_rgba(196,145,47,0.1)]"
      >
        <span className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-gold-bright/75 to-transparent" />
        <span className="absolute bottom-0 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-t from-steel-bright/65 to-transparent" />
        <span className="absolute right-[12%] top-[16%] h-px w-20 rotate-45 bg-gradient-to-r from-transparent via-gold/65 to-transparent" />
        <span className="absolute bottom-[16%] left-[12%] h-px w-20 rotate-45 bg-gradient-to-r from-transparent via-steel-bright/65 to-transparent" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 112, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[11%] rounded-full border border-dashed border-steel-bright/30"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[8%] rounded-full bg-[conic-gradient(from_180deg,transparent_0deg,transparent_30deg,rgba(224,184,74,0.76)_36deg,rgba(196,145,47,0.44)_46deg,transparent_58deg,transparent_168deg,rgba(66,106,140,0.7)_180deg,transparent_196deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[25%] rounded-full bg-[conic-gradient(from_10deg,transparent_0deg,rgba(66,106,140,0.66)_24deg,transparent_46deg,transparent_214deg,rgba(224,184,74,0.72)_236deg,transparent_258deg,transparent_360deg)] p-px [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude]"
      />

      <div className="absolute inset-[13%] rounded-full">
        {Array.from({ length: 56 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-2 w-px bg-ivory/10"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                index * 6.428
              }deg) translateY(calc(-1 * min(31vw, 236px)))`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-[28%] rounded-full border border-gold/30 bg-[radial-gradient(circle_at_50%_35%,rgba(66,106,140,0.15),rgba(10,10,10,0.86)_58%)] shadow-[0_0_86px_rgba(196,145,47,0.16),inset_0_0_70px_rgba(66,106,140,0.14),inset_0_1px_0_rgba(224,184,74,0.12)]" />

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
        className="absolute inset-[29%] grid place-items-center"
      >
        <Image
          src="/opicon.png"
          alt="Ascend Operating System emblem"
          width={520}
          height={520}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className="absolute inset-[30%] overflow-hidden rounded-full">
        <motion.span
          animate={{ x: ["-145%", "145%"] }}
          transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-ivory/12 to-transparent"
        />
      </div>

      {microLabels.map((label, index) => {
        const positions = [
          "left-1/2 top-0 -translate-x-1/2",
          "right-0 top-1/2 -translate-y-1/2",
          "bottom-0 left-1/2 -translate-x-1/2",
          "left-0 top-1/2 -translate-y-1/2",
        ];

        return (
          <div
            key={label}
            className={`absolute ${positions[index]} hidden min-w-32 border border-gold/22 bg-obsidian/78 px-3 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold shadow-[0_0_24px_rgba(66,106,140,0.16),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md sm:block`}
          >
            {label}
          </div>
        );
      })}
    </motion.div>
  );
}

function SystemConnectors() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 1 }}
      className="pointer-events-none absolute inset-8 hidden md:block"
    >
      <motion.div
        animate={{ opacity: [0.2, 0.54, 0.2] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-steel-bright/50 to-transparent"
      />
      <motion.div
        animate={{ opacity: [0.16, 0.44, 0.16] }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/38 to-transparent"
      />
      <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-gold/40 bg-obsidian" />
    </motion.div>
  );
}

function OperatingLayerCard({
  layer,
  index,
}: {
  layer: (typeof layers)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.86),rgba(10,10,10,0.76)_52%,rgba(47,69,92,0.19))] p-6 shadow-[0_32px_120px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.038)_1px,transparent_1px)] bg-[size:42px_42px] opacity-55" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#8A641E,#E0B84A,#C4912F,transparent)] opacity-85" />
      <div className="absolute -right-24 -top-24 size-56 rounded-full bg-steel-bright/14 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-gold/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[1.35rem] border border-transparent transition-colors duration-500 group-hover:border-gold/25" />

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <p className="bg-[linear-gradient(180deg,#F2D36A,#C4912F_55%,#8A641E)] bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
            Layer {layer.number}
          </p>
          <h3 className="mt-5 font-serif text-4xl leading-none text-ivory md:text-5xl">
            {layer.title}
          </h3>
        </div>
        <LayerMark type={layer.mark} />
      </div>

      <p className="relative mt-7 text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-steel-bright">
        {layer.support}
      </p>
      <p className="relative mt-7 text-base leading-8 text-[rgba(237,232,222,0.74)]">
        {layer.body}
      </p>
      <div className="relative mt-8 border-l border-gold/35 pl-5">
        <p className="text-sm leading-7 text-[rgba(237,232,222,0.54)]">
          {layer.meaning}
        </p>
      </div>
    </motion.article>
  );
}

function LayerMark({ type }: { type: string }) {
  return (
    <div className="relative grid size-16 shrink-0 place-items-center rounded-xl border border-gold/25 bg-obsidian/60 shadow-[inset_0_1px_0_rgba(237,232,222,0.08),0_0_34px_rgba(66,106,140,0.14)] backdrop-blur-sm transition-shadow duration-500 group-hover:shadow-[inset_0_1px_0_rgba(237,232,222,0.1),0_0_42px_rgba(66,106,140,0.28)]">
      <div className="absolute inset-2 rounded-lg border border-steel-bright/20" />
      {type === "origin" ? <OriginMark /> : null}
      {type === "authority" ? <AuthorityMark /> : null}
      {type === "intelligence" ? <IntelligenceMark /> : null}
      {type === "infrastructure" ? <InfrastructureMark /> : null}
    </div>
  );
}

function OriginMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10" aria-hidden="true">
      <path
        d="M24 9v28M24 23c-7 1-11 5-13 12M24 23c7 1 11 5 13 12"
        fill="none"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <circle cx="24" cy="18" r="7" fill="none" stroke="#426A8C" strokeWidth="1.3" />
      <path d="M18 38h12" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function AuthorityMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10" aria-hidden="true">
      <rect x="10" y="13" width="28" height="22" fill="none" stroke="#426A8C" strokeWidth="1.4" />
      <path d="M10 20h28M17 27h14M17 31h8" stroke="#C4912F" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M24 8v5M18 10h12" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function IntelligenceMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10" aria-hidden="true">
      <path
        d="M15 24h7l4-7 5 15 3-8h5"
        fill="none"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <circle cx="15" cy="24" r="3" fill="none" stroke="#426A8C" strokeWidth="1.3" />
      <circle cx="39" cy="24" r="3" fill="none" stroke="#426A8C" strokeWidth="1.3" />
      <circle cx="26" cy="17" r="2.2" fill="#E0B84A" />
    </svg>
  );
}

function InfrastructureMark() {
  return (
    <svg viewBox="0 0 48 48" className="relative size-10" aria-hidden="true">
      <path d="M12 34h24M16 29h16M20 24h8" stroke="#C4912F" strokeLinecap="round" strokeWidth="1.4" />
      <path d="M14 34V18h20v16" fill="none" stroke="#426A8C" strokeWidth="1.4" />
      <circle cx="14" cy="18" r="2.4" fill="#E0B84A" />
      <circle cx="34" cy="18" r="2.4" fill="#E0B84A" />
    </svg>
  );
}
