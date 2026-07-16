import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";

const heroImage = "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?auto=format&fit=crop&w=2400&q=88";

export function Hero() {
  return (
    <section className="image-noise relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden bg-carbon" id="top">
      <Image
        alt="Black performance car under detailing studio inspection lights"
        className="object-cover object-[55%_58%] opacity-75"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,10,.82)_0%,rgba(10,11,10,.18)_48%,rgba(10,11,10,.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/45 via-transparent to-carbon/95" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-[100rem] flex-col px-5 pb-5 pt-8 sm:px-8 sm:pb-8 lg:px-12 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <p className="font-mono text-[0.62rem] uppercase leading-5 tracking-[0.16em] text-paper/60 lg:col-span-3">
            [01] / Surface engineering<br />Austin, Texas
          </p>
          <div className="lg:col-span-5 lg:col-start-7">
            <h1 className="text-balance text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-paper sm:text-5xl lg:text-6xl">
              Paintwork, corrected to its purest form.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-6 text-paper/65 sm:text-base sm:leading-7">
              Precision detailing and ceramic protection for cars that deserve more than a quick shine.
            </p>
          </div>
          <div className="lg:col-span-1 lg:col-start-12 lg:justify-self-end">
            <Button aria-label="Book the studio" href="#contact" size="circle">
              Book studio <ArrowDownRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>

        <div className="mt-auto pt-24">
          <p aria-hidden="true" className="hero-word select-none whitespace-nowrap font-display font-medium text-paper">APEX</p>
          <dl className="grid grid-cols-2 border-t border-paper/20 pt-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              ["Studio", "Climate controlled"],
              ["Access", "By appointment"],
              ["Hours", "Mon — Sat"],
            ].map(([term, detail]) => (
              <div className="mb-3 lg:col-span-1" key={term}>
                <dt className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-paper/35">{term}</dt>
                <dd className="mt-1 text-xs text-paper/75">{detail}</dd>
              </div>
            ))}
            <p className="col-span-2 self-end text-right font-mono text-[0.58rem] uppercase tracking-[0.15em] text-paper/35 sm:col-span-3 lg:col-span-3">
              Scroll to inspect ↓
            </p>
          </dl>
        </div>
      </div>
    </section>
  );
}
