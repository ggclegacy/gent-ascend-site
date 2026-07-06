import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const framework = [
  {
    title: "Identity",
    support: "Story • Positioning • Trust • Visual Direction",
    meaning:
      "We uncover the roots, founder story, reputation, offer, values, and trust signals that make the business worth supporting.",
  },
  {
    title: "Presence",
    support: "Website • Service Pages • Mobile • Conversion",
    meaning:
      "We build the public-facing digital authority: premium websites, service pages, mobile experience, project galleries, reviews, local credibility, and clear calls-to-action.",
  },
  {
    title: "Intelligence",
    support: "AI Tools • Intake • Automation • Customer Insight",
    meaning:
      "We use practical intelligence and workflow tools to capture information, educate customers, prepare quotes, create content, and help the operation move sharper.",
  },
  {
    title: "Infrastructure",
    support: "Quotes • Booking • Dashboards • Community",
    meaning:
      "We create the digital backbone: quote flows, lead capture, booking paths, customer portals, memberships, review systems, dashboards, and app-style community experiences.",
  },
];

export function AscendFramework() {
  return (
    <section id="framework" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0A0A0A_0%,#111111_52%,#0A0A0A_100%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Proprietary Operating Layers"
          title="The Ascend Framework"
          subtitle="Identity, Presence, Intelligence, and Infrastructure — the four layers that turn a real business into a modern digital ecosystem."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {framework.map((item, index) => (
            <PremiumCard key={item.title} className="min-h-[320px]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                  0{index + 1}
                </span>
                <span className="size-10 border border-steel-bright/40 bg-steel/20" />
              </div>
              <h3 className="font-serif text-3xl text-ivory">{item.title}</h3>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-steel-bright">
                {item.support}
              </p>
              <p className="mt-6 text-sm leading-7 text-muted">{item.meaning}</p>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
