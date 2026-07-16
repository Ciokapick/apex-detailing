import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/Button";

const contactLinks = [
  { term: "Call", detail: "+1 555 014 2098", href: "tel:+15550142098" },
  { term: "Write", detail: "studio@apexdetailing.co", href: "mailto:studio@apexdetailing.co" },
  { term: "Visit", detail: "1280 Motor Row, Austin TX", href: "https://maps.google.com/?q=1280+Motor+Row+Austin+TX" },
] as const;

export function Contact() {
  return (
    <section className="image-noise relative isolate min-h-[46rem] overflow-hidden bg-carbon" id="contact">
      <Image
        alt="Black luxury SUV prepared in the APEX detailing studio"
        className="object-cover object-[68%_center] opacity-50"
        fill
        sizes="100vw"
        src="https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?auto=format&fit=crop&w=2400&q=86"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,10,.96)_0%,rgba(10,11,10,.72)_45%,rgba(10,11,10,.18)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/35" />

      <div className="relative mx-auto flex min-h-[46rem] max-w-[100rem] flex-col px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-8 border-t border-paper/20 pt-5 lg:grid-cols-12">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-paper/50 lg:col-span-3">[05] / Appointment</p>
          <p className="max-w-xs text-sm leading-6 text-paper/60 lg:col-span-3 lg:col-start-10">Tell us the car, its condition and the finish you want. We’ll reply with a clear recommendation.</p>
        </div>

        <div className="my-auto grid items-center gap-8 py-20 lg:grid-cols-12">
          <h2 className="text-balance text-6xl font-medium leading-[0.78] tracking-[-0.075em] text-paper sm:text-8xl lg:col-span-9 lg:text-[9rem]">Book the studio.</h2>
          <div className="lg:col-span-3 lg:justify-self-center">
            <Button aria-label="Book your slot by email" href="mailto:studio@apexdetailing.co?subject=APEX%20studio%20appointment" size="circle">
              Book your slot <ArrowUpRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>

        <address className="grid border-t border-paper/20 pt-5 not-italic sm:grid-cols-3">
          {contactLinks.map((item) => (
            <div className="mb-5" key={item.term}>
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.15em] text-paper/35">{item.term}</p>
              <a className="mt-2 inline-block rounded-sm text-sm text-paper/75 transition-colors hover:text-signal-500 active:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon" href={item.href}>{item.detail}</a>
            </div>
          ))}
        </address>
      </div>
    </section>
  );
}
