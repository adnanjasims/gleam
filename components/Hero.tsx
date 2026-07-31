import Image from "next/image";
import { Phone, ShieldCheck, BadgeCheck, MapPin } from "lucide-react";
import { images, trustBadges } from "@/lib/content";

const badgeIcons = [ShieldCheck, BadgeCheck, MapPin];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-navy pt-24 sm:items-center"
    >
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/30"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 lg:px-8">
        <h1 className="animate-fade-up max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Premium Home Exterior Care in Edmonton
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
          Professional Window Cleaning, Gutter Clearing, Pressure Washing &amp;
          Holiday Lights. Spotless results, guaranteed satisfaction.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:bg-accent-hover hover:shadow-xl"
          >
            Get Your Free Quote
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            <Phone className="h-4 w-4" />
            Call/Text Us Today
          </a>
        </div>

        <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
          {trustBadges.map((badge, i) => {
            const Icon=badgeIcons[i] ?? BadgeCheck;
            return (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-slate-200"
              >
                <Icon className="h-4 w-4 shrink-0 text-sky-300" aria-hidden />
                {badge}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
