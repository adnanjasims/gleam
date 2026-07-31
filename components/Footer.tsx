import Image from "next/image";
import { brand, navLinks, serviceAreas } from "@/lib/content";

export function Footer() {
  const year=new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#home" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={brand.fullName}
              width={56}
              height={56}
              className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/15"
            />
            <span>
              <span className="block font-display text-xl font-bold text-white">
                {brand.shortName}
              </span>
              <span className="mt-0.5 block text-xs font-medium uppercase tracking-[0.14em] text-sky-300">
                {brand.tagline}
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Premium exterior cleaning and maintenance for homes across Edmonton
            and the Capital Region.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Service areas
          </p>
          <ul className="mt-4 space-y-1 text-sm text-slate-400">
            <li className="font-medium text-slate-200">{serviceAreas.hub}</li>
            {serviceAreas.surrounding.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <p>
            We respect your privacy. Contact details submitted through this site
            are used only to respond to your quote request.
          </p>
        </div>
      </div>
    </footer>
  );
}
