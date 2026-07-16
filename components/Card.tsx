import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  featured?: boolean;
};

export function Card({ children, featured = false }: CardProps) {
  return (
    <article
      className={[
        "rounded-2xl border p-6 transition-colors duration-300 sm:p-7",
        featured
          ? "border-champagne-400/45 bg-champagne-400/[0.06] shadow-glow"
          : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.045]",
      ].join(" ")}
    >
      {children}
    </article>
  );
}
