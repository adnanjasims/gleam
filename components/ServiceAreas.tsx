import { MapPin } from "lucide-react";
import { serviceAreas } from "@/lib/content";

export function ServiceAreas() {
  return (
    <section id="areas" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Service Areas
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Proudly serving Edmonton &amp; surrounding areas
            </h2>
            <p className="mt-3 text-muted">
              Based in {serviceAreas.hub}, we bring reliable exterior cleaning
              across the Capital Region.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-50 px-4 py-3 text-sm font-semibold text-navy ring-1 ring-sky-100">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              Primary hub: {serviceAreas.hub}
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {serviceAreas.surrounding.map((area) => (
              <li
                key={area}
                className="rounded-lg border border-slate-200 bg-surface px-4 py-4 text-center text-sm font-semibold text-navy"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
