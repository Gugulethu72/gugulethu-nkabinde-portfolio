
"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-bg-light/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-6 py-4 md:px-10"
        aria-label="Main navigation"
      >
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Personal Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Gugulethu Nkabinde — Home"
            className="shrink-0"
          >
            <img
              src="/Gugulethu Logo tr-01.png"
              alt="Gugulethu Nkabinde"
              className="h-auto w-32 object-contain sm:w-40 md:w-44"
            />
          </a>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden bg-black px-5 py-2.5 text-[11px] text-bg-light transition-colors hover:bg-accent md:inline-block"
          >
            Let&apos;s work together
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span
              className={`h-[1.5px] w-6 bg-black transition-transform ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-6 bg-black transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="mt-4 hidden justify-center md:flex">
          <ul className="flex items-center gap-8">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[11px] text-black transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-black/10 bg-bg-light px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="inline-block py-1 font-body text-sm text-black transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-block bg-black px-5 py-3 text-[11px] text-bg-light transition-colors hover:bg-accent"
              >
                Let&apos;s work together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
