import type { ReactNode } from "react";

type SectionTone = "paper" | "carbon" | "mineral";

type SectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: SectionTone;
};

const toneStyles: Record<SectionTone, string> = {
  paper: "bg-paper text-carbon",
  carbon: "bg-carbon text-paper",
  mineral: "bg-mineral-500 text-carbon",
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
}: SectionProps) {
  return (
    <section className={toneStyles[tone]} id={id}>
      <div className="mx-auto max-w-[100rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <header className="mb-14 grid gap-7 border-t border-current/20 pt-5 sm:mb-20 lg:grid-cols-12 lg:gap-8">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] opacity-55 lg:col-span-3">
            {eyebrow}
          </p>
          <h2 className="text-balance font-display text-4xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:col-span-6 lg:text-7xl">
            {title}
          </h2>
          {intro && (
            <p className="max-w-sm self-end text-sm leading-6 opacity-65 lg:col-span-3 lg:justify-self-end">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
