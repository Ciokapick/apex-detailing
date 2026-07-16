import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "default" | "raised";
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "default",
  align = "left",
}: SectionProps) {
  const centered = align === "center";

  return (
    <section
      className={tone === "raised" ? "bg-ink-900" : "bg-ink-950"}
      id={id}
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {(eyebrow || title || intro) && (
          <div
            className={[
              "mb-12 max-w-2xl sm:mb-16",
              centered ? "mx-auto text-center" : "",
            ].join(" ")}
          >
            {eyebrow && (
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-champagne-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
