import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Framework", href: "#framework" },
  { label: "Builds", href: "#builds" },
  { label: "Work", href: "#work" },
  { label: "Apply", href: "#apply" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-ivory"
          aria-label="Gent Ascend Collective home"
        >
          <span className="grid size-9 place-items-center border border-gold/70 bg-gold/10 text-gold">
            GA
          </span>
          <span className="hidden sm:inline">Gent Ascend Collective</span>
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button href="#apply" className="hidden min-h-10 px-4 text-[0.68rem] md:inline-flex">
          Start Your Ascent
        </Button>
      </nav>
    </header>
  );
}
