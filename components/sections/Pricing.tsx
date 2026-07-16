import { PricingCard } from "@/components/PricingCard";
import { Section } from "@/components/Section";

const packages = [
  { number: "01", name: "Essential", price: "$195", description: "A disciplined maintenance detail for a car that already gets the right kind of care.", features: ["Safe hand wash and dry", "Wheels, tires and arches", "Interior vacuum and reset", "Three-month paint sealant"] },
  { number: "02", name: "Signature", price: "$495", description: "Our complete inside-and-out reset, finished with durable ceramic protection.", features: ["Everything in Essential", "Chemical and clay decontamination", "Single-stage paint enhancement", "One-year ceramic coating", "Full interior deep clean"], featured: true },
  { number: "03", name: "Concours", price: "$1,295", description: "A multi-day correction and protection programme for significant cars and exacting owners.", features: ["Everything in Signature", "Multi-stage paint correction", "Five-year ceramic coating", "Wheel-face and glass coating", "First maintenance wash"] },
] as const;

export function Pricing() {
  return (
    <Section
      eyebrow="[04] / Packages"
      id="pricing"
      intro="These are honest starting points. Every booking begins with a complimentary condition assessment."
      title="Three depths of finish."
    >
      <div className="border-y border-carbon/20 lg:grid lg:grid-cols-3">
        {packages.map((item) => <PricingCard key={item.name} {...item} />)}
      </div>
      <p className="mt-4 font-mono text-[0.58rem] uppercase leading-5 tracking-[0.13em] text-carbon/45">Oversized vehicles, exceptional paint conditions and specialist requests are quoted after inspection.</p>
    </Section>
  );
}
