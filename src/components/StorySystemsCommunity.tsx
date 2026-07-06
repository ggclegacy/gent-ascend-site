import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const pillars = [
  {
    label: "The Roots",
    title: "Story",
    headline: "Show the story behind the work.",
    body: "We uncover the founder story, local reputation, customer trust, craft, and identity that make the business worth supporting — then shape that into messaging, visual direction, website copy, and a stronger public presence.",
    motif: "archive",
  },
  {
    label: "The Engine",
    title: "Systems",
    headline: "Make the business easier to run and easier to buy from.",
    body: "We build quote flows, service request forms, booking paths, lead capture, dashboards, review systems, intelligent intake, customer education, and operational tools that reduce friction for both the owner and the customer.",
    motif: "grid",
  },
  {
    label: "The Ascent",
    title: "Community",
    headline: "Turn customers into a connected audience.",
    body: "For businesses ready to go further, we build app-style experiences, customer portals, memberships, reminders, loyalty systems, before-and-after galleries, event drops, and community tools that keep people engaged beyond the first transaction.",
    motif: "network",
  },
];

export function StorySystemsCommunity() {
  return (
    <section id="story" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_28%,rgba(196,145,47,0.12),transparent_30%),radial-gradient(circle_at_82%_48%,rgba(66,106,140,0.22),transparent_36%),#0A0A0A]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(237,232,222,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(237,232,222,0.018)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The Digital World Around The Business"
          title="Your Business Has a Story. We Build the System Around It."
          subtitle="Most businesses already have the hard part: real work, real customers, real reputation, and a reason people want to support them. Gent Ascend Collective turns that foundation into a modern brand presence, website, intelligent workflow, and digital ecosystem built to help the business ascend."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PremiumCard key={pillar.title} className="min-h-[470px] p-7">
              <StoryMotif variant={pillar.motif} />
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                {pillar.label}
              </p>
              <h3 className="mt-3 font-serif text-4xl text-ivory">
                {pillar.title}
              </h3>
              <p className="mt-6 text-xl leading-8 text-ivory">
                {pillar.headline}
              </p>
              <p className="mt-5 text-sm leading-7 text-muted">{pillar.body}</p>
            </PremiumCard>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl border border-gold/25 bg-graphite/55 p-7 text-center shadow-[0_28px_110px_rgba(66,106,140,0.12)] md:p-10">
          <p className="font-serif text-3xl leading-tight text-ivory md:text-5xl">
            We don&apos;t just build websites. We build the digital world around
            the business.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-muted md:text-base">
            The story people connect with. The presence they trust. The
            intelligence that saves time. The infrastructure that keeps the
            operation moving.
          </p>
        </div>
      </div>
    </section>
  );
}

function StoryMotif({ variant }: { variant: string }) {
  if (variant === "archive") {
    return (
      <div className="relative h-28 border border-gold/25 bg-obsidian/55 p-5">
        <div className="absolute inset-x-5 top-5 h-px bg-gold/50" />
        <div className="absolute bottom-5 left-5 right-16 h-px bg-steel-bright/40" />
        <div className="absolute bottom-10 left-5 right-8 h-px bg-steel-bright/25" />
        <div className="absolute right-5 top-5 size-12 border border-gold/35" />
        <div className="absolute left-7 top-9 h-10 w-px bg-gradient-to-b from-gold to-steel-bright" />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid h-28 grid-cols-4 gap-2 border border-steel-bright/25 bg-obsidian/55 p-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className={`border border-white/10 bg-steel/15 ${
              index === 1 || index === 6 ? "bg-gold/20" : ""
            }`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative h-28 border border-steel-bright/25 bg-obsidian/55">
      <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/45" />
      <div className="absolute left-[18%] top-[26%] size-3 rounded-full bg-gold" />
      <div className="absolute right-[20%] top-[28%] size-3 rounded-full bg-steel-bright" />
      <div className="absolute bottom-[22%] left-[31%] size-3 rounded-full bg-steel-bright" />
      <div className="absolute bottom-[24%] right-[28%] size-3 rounded-full bg-gold-bright" />
      <div className="absolute left-[22%] right-[22%] top-1/2 h-px bg-gradient-to-r from-gold via-steel-bright to-gold" />
      <div className="absolute bottom-[30%] left-[35%] right-[31%] h-px rotate-[-25deg] bg-steel-bright/50" />
    </div>
  );
}
