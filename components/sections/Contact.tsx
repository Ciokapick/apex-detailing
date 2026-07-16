import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/Button";

const contactItems = [
  { icon: Phone, label: "(555) 014-2098", href: "tel:+15550142098" },
  { icon: Mail, label: "studio@apexdetailing.co", href: "mailto:studio@apexdetailing.co" },
  { icon: MapPin, label: "1280 Motor Row, Austin, TX", href: "#contact" },
  { icon: Clock3, label: "Mon–Sat · By appointment", href: "#contact" },
] as const;

export function Contact() {
  return (
    <section className="bg-ink-900" id="contact">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="overflow-hidden rounded-3xl border border-champagne-400/20 bg-[radial-gradient(circle_at_top_right,rgba(217,180,109,0.13),transparent_40%)] p-6 shadow-glow sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne-400">
                Ready when you are
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Give your car the finish it deserves.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Tell us about your vehicle and what you want to improve. We’ll recommend the right process—nothing more.
              </p>
              <div className="mt-8">
                <Button href="mailto:studio@apexdetailing.co?subject=Detailing%20appointment" size="lg">
                  Book your slot
                  <ArrowRight aria-hidden="true" size={18} />
                </Button>
              </div>
            </div>

            <address className="grid gap-4 border-t border-white/10 pt-8 not-italic lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    className="group flex items-center gap-3 rounded-lg text-sm text-zinc-400 transition-colors hover:text-white active:text-champagne-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-900"
                    href={item.href}
                    key={item.label}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/[0.05] text-champagne-400 transition-colors group-hover:bg-champagne-400/10">
                      <Icon aria-hidden="true" size={16} />
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
