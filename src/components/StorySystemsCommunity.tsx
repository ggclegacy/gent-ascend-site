"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    label: "The Roots",
    title: "Story",
    headline: "Show the story behind the work.",
    body: "We uncover the founder story, local reputation, customer trust, craft, and identity that make the business worth supporting — then shape that into messaging, visual direction, website copy, and a stronger public presence.",
    motif: "story",
    image: "/story.png",
    alt: "Premium visual representing business story, roots, and digital transformation",
  },
  {
    label: "The Engine",
    title: "Systems",
    headline: "Make the business easier to run and easier to buy from.",
    body: "We build quote flows, service request forms, booking paths, lead capture, dashboards, review systems, intelligent intake, customer education, and operational tools that reduce friction for both the owner and the customer.",
    motif: "systems",
    image: "/systems.png",
    alt: "Premium visual representing connected business systems and digital operations",
  },
  {
    label: "The Ascent",
    title: "Community",
    headline: "Turn customers into a connected audience.",
    body: "For businesses ready to go further, we build app-style experiences, customer portals, memberships, reminders, loyalty systems, before-and-after galleries, event drops, and community tools that keep people engaged beyond the first transaction.",
    motif: "community",
    image: "/community.png",
    alt: "Premium visual representing a connected customer community experience",
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
      className="group relative min-h-[620px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(145deg,rgba(26,26,26,0.9),rgba(10,10,10,0.78)_54%,rgba(47,69,92,0.2))] p-5 shadow-[0_32px_120px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(237,232,222,0.08)] backdrop-blur-md md:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.024)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-45" />
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#8A641E,#E0B84A,#C4912F,transparent)] opacity-85" />
      <div className="absolute -right-24 -top-24 size-56 rounded-full bg-steel-bright/14 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -bottom-24 -left-24 size-48 rounded-full bg-gold/10 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-[1.35rem] border border-transparent transition-colors duration-500 group-hover:border-gold/25" />

      <div className="relative">
        <MotifPanel
          alt={pillar.alt}
          image={pillar.image}
          title={pillar.title}
          variant={pillar.motif}
        />
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

function MotifPanel({
  alt,
  image,
  title,
  variant,
}: {
  alt: string;
  image: string;
  title: string;
  variant: string;
}) {
  return (
    <div className="relative h-64 overflow-hidden rounded-2xl border border-gold/24 bg-[linear-gradient(145deg,rgba(10,10,10,0.82),rgba(26,26,26,0.72)_46%,rgba(47,69,92,0.28))] p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.38),0_0_48px_rgba(66,106,140,0.12),inset_0_1px_0_rgba(237,232,222,0.1)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:border-gold/45 group-hover:shadow-[0_28px_92px_rgba(0,0,0,0.42),0_0_64px_rgba(196,145,47,0.16),0_0_54px_rgba(66,106,140,0.18),inset_0_1px_0_rgba(237,232,222,0.12)] md:h-72">
      <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#8A641E_0%,#C4912F_18%,transparent_34%,transparent_66%,#426A8C_82%,#E0B84A_100%)] opacity-80" />
      <div className="relative h-full overflow-hidden rounded-[calc(1rem-1px)] border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgba(196,145,47,0.16),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(66,106,140,0.24),transparent_38%),linear-gradient(145deg,rgba(10,10,10,0.86),rgba(26,26,26,0.72)_54%,rgba(47,69,92,0.18))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,232,222,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(66,106,140,0.045)_1px,transparent_1px)] bg-[size:30px_30px] opacity-42" />
      <motion.div
        animate={{ opacity: [0.22, 0.48, 0.22], scale: [0.98, 1.04, 0.98] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(66,106,140,0.28),rgba(196,145,47,0.12)_42%,transparent_72%)] blur-2xl"
      />
      <div className="absolute inset-4 rounded-xl border border-gold/18 bg-obsidian/22 shadow-[inset_0_1px_0_rgba(237,232,222,0.08),inset_0_0_48px_rgba(66,106,140,0.1)]" />
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 70vw, 90vw"
        className="relative z-10 object-contain p-5 drop-shadow-[0_20px_34px_rgba(0,0,0,0.38)] transition duration-500 group-hover:scale-[1.025] group-hover:drop-shadow-[0_24px_42px_rgba(196,145,47,0.18)]"
        priority={variant === "story"}
      />
      <div className="absolute inset-x-5 top-0 z-20 h-px bg-gradient-to-r from-transparent via-gold-bright/70 to-transparent" />
      <div className="absolute inset-y-5 left-0 z-20 w-px bg-gradient-to-b from-transparent via-gold/45 to-transparent" />
      <div className="absolute inset-y-5 right-0 z-20 w-px bg-gradient-to-b from-transparent via-steel-bright/45 to-transparent" />
      <span className="absolute left-4 top-4 z-20 h-5 w-5 border-l border-t border-gold/45" />
      <span className="absolute right-4 top-4 z-20 h-5 w-5 border-r border-t border-gold/45" />
      <span className="absolute bottom-4 left-4 z-20 h-5 w-5 border-b border-l border-steel-bright/38" />
      <span className="absolute bottom-4 right-4 z-20 h-5 w-5 border-b border-r border-steel-bright/38" />
      <span className="absolute bottom-5 left-5 z-20 bg-obsidian/56 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-md">
        {title}
      </span>
      <motion.div
        animate={{ x: ["-130%", "130%"] }}
        transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 z-20 h-full w-1/4 rotate-12 bg-gradient-to-r from-transparent via-ivory/12 to-transparent"
      />
      </div>
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
