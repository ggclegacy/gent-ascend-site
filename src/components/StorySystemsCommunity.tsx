"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    label: "The Roots",
    title: "Story",
    headline: "Show the story behind the work.",
    body: "We uncover the founder story, local reputation, customer trust, craft, and identity that make the business worth supporting — then shape that into messaging, visual direction, website copy, and a stronger public presence.",
    motif: "story",
  },
  {
    label: "The Engine",
    title: "Systems",
    headline: "Make the business easier to run and easier to buy from.",
    body: "We build quote flows, service request forms, booking paths, lead capture, dashboards, review systems, intelligent intake, customer education, and operational tools that reduce friction for both the owner and the customer.",
    motif: "systems",
  },
  {
    label: "The Ascent",
    title: "Community",
    headline: "Turn customers into a connected audience.",
    body: "For businesses ready to go further, we build app-style experiences, customer portals, memberships, reminders, loyalty systems, before-and-after galleries, event drops, and community tools that keep people engaged beyond the first transaction.",
    motif: "community",
  },
];

export function StorySystemsCommunity() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden px-5 py-24 md:px-8 md:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_24%,rgba(196,145,47,0.12),transparent_28%),radial-gradient(circle_at_82%_44%,rgba(66,106,140,0.3),transparent_34%),linear-gradient(180deg,#0A0A0A_0%,#111111_48%,#0A0A0A_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.16, 0.32, 0.16],
          backgroundPosition: ["0px 0px", "30px -36px", "0px 0px"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.02)_1px,transparent_1px)] bg-[size:96px_96px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-50%", "50%", "-50%"], opacity: [0.08, 0.3, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[45%] -z-10 h-px w-[min(1040px,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_34px_rgba(196,145,47,0.18)]"
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-obsidian to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-5 bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.22)]">
            The Digital World Around The Business
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ivory drop-shadow-[0_0_30px_rgba(66,106,140,0.12)] md:text-6xl">
            Your Business Has a Story. We Build the System Around It.
          </h2>
          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[rgba(237,232,222,0.72)] md:text-lg">
            Most businesses already have the hard part: real work, real
            customers, real reputation, and a reason people want to support
            them. Gent Ascend Collective turns that foundation into a modern
            brand presence, website, intelligent workflow, and digital
            ecosystem built to help the business ascend.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-x-8 top-28 hidden h-px bg-gradient-to-r from-transparent via-steel-bright/35 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <StoryModule key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </div>

        <ManifestoPanel />
      </div>
    </section>
  );
}

function StoryModule({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      whileHover={{ y: -8 }}
      transition={{
        duration: 0.72,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative min-h-[560px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.88),rgba(10,10,10,0.76)_54%,rgba(47,69,92,0.18))] p-5 shadow-[0_32px_120px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#8A641E,#E0B84A,#C4912F,transparent)] opacity-85" />
      <div className="absolute -right-24 -top-24 size-56 rounded-full bg-steel-bright/14 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-gold/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[1.35rem] border border-transparent transition-colors duration-500 group-hover:border-gold/25" />

      <div className="relative">
        <MotifPanel variant={pillar.motif} />
        <div className="px-2 pb-1 pt-8">
          <p className="bg-[linear-gradient(180deg,#F2D36A,#C4912F_55%,#8A641E)] bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
            {pillar.label}
          </p>
          <h3 className="mt-4 font-serif text-4xl leading-none text-ivory md:text-5xl">
            {pillar.title}
          </h3>
          <p className="mt-6 text-xl leading-8 text-ivory">
            {pillar.headline}
          </p>
          <p className="mt-5 text-sm leading-7 text-[rgba(237,232,222,0.68)]">
            {pillar.body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function MotifPanel({ variant }: { variant: string }) {
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(10,10,10,0.72),rgba(26,26,26,0.62)_52%,rgba(47,69,92,0.22))] shadow-[inset_0_1px_0_rgba(237,232,222,0.08),inset_0_0_54px_rgba(66,106,140,0.1)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.045)_1px,transparent_1px)] bg-[size:30px_30px] opacity-60" />
      <motion.div
        animate={{ opacity: [0.22, 0.48, 0.22], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.24),rgba(196,145,47,0.08)_42%,transparent_70%)] blur-2xl"
      />
      {variant === "story" ? <StoryVisual /> : null}
      {variant === "systems" ? <SystemsVisual /> : null}
      {variant === "community" ? <CommunityVisual /> : null}
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <motion.div
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-ivory/10 to-transparent"
      />
    </div>
  );
}

function StoryVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-8 top-8 size-16 rounded-full border border-gold/35" />
      <div className="absolute left-11 top-11 size-10 rounded-full border border-steel-bright/35" />
      <motion.div
        animate={{ pathLength: [0.35, 1, 0.35] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 360 176" className="h-full w-full" aria-hidden="true">
          <motion.path
            d="M58 124 C92 82, 122 126, 158 86 S236 52, 300 82"
            fill="none"
            stroke="#C4912F"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
          <path
            d="M80 130 C116 104, 134 142, 172 112 S238 88, 286 118"
            fill="none"
            stroke="#426A8C"
            strokeLinecap="round"
            strokeWidth="1.3"
            opacity="0.8"
          />
        </svg>
      </motion.div>
      <div className="absolute bottom-8 left-10 h-px w-44 bg-gradient-to-r from-gold via-steel-bright to-transparent" />
      <div className="absolute bottom-12 left-20 h-px w-32 bg-gradient-to-r from-steel-bright/70 to-transparent" />
      <div className="absolute right-10 top-10 h-20 w-16 border border-gold/20 bg-obsidian/45 shadow-[inset_0_1px_0_rgba(237,232,222,0.08)]" />
    </div>
  );
}

function SystemsVisual() {
  return (
    <div className="absolute inset-0 p-6">
      <div className="grid h-full grid-cols-6 grid-rows-4 gap-2">
        {Array.from({ length: 24 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{ opacity: index % 5 === 0 ? [0.35, 0.85, 0.35] : 1 }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            className={`rounded border border-white/10 bg-steel/12 ${
              index === 2 || index === 9 || index === 16
                ? "border-gold/35 bg-gold/12 shadow-[0_0_24px_rgba(196,145,47,0.12)]"
                : ""
            } ${index === 7 || index === 13 ? "col-span-2 bg-steel-bright/12" : ""}`}
          />
        ))}
      </div>
      <motion.div
        animate={{ x: ["0%", "58%", "0%"] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-1/2 h-px w-[70%] bg-gradient-to-r from-transparent via-steel-bright to-transparent"
      />
    </div>
  );
}

function CommunityVisual() {
  const nodes = [
    "left-[22%] top-[34%]",
    "right-[22%] top-[34%]",
    "left-1/2 top-[52%] -translate-x-1/2",
    "left-[30%] bottom-[24%]",
    "right-[30%] bottom-[24%]",
  ];

  return (
    <div className="absolute inset-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/25"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-steel-bright/30"
      />
      <div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-gradient-to-r from-gold/50 via-steel-bright/60 to-gold/50" />
      <div className="absolute bottom-[32%] left-[33%] right-[33%] h-px rotate-[-25deg] bg-steel-bright/45" />
      <div className="absolute bottom-[32%] left-[33%] right-[33%] h-px rotate-[25deg] bg-gold/35" />
      {nodes.map((position, index) => (
        <motion.span
          key={position}
          animate={{ scale: [1, 1.18, 1], opacity: [0.75, 1, 0.75] }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.25,
          }}
          className={`absolute ${position} size-3 rounded-full border border-gold/45 bg-obsidian shadow-[0_0_18px_rgba(66,106,140,0.35)]`}
        />
      ))}
    </div>
  );
}

function ManifestoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[1.5rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(26,26,26,0.88),rgba(10,10,10,0.76)_54%,rgba(47,69,92,0.2))] p-7 text-center shadow-[0_34px_130px_rgba(0,0,0,0.44),0_0_80px_rgba(66,106,140,0.12),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(196,145,47,0.12),transparent_38%),radial-gradient(circle_at_50%_76%,rgba(66,106,140,0.18),transparent_42%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-steel-bright/55 to-transparent" />
      <motion.div
        animate={{ opacity: [0.18, 0.42, 0.18], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-10 rounded-full bg-steel-bright/10 blur-3xl"
      />
      <div className="relative">
        <p className="font-serif text-3xl leading-tight text-ivory md:text-6xl">
          We don&apos;t just build websites.
          <span className="block bg-[linear-gradient(180deg,#F2D36A,#C4912F_58%,#8A641E)] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(196,145,47,0.22)]">
            We build the digital world around the business.
          </span>
        </p>
        <div className="mx-auto mt-8 h-px max-w-xl bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-[rgba(237,232,222,0.7)] md:text-base">
          The story people connect with. The presence they trust. The
          intelligence that saves time. The infrastructure that keeps the
          operation moving.
        </p>
      </div>
    </motion.div>
  );
}
