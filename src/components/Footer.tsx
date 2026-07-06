import { Button } from "@/components/ui/Button";

const links = ["Identity", "Presence", "Intelligence", "Infrastructure"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl text-ivory">Gent Ascend Collective</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
            Built for businesses with roots, reputation, and room to ascend.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:items-end">
          <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {links.map((link) => (
              <a
                key={link}
                href="#framework"
                className="transition-colors hover:text-gold"
              >
                {link}
              </a>
            ))}
          </div>
          <Button href="#apply" className="min-h-10 px-4 text-[0.68rem]">
            Start Your Ascent
          </Button>
        </div>
      </div>
    </footer>
  );
}
