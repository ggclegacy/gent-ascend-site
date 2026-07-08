"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { MotionValue, Variants } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

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
] as const;

const stackVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.15,
      repeat: Infinity,
      repeatDelay: 2.2,
    },
  },
};

const layerVariants: Variants = {
  hidden: {
    y: 0,
    borderColor: "rgba(237,232,222,0.1)",
    boxShadow:
      "0 34px 110px rgba(0,0,0,0.5), inset 0 1px 0 rgba(237,232,222,0.08), inset 0 0 0 rgba(66,106,140,0)",
  },
  show: {
    y: [-1, -7, -1],
    borderColor: [
      "rgba(237,232,222,0.1)",
      "rgba(224,184,74,0.46)",
      "rgba(237,232,222,0.1)",
    ],
    boxShadow: [
      "0 34px 110px rgba(0,0,0,0.5), inset 0 1px 0 rgba(237,232,222,0.08), inset 0 0 0 rgba(66,106,140,0)",
      "0 42px 135px rgba(0,0,0,0.58), 0 0 48px rgba(66,106,140,0.2), inset 0 1px 0 rgba(242,211,106,0.2), inset 0 0 42px rgba(66,106,140,0.18)",
      "0 34px 110px rgba(0,0,0,0.5), inset 0 1px 0 rgba(237,232,222,0.08), inset 0 0 0 rgba(66,106,140,0)",
    ],
    transition: { duration: 1.75, ease: smoothEase },
  },
};

