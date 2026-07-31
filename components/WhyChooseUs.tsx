import {
  Droplets,
  ShieldCheck,
  HeartHandshake,
  BadgeDollarSign,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/content";

const icons: Record<(typeof whyChooseUs)[number]["icon"], LucideIcon> = {
  droplets: Droplets,
  shield: ShieldCheck,
  heart: HeartHandshake,
  badge: BadgeDollarSign,
};

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Why Choose Us
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Why choose GleamCo?
          </h2>
          <p className="mt-3 text-muted">
            Professional results with transparent pricing and care for your
            property.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon=icons[item.icon];
            return (
              <div key={item.title} className="flex flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-accent shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
