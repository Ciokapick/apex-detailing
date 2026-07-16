import { Check } from "lucide-react";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <Card featured={featured}>
      <div className="flex min-h-[30rem] flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
          </div>
          {featured && (
            <span className="shrink-0 rounded-full bg-champagne-400/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-champagne-300">
              Most popular
            </span>
          )}
        </div>

        <div className="mt-8 flex items-end gap-2 border-b border-white/10 pb-8">
          <span className="font-display text-4xl font-semibold tracking-tight text-white">
            {price}
          </span>
          <span className="pb-1 text-sm text-zinc-500">starting</span>
        </div>

        <ul className="my-8 space-y-4 text-sm text-zinc-300">
          {features.map((feature) => (
            <li className="flex gap-3" key={feature}>
              <Check
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-champagne-400"
                size={17}
                strokeWidth={2}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            href="#contact"
            fullWidth
            variant={featured ? "primary" : "secondary"}
          >
            Choose {name}
          </Button>
        </div>
      </div>
    </Card>
  );
}
