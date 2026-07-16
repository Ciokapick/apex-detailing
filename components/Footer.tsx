const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

const linkStyles = "rounded-sm font-mono text-[0.6rem] uppercase tracking-[0.14em] text-paper/45 transition-colors hover:text-paper active:text-signal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-carbon">
      <div className="mx-auto max-w-[100rem] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <a className="group flex items-center gap-3 rounded-sm text-2xl font-medium tracking-[-0.05em] text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 lg:col-span-5" href="#top">
            <span aria-hidden="true" className="size-2 rounded-full bg-signal-500 transition-transform group-hover:scale-150" /> APEX
          </a>
          <nav aria-label="Footer navigation" className="lg:col-span-4">
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {footerLinks.map((link) => <li key={link.href}><a className={linkStyles} href={link.href}>{link.label}</a></li>)}
            </ul>
          </nav>
          <p className="font-mono text-[0.58rem] uppercase leading-5 tracking-[0.13em] text-paper/30 lg:col-span-3 lg:text-right">© 2026 APEX Surface Studio<br />Fictional portfolio concept</p>
        </div>
      </div>
    </footer>
  );
}
