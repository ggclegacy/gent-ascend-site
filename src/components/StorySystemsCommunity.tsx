"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    label: "The Roots",
    title: "Story",
    headline: "Show the story behind the work.",
    body: "We uncover the founder story, local reputation, customer trust, craft, and identity that make the business worth supporting — then shape that into messaging, visual direction, website copy, and a stronger public presence.",
    image: "/story.png",
    alt: "Premium visual representing business roots, founder story, and digital transformation.",
  },
  {
    label: "The Engine",
    title: "Systems",
    headline: "Make the business easier to run and easier to buy from.",
    body: "We build quote flows, service request forms, booking paths, lead capture, dashboards, review systems, intelligent intake, customer education, and operational tools that reduce friction for both the owner and the customer.",
    image: "/systems.png",
    alt: "Premium visual representing connected business systems and operational infrastructure.",
  },
  {
    label: "The Ascent",
    title: "Community",
    headline: "Turn customers into a connected audience.",
    body: "For businesses ready to go further, we build app-style experiences, customer portals, memberships, reminders, loyalty systems, before-and-after galleries, event drops, and community tools that keep people engaged beyond the first transaction.",
    image: "/community.png",
    alt: "Premium visual representing connected customers, portals, memberships, and community experience.",
  },
] as const;

export function StorySystemsCommunity() {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden bg-obsidian px-5 py-24 text-ivory md:px-8 md:py-32"
    >
      <WorldBackground />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-5 bg-[linear-gradient(90deg,#8A641E,#C4912F,#F2D36A,#C4912F)] bg-clip-text text-xs font-semibold uppercase tracking-[0.34em] text-transparent drop-shadow-[0_0_18px_rgba(196,145,47,0.22)]">
            The Digital World Around The Business
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ivory drop-shadow-[0_0_34px_rgba(66,106,140,0.18)] md:text-6xl">
            Your Business Has a Story. We Build the System Around It.
          </h2>
          <p className="mx-auto mt-7 max-w-4xl text-base leading-8 text-[rgba(237,232,222,0.8)] md:text-lg">
            Most businesses already have the hard part: real work, real
            customers, real reputation, and a reason people want to support
            them. Gent Ascend Collective turns that foundation into a modern
            brand presence, intelligent workflow, and digital ecosystem built to
            help the business ascend.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:mt-20 md:gap-10">
          {pillars.map((pillar, index) => (
            <ShowcaseCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        <ThesisPanel />
      </div>
    </section>
  );
}

function WorldBackground() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_18%,rgba(66,106,140,0.24),transparent_30%),radial-gradient(circle_at_82%_34%,rgba(196,145,47,0.13),transparent_24%),radial-gradient(circle_at_42%_82%,rgba(47,69,92,0.3),transparent_34%),linear-gradient(180deg,#070707_0%,#111111_42%,#0A0A0A_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(66,106,140,0.062)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.024)_1px,transparent_1px)] bg-[size:88px_88px] opacity-45 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_86%,transparent)]" />
      <div className="absolute left-[12%] top-24 -z-10 h-[74%] w-px bg-gradient-to-b from-transparent via-gold/18 to-transparent" />
      <div className="absolute right-[14%] top-36 -z-10 h-[62%] w-px bg-gradient-to-b from-transparent via-steel-bright/18 to-transparent" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.34, 0.16], x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[46%] -z-10 h-px w-[min(1120px,88vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-bright/60 to-transparent shadow-[0_0_46px_rgba(196,145,47,0.18)]"
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_32%,rgba(0,0,0,0.68)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-obsidian to-transparent" />
    </>
  );
}

function ShowcaseCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.78, delay: index * 0.08, ease: smoothEase }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(17,17,17,0.94),rgba(10,10,10,0.9)_46%,rgba(47,69,92,0.22))] p-4 shadow-[0_38px_140px_rgba(0,0,0,0.56),0_0_76px_rgba(66,106,140,0.12),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md transition-colors duration-500 hover:border-gold/34 md:p-6 lg:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(196,145,47,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-44" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#8A641E,#C4912F,#F2D36A,#C4912F,transparent)] opacity-90" />
      <div className="absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute -right-28 -top-28 size-64 rounded-full bg-steel-bright/16 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-28 -left-24 size-56 rounded-full bg-gold/11 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,1fr)] lg:items-center lg:gap-10 xl:gap-14">
        <div className="order-2 lg:order-1">
          <div className="flex flex-wrap items-center gap-4">
            <p className="bg-[linear-gradient(180deg,#F2D36A,#C4912F_56%,#8A641E)] bg-clip-text text-xs font-semibold uppercase tracking-[0.28em] text-transparent">
              {pillar.label}
            </p>
            <span className="h-px w-16 bg-gradient-to-r from-gold/55 to-transparent" />
          </div>

          <h3 className="mt-5 font-serif text-5xl leading-none text-ivory drop-shadow-[0_0_24px_rgba(66,106,140,0.16)] md:text-6xl">
            {pillar.title}
          </h3>
          <p className="mt-6 max-w-xl text-xl leading-8 text-[rgba(237,232,222,0.95)] md:text-2xl md:leading-9">
            {pillar.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[rgba(237,232,222,0.76)]">
            {pillar.body}
          </p>

          <div className="mt-8 hidden items-center gap-4 lg:flex">
            <span className="h-px w-24 bg-gradient-to-r from-gold-bright/70 via-gold/42 to-transparent" />
            <span className="size-2 rotate-45 border border-gold-bright/70 bg-obsidian shadow-[0_0_18px_rgba(224,184,74,0.35)]" />
            <span className="h-px flex-1 bg-gradient-to-r from-steel-bright/50 to-transparent" />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ImageArtifact pillar={pillar} priority={index === 0} />
        </div>
      </div>
    </motion.article>
  );
}

function ImageArtifact({
  pillar,
  priority,
}: {
  pillar: (typeof pillars)[number];
  priority: boolean;
}) {
  return (
    <div className="relative mx-auto max-w-[560px] lg:max-w-none">
      <div className="absolute -inset-4 rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_20%,rgba(66,106,140,0.2),transparent_46%),radial-gradient(circle_at_64%_88%,rgba(196,145,47,0.13),transparent_42%)] blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,#F2D36A_0%,#E0B84A_16%,#C4912F_34%,#8A641E_50%,rgba(66,106,140,0.76)_72%,#E0B84A_100%)] p-[1px] shadow-[0_30px_105px_rgba(0,0,0,0.56),0_0_62px_rgba(66,106,140,0.18)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_38px_125px_rgba(0,0,0,0.62),0_0_80px_rgba(196,145,47,0.22),0_0_72px_rgba(66,106,140,0.26)]">
        <div className="relative aspect-square overflow-hidden rounded-[calc(1.25rem-1px)] border border-gold/14 bg-[radial-gradient(circle_at_50%_18%,rgba(196,145,47,0.18),transparent_32%),radial-gradient(circle_at_78%_76%,rgba(66,106,140,0.32),transparent_38%),linear-gradient(145deg,rgba(10,10,10,0.96),rgba(17,17,17,0.86)_52%,rgba(47,69,92,0.24))]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(196,145,47,0.038)_1px,transparent_1px)] bg-[size:32px_32px] opacity-45" />
          <div className="absolute inset-5 rounded-2xl border border-gold/18 bg-black/18 shadow-[inset_0_1px_0_rgba(237,232,222,0.08),inset_0_0_62px_rgba(66,106,140,0.16)]" />

          <Image
            src={pillar.image}
            alt={pillar.alt}
            fill
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 90vw"
            className="relative z-10 object-contain p-3 drop-shadow-[0_24px_42px_rgba(0,0,0,0.46)] transition duration-700 group-hover:scale-[1.025] group-hover:drop-shadow-[0_30px_52px_rgba(196,145,47,0.22)]"
            priority={priority}
          />

          <div className="absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-gold-bright/80 to-transparent" />
          <div className="absolute inset-y-6 left-0 z-20 w-px bg-gradient-to-b from-transparent via-gold/48 to-transparent" />
          <div className="absolute inset-y-6 right-0 z-20 w-px bg-gradient-to-b from-transparent via-steel-bright/52 to-transparent" />
          <span className="absolute left-4 top-4 z-20 h-7 w-7 border-l border-t border-gold/52" />
          <span className="absolute right-4 top-4 z-20 h-7 w-7 border-r border-t border-gold/52" />
          <span className="absolute bottom-4 left-4 z-20 h-7 w-7 border-b border-l border-steel-bright/42" />
          <span className="absolute bottom-4 right-4 z-20 h-7 w-7 border-b border-r border-steel-bright/42" />

          <motion.span
            aria-hidden="true"
            animate={{ x: ["-140%", "150%"] }}
            transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 z-20 h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-ivory/12 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

function ThesisPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.78, ease: smoothEase }}
      className="relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-gold/30 bg-[linear-gradient(145deg,rgba(17,17,17,0.94),rgba(10,10,10,0.9)_50%,rgba(47,69,92,0.24))] p-7 text-center shadow-[0_36px_140px_rgba(0,0,0,0.54),0_0_86px_rgba(66,106,140,0.16),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(66,106,140,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(196,145,47,0.03)_1px,transparent_1px)] bg-[size:46px_46px] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(196,145,47,0.16),transparent_38%),radial-gradient(circle_at_50%_82%,rgba(66,106,140,0.24),transparent_42%)]" />
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-steel-bright/55 to-transparent" />

      <div className="relative">
        <p className="font-serif text-3xl leading-tight text-ivory md:text-6xl">
          We don&apos;t just build websites.
          <span className="block bg-[linear-gradient(180deg,#F2D36A,#E0B84A_28%,#C4912F_62%,#8A641E)] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(196,145,47,0.22)]">
            We build the digital world around the business.
          </span>
        </p>
        <div className="mx-auto mt-8 h-px max-w-xl bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
        <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-[rgba(237,232,222,0.72)] md:text-base">
          The story people connect with. The presence they trust. The
          intelligence that saves time. The infrastructure that keeps the
          operation moving.
        </p>
      </div>
    </motion.div>
  );
}
