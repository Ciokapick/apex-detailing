"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";

const links = [
  { label: "Services", href: "#services", number: "01" },
  { label: "Work", href: "#work", number: "02" },
  { label: "Pricing", href: "#pricing", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
] as const;

const navLinkStyles =
  "rounded-sm px-2 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-paper/60 transition-colors hover:text-paper active:text-signal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-carbon";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) firstLinkRef.current?.focus();

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        document.querySelector<HTMLButtonElement>("#mobile-menu-button")?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-paper/10 bg-carbon/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[4.25rem] max-w-[100rem] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a
          aria-label="APEX Detailing — back to top"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-4 focus-visible:ring-offset-carbon"
          href="#top"
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-signal-500 transition-transform group-hover:scale-150" />
          <span className="font-display text-sm font-semibold tracking-[-0.02em] text-paper">
            APEX <span className="font-mono text-[0.58rem] font-normal uppercase tracking-[0.17em] text-paper/40">Surface Studio</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a className={navLinkStyles} href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <Button href="#contact" size="sm">Book studio</Button>
        </div>

        <div className="lg:hidden">
          <Button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            id="mobile-menu-button"
            onClick={() => setIsOpen((open) => !open)}
            size="icon"
            variant="ghost"
          >
            {isOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </Button>
        </div>
      </nav>

      <div
        aria-hidden={!isOpen}
        className={`absolute inset-x-0 top-full border-b border-paper/10 bg-carbon px-5 transition duration-300 ease-premium lg:hidden ${isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}
        id="mobile-menu"
      >
        <ul className="mx-auto max-w-[100rem] py-4">
          {links.map((link, index) => (
            <li className="border-t border-paper/10" key={link.href}>
              <a
                className="group flex items-center justify-between rounded-sm py-4 text-2xl font-medium tracking-[-0.04em] text-paper transition-colors hover:text-signal-500 active:text-signal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-500"
                href={link.href}
                onClick={() => setIsOpen(false)}
                ref={index === 0 ? firstLinkRef : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
                <span className="font-mono text-[0.6rem] tracking-[0.15em] text-paper/35 group-hover:text-signal-500">[{link.number}]</span>
              </a>
            </li>
          ))}
          <li className="border-t border-paper/10 py-4">
            <Button href="#contact" fullWidth onClick={() => setIsOpen(false)} tabIndex={isOpen ? 0 : -1}>Book studio</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
