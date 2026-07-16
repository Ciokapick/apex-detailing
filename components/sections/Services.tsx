import {
  Armchair,
  CircleDotDashed,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  number: string;
};

const services: Service[] = [
  {
    title: "Exterior Detail",
    description:
      "A meticulous multi-stage wash, decontamination, and finish that restores crisp gloss without shortcuts.",
    icon: Sparkles,
    number: "01",
  },
  {
    title: "Ceramic Coating",
    description:
      "Professional-grade hydrophobic protection with rich depth, easier upkeep, and years of durability.",
    icon: ShieldCheck,
    number: "02",
  },
  {
    title: "Interior Deep Clean",
    description:
      "A material-safe reset for leather, fabric, carpets, trim, glass, and every hard-to-reach surface.",
    icon: Armchair,
    number: "03",
  },
  {
    title: "Paint Correction",
    description:
      "Measured machine polishing that removes swirls and defects while preserving clear-coat integrity.",
    icon: CircleDotDashed,
    number: "04",
  },
];

export function Services() {
  return (
    <Section
      eyebrow="The studio standard"
      id="services"
      intro="No conveyor belts. No rushed handoffs. Every service is performed in our controlled studio with products chosen for your vehicle."
      title="Care that goes beyond clean."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title}>
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-xl border border-champagne-400/20 bg-champagne-400/[0.08] text-champagne-400">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.7} />
                </span>
                <span className="font-display text-sm text-zinc-600">{service.number}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {service.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
