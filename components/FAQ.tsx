"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [openIndex,setOpenIndex]=useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-surface/80"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="font-display text-base font-semibold text-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition ${
                      open ? "rotate-180 text-accent" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {open && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
