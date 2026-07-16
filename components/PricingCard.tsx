import { Plus } from "lucide-react";

import { Button } from "@/components/Button";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
  number: string;
};

export function PricingCard({ name, price, description, features, featured = false, number }: PricingCardProps) {
  return (
    <article className={`flex min-h-[36rem] flex-col border-t border-carbon/20 p-6 first:border-t-0 sm:p-8 lg:border-l lg:border-t-0 ${featured ? "bg-mineral-500" : "bg-paper"}`}>
      <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.15em] text-carbon/55">
        <span>[{number}]</span>
        {featured && <span>Studio choice</span>}
      </div>
      <h3 className="mt-10 text-4xl font-medium leading-none tracking-[-0.05em] text-carbon sm:text-5xl">{name}</h3>
      <p className="mt-5 max-w-xs text-sm leading-6 text-carbon/65">{description}</p>

      <div className="mt-10 border-y border-carbon/20 py-6">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-carbon/45">From</span>
        <p className="mt-2 text-5xl font-medium tracking-[-0.06em] text-carbon">{price}</p>
      </div>

      <ul className="my-8 space-y-4 text-sm text-carbon/75">
        {features.map((feature) => (
          <li className="flex items-start gap-3" key={feature}>
            <Plus aria-hidden="true" className="mt-0.5 shrink-0" size={15} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button href="#contact" fullWidth variant="secondary">Choose {name}</Button>
      </div>
    </article>
  );
}
