"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { brand, pricingPlanOptions, serviceOptions } from "@/lib/content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  address: string;
  services: string[];
  pricingPlan: string;
  details: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  services: [],
  pricingPlan: "",
  details: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted,setSubmitted]=useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function toggleService(label: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(label)
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label],
    }));
  }

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    if (!values.email.trim()) next.email = "Please enter an email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email.";
    if (!values.address.trim())
      next.address = "Please enter your service address or neighborhood.";
    if (values.services.length === 0)
      next.services = "Select at least one service.";
    if (!values.pricingPlan)
      next.pricingPlan = "Please select a service plan.";
    return next;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setSubmitError("");
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setSubmitError(
          data?.error ||
            "Something went wrong sending your request. Please try again.",
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Request your free quote
            </h2>
            <p className="mt-3 text-muted">
              Tell us about your property and the services you need. We&apos;ll
              follow up with a clear, no-obligation quote.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-sm text-navy">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Phone / SMS</p>
                  <p className="text-muted">{brand.phoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted">{brand.emailDisplay}</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-navy">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Service hours</p>
                  <p className="text-muted">{brand.hours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-slate-200 bg-surface p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-start gap-3 py-8">
                <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden />
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Quote request received
                </h3>
                <p className="text-muted">
                  Thanks, {form.name.split(" ")[0] || "there"}! We&apos;ll review
                  your details and get back to you shortly. For faster help,
                  call or text us at {brand.phoneDisplay}.
                </p>
                <button
                  type="button"
                  className="mt-2 text-sm font-semibold text-accent hover:text-accent-hover"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(initial);
                    setErrors({});
                    setSubmitError("");
                  }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <Field
                  label="Full Name"
                  error={errors.name}
                  htmlFor="name"
                >
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={inputClass(errors.name)}
                    placeholder="Jane Smith"
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone Number"
                    error={errors.phone}
                    htmlFor="phone"
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className={inputClass(errors.phone)}
                      placeholder="(780) 555-0123"
                    />
                  </Field>
                  <Field
                    label="Email Address"
                    error={errors.email}
                    htmlFor="email"
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className={inputClass(errors.email)}
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field
                  label="Service Address / Neighborhood"
                  error={errors.address}
                  htmlFor="address"
                >
                  <input
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    value={form.address}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, address: e.target.value }))
                    }
                    className={inputClass(errors.address)}
                    placeholder="e.g. Windermere, SW Edmonton"
                  />
                </Field>

                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-navy">
                    Services Needed
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {serviceOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-navy transition hover:border-sky-200"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
                          checked={form.services.includes(option)}
                          onChange={() => toggleService(option)}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="mt-2 text-sm text-red-600">{errors.services}</p>
                  )}
                </fieldset>

                <fieldset>
                  <legend className="mb-2 text-sm font-semibold text-navy">
                    Service Frequency
                  </legend>
                  <div className="grid gap-2">
                    {pricingPlanOptions.map((option) => (
                      <label
                        key={option}
                        className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm text-navy transition hover:border-sky-200"
                      >
                        <input
                          type="radio"
                          name="pricingPlan"
                          className="h-4 w-4 border-slate-300 text-accent focus:ring-accent"
                          checked={form.pricingPlan === option}
                          onChange={() =>
                            setForm((f) => ({ ...f, pricingPlan: option }))
                          }
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.pricingPlan && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.pricingPlan}
                    </p>
                  )}
                </fieldset>

                <Field
                  label="Preferred Date / Additional Details"
                  htmlFor="details"
                >
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={form.details}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, details: e.target.value }))
                    }
                    className={inputClass()}
                    placeholder="Preferred dates, access notes, or anything else we should know..."
                  />
                </Field>

                {submitError && (
                  <p className="text-sm text-red-600" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-md bg-accent px-5 py-3.5 text-base font-semibold text-white transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Sending..." : "Request Free Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-md border bg-white px-3.5 py-2.5 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-accent focus:ring-2 focus:ring-sky-100 ${
    error ? "border-red-400" : "border-slate-200"
  }`;
}
