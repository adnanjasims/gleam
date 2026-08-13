import { ExternalLink, Star } from "lucide-react";
import { reviewsSummary, testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            What our customers are saying
          </h2>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-muted">
            <span className="inline-flex items-center gap-1 font-semibold text-navy">
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
              {reviewsSummary.rating.toFixed(1)} on {reviewsSummary.source}
            </span>
            <a
              href={reviewsSummary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-hover"
            >
              See our Google reviews
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review) => (
            <blockquote
              key={review.name}
              className="flex flex-col border-t border-slate-200 pt-6"
            >
              <div
                className="flex gap-0.5"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                    aria-hidden
                  />
                ))}
              </div>
              {review.text ? (
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/85">
                  &ldquo;{review.text}&rdquo;
                </p>
              ) : (
                <div className="mt-3 flex-1" aria-hidden />
              )}
              <footer className="mt-4 text-sm font-semibold text-navy">
                {review.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
