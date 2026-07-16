import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";

const packages = [
  {
    name: "Essential",
    price: "$195",
    description: "A considered maintenance detail for a consistently sharp vehicle.",
    features: [
      "Safe hand wash and dry",
      "Wheels, tires, and arches",
      "Interior vacuum and wipe-down",
      "Three-month paint sealant",
    ],
  },
  {
    name: "Signature",
    price: "$495",
    description: "Our complete inside-and-out reset with lasting paint protection.",
    features: [
      "Everything in Essential",
      "Chemical and clay decontamination",
      "Single-stage paint enhancement",
      "One-year ceramic coating",
      "Full interior deep clean",
    ],
    featured: true,
  },
  {
    name: "Concours",
    price: "$1,295",
    description: "An uncompromising correction and protection package for special cars.",
    features: [
      "Everything in Signature",
      "Multi-stage paint correction",
      "Five-year ceramic coating",
      "Wheel-face and glass coating",
      "Complimentary first maintenance wash",
    ],
  },
] as const;

export function Pricing() {
  return (
    <Section
      align="center"
      eyebrow="Packages"
      id="pricing"
      intro="Transparent starting prices. We confirm the exact scope after a complimentary paint and condition assessment."
      title="Choose your level of finish."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        {packages.map((item) => (
          <PricingCard key={item.name} {...item} />
        ))}
      </div>
    </Section>
  );
}
