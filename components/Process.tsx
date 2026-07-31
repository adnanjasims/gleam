import Image from "next/image";
import { images, processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={images.process}
              alt="Water-fed pole cleaning residential windows from the ground"
              fill
              quality={95}
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
              Glass, sills, and frames-cleaned with care using water-fed poles
              and soft nylon brushes.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Our Process
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How we get windows truly spotless
            </h2>
            <p className="mt-3 text-muted">
              From the first walkthrough to the final rinse, every step is built
              around thorough cleaning and gentle care for your home.
            </p>

            <ol className="mt-8 space-y-6">
              {processSteps.map((item) => (
                <li key={item.step} className="flex gap-4">
                  <span className="font-display text-sm font-bold tabular-nums text-accent">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
