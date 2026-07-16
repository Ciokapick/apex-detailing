"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/Button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const navLinkStyles =
  "rounded-md px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white active:text-champagne-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        document.querySelector<HTMLButtonElement>("#mobile-menu-button")?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink-950/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          className="group flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne-400 focus-visible:ring-offset-4 focus-visible:ring-offset-ink-950"
          href="#top"
          aria-label="APEX Detailing — back to top"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full border border-champagne-400/45 bg-champagne-400/[0.08] text-[0.65rem] font-extrabold tracking-[-0.08em] text-champagne-300 transition-colors group-hover:bg-champagne-400/15"
          >
            AX
          </span>
          <span className="font-display text-sm font-bold tracking-[0.16em] text-white">
            APEX <span className="text-zinc-500">DETAILING</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          <ul className="flex items-center gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a className={navLinkStyles} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" size="sm">
            Book now
          </Button>
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
            {isOpen ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
          </Button>
        </div>
      </nav>

      <div
        className={[
          "absolute inset-x-0 top-full border-b border-white/10 bg-ink-950 px-5 shadow-2xl transition duration-200 ease-premium lg:hidden",
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
        id="mobile-menu"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 py-5">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                className="block rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white active:bg-white/10 active:text-champagne-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-champagne-400"
                href={link.href}
                onClick={closeMenu}
                ref={index === 0 ? firstLinkRef : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3">
            <Button href="#contact" fullWidth onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
              Book now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
