"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const credibilityCards = [
  {
    title: "Business Operator",
    body: "Real-world experience inside growing businesses, customer operations, service flow, team pressure, and day-to-day execution.",
    icon: "operator",
  },
  {
    title: "Brand Builder",
    body: "Founder of Groomed Gent Co., built around premium positioning, product development, customer experience, and long-term brand equity.",
    icon: "brand",
  },
  {
    title: "Systems Strategist",
    body: "Focused on websites, AI tools, automation, client journeys, and digital infrastructure that make businesses run smoother.",
    icon: "systems",
  },
] as const;

const proofChips = [
  "Real Business Operations",
  "Premium Brand Building",
  "Customer Experience Systems",
  "AI + Automation Strategy",
  "Local Business Growth",
] as const;

const particles = [
  { left: "8%", top: "18%", delay: 0.2, duration: 9.2 },
  { left: "16%", top: "72%", delay: 1.4, duration: 10.5 },
  { left: "27%", top: "38%", delay: 0.8, duration: 8.8 },
  { left: "46%", top: "82%", delay: 2.1, duration: 11.2 },
  { left: "62%", top: "22%", delay: 1.1, duration: 9.8 },
  { left: "76%", top: "62%", delay: 0.4, duration: 10.8 },
  { left: "88%", top: "34%", delay: 1.8, duration: 8.6 },
] as const;

export function FounderOperator() {
  return (
    <section
      id="founder-operator"
      className="relative isolate overflow-hidden bg-obsidian px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <FounderBackground />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: smoothEase }}
            className="max-w-3xl"
          >
            <p className="bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.22)]">
              Founder / Operator
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory drop-shadow-[0_0_34px_rgba(66,106,140,0.18)] md:text-6xl">
              Built From the Operator&apos;s Side.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-[rgba(237,232,222,0.72)] md:text-lg">
              <p>
                Gent Ascend Collective was created by Neil Stutes, a brand
                builder, operator, and founder who understands what most local
                businesses are really fighting against.
              </p>
              <p>
                Most local businesses do not need more random tech. They need
                someone who can understand the business, see the gaps, and
                build the digital infrastructure around how the company
                actually works.
              </p>
              <p>
                After helping operate and grow real businesses, build customer
                systems, work inside service-based environments, and launch
                Groomed Gent Co., Neil created Gent Ascend to help local
                companies modernize with clarity and control.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: 0.1, ease: smoothEase }}
              className="relative mt-9 overflow-hidden border border-gold/28 bg-[linear-gradient(135deg,rgba(17,17,17,0.88),rgba(10,10,10,0.72))] px-5 py-6 shadow-[inset_0_1px_0_rgba(237,232,222,0.07),0_26px_90px_rgba(0,0,0,0.36)] md:px-7"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/75 to-transparent" />
              <div className="absolute -right-16 -top-16 size-36 rounded-full bg-gold/12 blur-3xl" />
              <p className="relative font-serif text-2xl leading-snug text-ivory md:text-3xl">
                &ldquo;I do not build websites as decorations. I build digital
                systems that help real businesses operate sharper, sell better,
                and look like the company they are becoming.&rdquo;
              </p>
            </motion.blockquote>

            <div className="mt-7 flex flex-wrap gap-3">
              {proofChips.map((chip) => (
                <span
                  key={chip}
                  className="border border-gold/28 bg-gold/[0.055] px-3.5 py-2 text-[0.68rem] font-semibold uppercase leading-none tracking-[0.16em] text-[rgba(237,232,222,0.76)] shadow-[inset_0_1px_0_rgba(242,211,106,0.08)]"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#apply">Build With an Operator</Button>
              <p className="max-w-sm text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-muted">
                Founder-led strategy for businesses ready to move with more
                control.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: smoothEase }}
            className="relative"
          >
            <FounderSealCard />

            <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {credibilityCards.map((card, index) => (
                <CredibilityCard key={card.title} card={card} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="mx-auto mt-14 max-w-5xl border-t border-gold/18 pt-8 text-center md:mt-20"
        >
          <p className="font-serif text-2xl leading-snug text-ivory md:text-4xl">
            Gent Ascend is not here to make your business look busy online. It
            is here to help your business look sharper, move smoother, and grow
            with more intention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FounderBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(69,35,103,0.42),transparent_34%),radial-gradient(circle_at_20%_62%,rgba(196,145,47,0.12),transparent_30%),linear-gradient(180deg,#0A0A0A_0%,#120B19_44%,#070707_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(237,232,222,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(196,145,47,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50 [mask-image:radial-gradient(circle_at_58%_42%,black,transparent_76%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(224,184,74,0.13)_1px,transparent_1.4px)] bg-[size:72px_72px] opacity-35 [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_78%,transparent)]"
      />
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          aria-hidden="true"
          animate={{ y: [-8, 10, -8], opacity: [0.16, 0.62, 0.16] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ left: particle.left, top: particle.top }}
          className="absolute -z-10 size-1 rounded-full bg-gold-bright shadow-[0_0_18px_rgba(224,184,74,0.65)]"
        />
      ))}
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-obsidian to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.66)_100%)]" />
    </>
  );
}

function FounderSealCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gold/25 bg-[linear-gradient(145deg,rgba(26,18,34,0.84),rgba(10,10,10,0.88)_56%,rgba(17,17,17,0.9))] p-6 shadow-[0_38px_140px_rgba(0,0,0,0.56),0_0_80px_rgba(69,35,103,0.2),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.04)_1px,transparent_1px)] bg-[size:34px_34px] opacity-70" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
      <div className="absolute -right-24 -top-24 size-64 rounded-full bg-[#452367]/36 blur-3xl" />
      <div className="absolute -left-20 bottom-10 size-52 rounded-full bg-gold/12 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-bright">
              Command Profile
            </p>
            <p className="mt-2 text-sm leading-6 text-[rgba(237,232,222,0.62)]">
              Founder-Led. Operator-Built.
            </p>
          </div>
          <span className="border border-gold/28 bg-black/24 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
            NS
          </span>
        </div>

        <div className="relative mx-auto my-9 grid aspect-square max-w-[360px] place-items-center">
          <motion.div
            aria-hidden="true"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border border-dashed border-gold/28"
          />
          <motion.div
            aria-hidden="true"
            animate={{ rotate: -360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-steel-bright/24"
          />
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(196,145,47,0.24),transparent_56%)] blur-xl" />
          <FounderLabel className="left-1/2 top-0 -translate-x-1/2" label="Brand" />
          <FounderLabel className="right-0 top-1/2 -translate-y-1/2" label="Systems" />
          <FounderLabel className="bottom-0 left-1/2 -translate-x-1/2" label="Experience" />
          <FounderLabel className="left-0 top-1/2 -translate-y-1/2" label="Growth" />

          <motion.div
            animate={{
              boxShadow: [
                "0 0 46px rgba(196,145,47,0.22), inset 0 0 32px rgba(224,184,74,0.1)",
                "0 0 76px rgba(224,184,74,0.36), inset 0 0 46px rgba(224,184,74,0.16)",
                "0 0 46px rgba(196,145,47,0.22), inset 0 0 32px rgba(224,184,74,0.1)",
              ],
            }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid size-40 place-items-center rounded-full border border-gold/60 bg-[radial-gradient(circle_at_50%_35%,rgba(224,184,74,0.22),rgba(196,145,47,0.08)_42%,rgba(10,10,10,0.9)_70%)] md:size-48"
          >
            <div className="absolute inset-3 rounded-full border border-gold-bright/24" />
            <div className="absolute inset-7 rounded-full border border-white/10" />
            <p className="font-serif text-5xl leading-none text-gold-bright md:text-6xl">
              NS
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
          {["Operations", "Customer Flow", "Brand Equity", "Digital Control"].map(
            (item) => (
              <div
                key={item}
                className="border border-white/10 bg-black/18 px-3 py-3 text-xs font-semibold uppercase leading-5 tracking-[0.16em] text-[rgba(237,232,222,0.62)]"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function FounderLabel({ className, label }: { className: string; label: string }) {
  return (
    <span
      className={`absolute z-10 border border-gold/24 bg-obsidian/72 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-bright shadow-[0_0_24px_rgba(196,145,47,0.14)] backdrop-blur ${className}`}
    >
      {label}
    </span>
  );
}

function CredibilityCard({
  card,
  index,
}: {
  card: (typeof credibilityCards)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: smoothEase }}
      whileHover={{
        y: -5,
        borderColor: "rgba(224,184,74,0.5)",
        boxShadow:
          "0 24px 80px rgba(0,0,0,0.42), 0 0 34px rgba(196,145,47,0.16), inset 0 1px 0 rgba(242,211,106,0.14)",
      }}
      className="relative overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(26,26,26,0.78),rgba(10,10,10,0.74))] p-5 shadow-[inset_0_1px_0_rgba(237,232,222,0.06)]"
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
      <div className="relative flex gap-4 sm:block lg:flex">
        <div className="grid size-11 shrink-0 place-items-center border border-gold/30 bg-gold/[0.07] shadow-[0_0_22px_rgba(196,145,47,0.12)]">
          <CredibilityIcon type={card.icon} />
        </div>
        <div className="sm:mt-4 lg:mt-0">
          <h3 className="font-serif text-2xl leading-tight text-ivory">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[rgba(237,232,222,0.64)]">
            {card.body}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function CredibilityIcon({
  type,
}: {
  type: (typeof credibilityCards)[number]["icon"];
}) {
  if (type === "operator") {
    return (
      <svg viewBox="0 0 40 40" className="size-6" aria-hidden="true">
        <path d="M10 31h20M13 31V14h14v17M13 14h14" fill="none" stroke="#C4912F" strokeWidth="1.5" />
        <path d="M17 18h6M17 22h6M20 14V9h8" fill="none" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "brand") {
    return (
      <svg viewBox="0 0 40 40" className="size-6" aria-hidden="true">
        <path d="M20 8l10 4v8c0 7-4.3 11-10 13-5.7-2-10-6-10-13v-8l10-4Z" fill="none" stroke="#C4912F" strokeLinejoin="round" strokeWidth="1.5" />
        <path d="M20 14v12M14 20h12" stroke="#E0B84A" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" className="size-6" aria-hidden="true">
      <circle cx="11" cy="14" r="4" fill="none" stroke="#C4912F" strokeWidth="1.5" />
      <circle cx="29" cy="13" r="4" fill="none" stroke="#C4912F" strokeWidth="1.5" />
      <circle cx="21" cy="29" r="4" fill="none" stroke="#E0B84A" strokeWidth="1.5" />
      <path d="M15 15.5l10 9.5M26 16l-3 9M14 27l3 1" stroke="#C4912F" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}
