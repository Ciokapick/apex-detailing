import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";

const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=85";

export function Hero() {
  return (
    <section
      className="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-ink-950"
      id="top"
    >
      <Image
        alt="Black sports car on an open road at dusk"
        className="object-cover object-[62%_center]"
        fill
        priority
        sizes="100vw"
        src={heroImage}
      />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/15" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-sm">
            <ShieldCheck aria-hidden="true" className="text-champagne-400" size={15} />
            Precision care. Lasting protection.
          </div>

          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Your car, at its absolute best.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Studio-grade detailing and ceramic protection for drivers who notice every detail.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              Book your detail
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href="#work" size="lg" variant="secondary">
              View our work
              <ArrowDown aria-hidden="true" size={18} />
            </Button>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-3 gap-5 border-t border-white/15 pt-7 sm:gap-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Experience</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">12+ years</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Vehicles</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">2,400+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-zinc-500">Rating</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white sm:text-xl">5.0 / 5</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
