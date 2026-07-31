import Image from "next/image";
import {
  Sparkles,
  Droplets,
  SprayCan,
  Lightbulb,
  ShieldCheck,
  Home,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  sparkles: Sparkles,
  droplets: Droplets,
  spray: SprayCan,
  lightbulb: Lightbulb,
  shield: ShieldCheck,
  home: Home,
};

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Exterior care done right
          </h2>
          <p className="mt-3 text-muted">
            From streak-free windows to holiday lighting, GleamCo keeps Edmonton
            homes looking sharp year-round.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon=icons[service.icon];
            return (
              <article
                key={service.id}
                className="overflow-hidden rounded-xl border border-slate-200 bg-surface transition hover:border-sky-200 hover:shadow-md"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    quality={95}
                    unoptimized={
                      service.image.startsWith("/images/waterfed") ||
                      service.image.startsWith("/images/gutter") ||
                      service.image.startsWith("/images/vinyl")
                    }
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2 text-sm leading-relaxed text-navy/80"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
