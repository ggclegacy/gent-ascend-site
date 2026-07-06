type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-ivory md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted md:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