export function AscendFramework() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(44);
  const glowX = useSpring(mouseX, { stiffness: 38, damping: 24, mass: 0.8 });
  const glowY = useSpring(mouseY, { stiffness: 38, damping: 24, mass: 0.8 });

  return (
    <section
      id="framework"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative isolate overflow-hidden bg-obsidian px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <StackBackground glowX={glowX} glowY={glowY} />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.2)]">
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

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-6xl md:mt-20"
        >
          <div className="mb-8 grid gap-5 pl-12 md:grid-cols-[minmax(0,0.82fr)_minmax(280px,0.48fr)] md:items-end md:pl-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-bright">
                The Ascend Stack
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(237,232,222,0.62)] md:text-base">
                A layered system for mapping what the business already has,
                what it is missing, and what needs to ascend first.
              </p>
            </div>
            <div className="hidden border-l border-gold/28 pl-6 text-xs uppercase leading-6 tracking-[0.2em] text-muted md:block">
              Origin to infrastructure, mapped as one operating architecture.
            </div>
          </div>

          <motion.div
            variants={stackVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-18% 0px -18% 0px" }}
            className="relative grid gap-5 pl-12 md:gap-6 md:pl-24"
          >
            <SignalSpine />
            {layers.map((layer, index) => (
              <StackLayerCard key={layer.title} index={index} layer={layer} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-4xl border-t border-gold/18 pt-8 text-center md:mt-16"
        >
          <p className="font-serif text-2xl leading-snug text-ivory md:text-3xl">
            Every build begins by identifying which layer needs to ascend first.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[rgba(237,232,222,0.58)] md:text-base">
            Some businesses need a stronger story. Some need a better website.
            Some need intelligent intake. Others need the infrastructure to
            capture, organize, and serve demand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StackBackground({
  glowX,
  glowY,
}: {
  glowX: MotionValue<number>;
  glowY: MotionValue<number>;
}) {
  const interactiveGlow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(66,106,140,0.16), rgba(196,145,47,0.06) 23%, transparent 48%)`;

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_48%,rgba(66,106,140,0.26),transparent_34%),radial-gradient(circle_at_52%_70%,rgba(196,145,47,0.09),transparent_26%),linear-gradient(180deg,#050505_0%,#111111_46%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        style={{ background: interactiveGlow }}
        className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.026)_1px,transparent_1px)] bg-[size:86px_86px] opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_84%,transparent)]" />
      <div className="absolute left-1/2 top-16 -z-10 h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-obsidian to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.62)_100%)]" />
    </>
  );
}

function SignalSpine() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-4 left-4 top-4 w-8 md:left-9"
    >
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/48 to-steel-bright/22 shadow-[0_0_26px_rgba(196,145,47,0.2)]" />
      <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-steel-bright/18 to-transparent blur-sm" />
      <motion.div
        animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-bright to-transparent shadow-[0_0_22px_rgba(224,184,74,0.72)]"
      />
    </div>
  );
}

function StackLayerCard({
  layer,
  index,
}: {
  layer: (typeof layers)[number];
  index: number;
}) {
  return (
    <div className="relative">
      <motion.div
        aria-hidden="true"
        variants={{
          hidden: { scale: 1, opacity: 0.54 },
          show: {
            scale: [1, 1.35, 1],
            opacity: [0.54, 1, 0.54],
            transition: { duration: 1.75, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="absolute -left-[2.35rem] top-8 z-10 size-4 rounded-full border border-gold-bright/70 bg-obsidian shadow-[0_0_22px_rgba(224,184,74,0.38)] md:-left-[4.35rem] md:top-10"
      >
        <span className="absolute left-full top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-gold-bright/70 to-transparent md:block" />
      </motion.div>

      <motion.article
        variants={layerVariants}
        whileHover={{
          y: -8,
          borderColor: "rgba(242,211,106,0.52)",
          boxShadow:
            "0 46px 150px rgba(0,0,0,0.62), 0 0 58px rgba(66,106,140,0.22), inset 0 1px 0 rgba(242,211,106,0.22), inset 0 0 52px rgba(66,106,140,0.18)",
        }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(26,26,26,0.9),rgba(10,10,10,0.86)_58%,rgba(47,69,92,0.2))] p-5 backdrop-blur-md md:min-h-[300px] md:p-8"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:38px_38px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#8A641E,#E0B84A,#F2D36A,#C4912F,transparent)] opacity-80" />
        <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,transparent,#F2D36A,#8A641E,transparent)] opacity-50" />
        <div className="absolute -right-20 top-0 h-full w-44 bg-[linear-gradient(110deg,transparent,rgba(66,106,140,0.12),transparent)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -right-16 -top-20 size-52 rounded-full bg-steel-bright/13 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute -left-24 bottom-0 size-44 rounded-full bg-gold/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative grid h-full gap-7 md:grid-cols-[minmax(0,1fr)_128px] md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <p className="bg-[linear-gradient(180deg,#F2D36A,#C4912F_55%,#8A641E)] bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
                Layer {layer.number}
              </p>
              <span className="h-px w-16 bg-gradient-to-r from-gold/50 to-transparent" />
            </div>
            <h3 className="mt-4 font-serif text-4xl leading-none text-ivory md:text-5xl">
              {layer.title}
            </h3>
            <p className="mt-6 text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-steel-bright">
              {layer.support}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[rgba(237,232,222,0.74)]">
              {layer.body}
            </p>
            <div className="mt-7 max-w-3xl border-l border-gold/35 bg-black/18 px-5 py-4 shadow-[inset_0_1px_0_rgba(237,232,222,0.04)] transition-colors duration-500 group-hover:border-gold-bright/55 group-hover:bg-[rgba(47,69,92,0.12)]">
              <p className="text-sm leading-7 text-[rgba(237,232,222,0.6)]">
                {layer.meaning}
              </p>
            </div>
          </div>

          <div className="relative flex justify-end md:justify-center">
            <LayerMark type={layer.mark} index={index} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function LayerMark({
  type,
  index,
}: {
  type: (typeof layers)[number]["mark"];
  index: number;
}) {
  return (
    <motion.div
      animate={{
        filter: [
          "drop-shadow(0 0 12px rgba(66,106,140,0.2))",
          "drop-shadow(0 0 22px rgba(224,184,74,0.28)) drop-shadow(0 0 30px rgba(66,106,140,0.24))",
          "drop-shadow(0 0 12px rgba(66,106,140,0.2))",
        ],
      }}
      transition={{
        duration: 6.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 1.15,
      }}
      className="relative grid size-24 shrink-0 place-items-center rounded-md border border-gold/28 bg-[linear-gradient(145deg,rgba(17,17,17,0.86),rgba(10,10,10,0.78))] shadow-[inset_0_1px_0_rgba(237,232,222,0.08),0_0_34px_rgba(66,106,140,0.14)] backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[inset_0_1px_0_rgba(237,232,222,0.1),0_0_42px_rgba(66,106,140,0.3)]"
    >
      <div className="absolute inset-2 border border-steel-bright/18" />
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      {type === "origin" ? <OriginMark /> : null}
      {type === "authority" ? <AuthorityMark /> : null}
      {type === "intelligence" ? <IntelligenceMark /> : null}
      {type === "infrastructure" ? <InfrastructureMark /> : null}
    </motion.div>
  );
}

function OriginMark() {
  return (
    <svg viewBox="0 0 64 64" className="relative size-14" aria-hidden="true">
      <path
        d="M32 13v34M32 31c-10 1.4-16 7.2-19 18M32 31c10 1.4 16 7.2 19 18"
        fill="none"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M24 18c4-6 12-6 16 0-1 7-5 11-8 13-3-2-7-6-8-13Z"
        fill="none"
        stroke="#426A8C"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <path d="M22 50h20" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function AuthorityMark() {
  return (
    <svg viewBox="0 0 64 64" className="relative size-14" aria-hidden="true">
      <path
        d="M17 19h30v29H17V19Z"
        fill="none"
        stroke="#426A8C"
        strokeWidth="1.5"
      />
      <path
        d="M17 26h30M24 36h17M24 42h10M32 11v8M25 14h14"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path d="M21 22h3M28 22h3" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function IntelligenceMark() {
  return (
    <svg viewBox="0 0 64 64" className="relative size-14" aria-hidden="true">
      <path
        d="M14 33h11l6-12 7 25 4-13h8"
        fill="none"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle cx="14" cy="33" r="4" fill="none" stroke="#426A8C" strokeWidth="1.4" />
      <circle cx="50" cy="33" r="4" fill="none" stroke="#426A8C" strokeWidth="1.4" />
      <circle cx="31" cy="21" r="3" fill="#E0B84A" />
      <path d="M31 12v6M22 20l4 4M41 20l-4 4" stroke="#426A8C" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function InfrastructureMark() {
  return (
    <svg viewBox="0 0 64 64" className="relative size-14" aria-hidden="true">
      <path
        d="M16 48h32M20 40h24M24 32h16"
        stroke="#C4912F"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d="M19 48V20h26v28M19 20h26"
        fill="none"
        stroke="#426A8C"
        strokeWidth="1.5"
      />
      <path d="M24 20V12h16v8" fill="none" stroke="#C4912F" strokeWidth="1.4" />
      <circle cx="19" cy="20" r="3" fill="#E0B84A" />
      <circle cx="45" cy="20" r="3" fill="#E0B84A" />
    </svg>
  );
}
