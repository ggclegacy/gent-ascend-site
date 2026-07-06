import { PremiumCard } from "@/components/ui/PremiumCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

const businessTypes = [
  {
    name: "Construction Companies",
    outcome:
      "Estimate intake, project galleries, trust-building service pages, and better quote workflows.",
  },
  {
    name: "Landscaping Companies",
    outcome:
      "Service plans, before-and-after galleries, community apps, memberships, and seasonal reminders.",
  },
  {
    name: "HVAC & Plumbing",
    outcome:
      "Service pages, emergency request flows, quote forms, local trust signals, and follow-up systems.",
  },
  {
    name: "Towing & Auto Services",
    outcome:
      "Fast request flows, location-aware intake, quote paths, customer updates, and clearer service access.",
  },
  {
    name: "Barbershops & Grooming Brands",
    outcome:
      "Booking flows, client experiences, product education, loyalty, and community-building systems.",
  },
  {
    name: "BBQ, Catering & Food Brands",
    outcome:
      "Story-led brand presence, catering inquiry flows, menu drops, event calendars, and loyal customer communities.",
  },
  {
    name: "Home Service Businesses",
    outcome:
      "Lead capture, service clarity, review systems, quote forms, and repeat-customer infrastructure.",
  },
  {
    name: "Founder-Led Local Companies",
    outcome:
      "Brand story, website authority, operational systems, and digital infrastructure built around the owner's vision.",
  },
];

export function WhoWeBuildFor() {
  return (
    <section id="builds" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#111111_0%,#0A0A0A_100%)]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Built For Serious Local Operators"
          title="For Businesses With Roots, Reputation, and Room to Ascend."
          subtitle="Gent Ascend Collective is selective by design. We work with businesses that already have real skill, real service, or real community value — and need a sharper digital foundation to match."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {businessTypes.map((business, index) => (
            <PremiumCard key={business.name} className="p-0">
              <div className="grid min-h-40 gap-5 p-6 sm:grid-cols-[4.5rem_1fr] sm:p-7">
                <div className="flex items-start">
                  <span className="grid size-14 place-items-center border border-gold/30 bg-gold/10 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="border-l border-gold/20 pl-5">
                  <h3 className="font-serif text-2xl leading-tight text-ivory md:text-3xl">
                    {business.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {business.outcome}
                  </p>
                </div>
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </section>
  );
}
