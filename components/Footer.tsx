const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-10">
        <div>
          <a
            className="rounded-md font-display text-sm font-bold tracking-[0.16em] text-white transition-colors hover:text-champagne-300 active:text-champagne-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
            href="#top"
          >
            APEX <span className="text-zinc-500">DETAILING</span>
          </a>
          <p className="mt-3 text-sm text-zinc-600">
            Precision detailing and paint protection in Austin, Texas.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="rounded text-sm text-zinc-500 transition-colors hover:text-white active:text-champagne-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-zinc-700">© 2026 APEX Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
