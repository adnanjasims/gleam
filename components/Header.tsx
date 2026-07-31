"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open,setOpen]=useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={brand.fullName}
            width={56}
            height={56}
            className="h-12 w-12 rounded-lg object-cover shadow-sm ring-1 ring-slate-200/80 sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-lg font-bold tracking-tight text-navy">
              {brand.shortName}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              {brand.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-4 lg:flex lg:gap-5"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-navy/80 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover md:inline-flex"
          >
            Get a Free Quote
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-navy transition hover:bg-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-slate-100 bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-navy hover:bg-surface hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-base font-semibold text-white hover:bg-accent-hover"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
