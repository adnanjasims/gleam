import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="border-y border-sky-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            {about.headline}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
