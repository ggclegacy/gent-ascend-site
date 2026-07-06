import { Button } from "@/components/ui/Button";

export function ApplyCTA() {
  return (
    <section id="apply" className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(196,145,47,0.14),transparent_28%),radial-gradient(circle_at_50%_72%,rgba(66,106,140,0.24),transparent_36%),#0A0A0A]" />
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border border-gold/30 bg-carbon/78 px-6 py-14 shadow-[0_34px_140px_rgba(0,0,0,0.42)] md:px-12 md:py-20">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-bright to-transparent" />
          <div className="absolute -right-20 -top-20 size-60 rounded-full bg-steel-bright/12 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
              Enter The Collective
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ivory md:text-6xl">
              Ready to Build the Digital World Around Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
              Gent Ascend Collective works selectively with businesses ready to
              modernize with intention. Tell us where your business stands now,
              what you&apos;re building toward, and what needs to ascend first.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="#apply">Start Your Ascent</Button>
              <Button href="#apply" variant="secondary">
                Request a Build Review
              </Button>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-xs font-semibold uppercase leading-6 tracking-[0.18em] text-muted">
              Not every business needs the same build. The first step is
              understanding the story, the operation, and the opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
