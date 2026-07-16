import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  number: string;
};

export function Card({ children, number }: CardProps) {
  return (
    <article className="group grid grid-cols-[3rem_1fr] gap-3 border-t border-carbon/20 py-6 transition-colors duration-300 hover:border-carbon sm:grid-cols-[4rem_1fr] sm:py-7">
      <span className="pt-1 font-mono text-[0.65rem] tracking-[0.16em] text-carbon/45">
        [{number}]
      </span>
      {children}
    </article>
  );
}
