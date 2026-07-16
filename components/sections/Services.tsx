import { Armchair, CircleDotDashed, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";

import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

type Service = { title: string; description: string; icon: LucideIcon; number: string };

const services: Service[] = [
  { title: "Exterior detail", description: "A measured wash, decontamination and finish process that restores clarity without introducing new defects.", icon: Sparkles, number: "01" },
  { title: "Ceramic protection", description: "Professional-grade coatings applied in a controlled environment for depth, slickness and easier maintenance.", icon: ShieldCheck, number: "02" },
  { title: "Paint correction", description: "Panel-by-panel machine polishing that removes swirls while respecting the integrity of your clear coat.", icon: CircleDotDashed, number: "03" },
  { title: "Interior reset", description: "Material-specific care for leather, fabric, carpet and trim — including every seam most studios miss.", icon: Armchair, number: "04" },
];

export function Services() {
  return (
    <Section
      eyebrow="[02] / Services"
      id="services"
      intro="No conveyor belts and no rushed handoffs. One vehicle, one technician, one uncompromising standard."
      title="The finish is engineered."
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <figure className="image-noise relative min-h-[34rem] overflow-hidden bg-carbon lg:col-span-7 lg:min-h-[49rem]">
          <Image
            alt="Detailing technician applying protective film around a car headlight"
            className="object-cover object-center transition duration-700 ease-premium hover:scale-[1.025]"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?auto=format&fit=crop&w=1800&q=86"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-carbon/80 px-4 py-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-paper backdrop-blur-sm sm:px-5">
            <span>Film / edge finishing</span><span>APX — 021</span>
          </figcaption>
        </figure>

        <div className="self-end lg:col-span-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} number={service.number}>
                <div className="grid grid-cols-[1fr_auto] gap-5">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em] text-carbon sm:text-2xl">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-carbon/60">{service.description}</p>
                  </div>
                  <Icon aria-hidden="true" className="mt-1 text-carbon/35 transition-colors group-hover:text-signal-500" size={20} strokeWidth={1.5} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid bg-mineral-500 sm:grid-cols-3 lg:ml-[25%]">
        {[
          ["01", "Assess", "Light, paint depth, condition"],
          ["02", "Correct", "The least aggressive route"],
          ["03", "Protect", "A system matched to use"],
        ].map(([number, title, copy]) => (
          <div className="border-carbon/15 p-6 sm:border-l sm:p-7" key={number}>
            <p className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-carbon/50">[{number}] / {title}</p>
            <p className="mt-7 max-w-[12rem] text-sm leading-5 text-carbon">{copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
