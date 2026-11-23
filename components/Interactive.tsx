"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/* Sticky top bar: transparent over the hero, solid once scrolled. */
export function StickyNav({ logo }: { logo: React.ReactNode }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-500 ${
        solid ? "border-b border-line bg-night/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center gap-6 md:h-20">
        {logo}
        <nav className="ml-auto hidden items-center gap-6 whitespace-nowrap text-[0.6875rem] xl:gap-8 font-semibold uppercase tracking-[0.24em] text-mauve lg:flex">
          <a href="#program" className="transition-colors hover:text-champagne">What’s inside</a>
          <a href="#founders" className="transition-colors hover:text-champagne">Founders</a>
          <a href="#lectures" className="transition-colors hover:text-champagne">Lectures</a>
          <a href="#join" className="transition-colors hover:text-champagne">How to join</a>
          <a href="#faq" className="transition-colors hover:text-champagne">FAQ</a>
        </nav>
        <a
          href={site.joinUrl}
          className={`btn-gold ml-auto whitespace-nowrap !px-5 !py-3 lg:ml-0 ${solid ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-500`}
          tabIndex={solid ? 0 : -1}
        >
          Join now
        </a>
      </div>
    </header>
  );
}

/* Lecture dates, Pacific Time only (as in the brief). */
export function LectureDates() {
  const pt = (d: string, o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { ...o, timeZone: "America/Los_Angeles" }).format(new Date(d));

  const badge = (cls: string) => (
    <span
      className={`${cls} whitespace-nowrap rounded-full border border-burgundy/60 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-burgundy`}
    >
      First lecture
    </span>
  );

  return (
    <ol className="relative">
      {/* timeline rail */}
      <span className="absolute bottom-[3.25rem] left-0 top-[3.25rem] w-px bg-burgundy/45" aria-hidden="true" />
      {site.lecture.datesUtc.map((d, i) => {
        const first = i === 0;
        return (
          <li key={d} className={`relative ${first ? "" : "pl-6 sm:pl-8"}`}>
            <span
              className="absolute left-[-5px] top-1/2 size-[11px] -translate-y-1/2 rounded-full bg-burgundy"
              aria-hidden="true"
            />
            <div
              className={`grid grid-cols-[3.5rem_1fr] items-center gap-4 py-5 sm:grid-cols-[4.5rem_1fr] sm:gap-6 ${
                first
                  ? "relative rounded-[2rem] border border-burgundy/45 pl-6 pr-5 pt-7 sm:pl-8 sm:pr-6"
                  : "border-b border-line-burgundy"
              }`}
            >
              <div className="text-center">
                <div className="eyebrow !tracking-[0.2em] !text-burgundy-ink">{pt(d, { month: "short" })}</div>
                <div className="font-display text-5xl font-light leading-none text-burgundy">{pt(d, { day: "numeric" })}</div>
              </div>
              <div className="border-l border-line-burgundy pl-4 sm:pl-6">
                <div className="font-display text-2xl text-burgundy-ink">
                  {pt(d, { weekday: "long" })}, {pt(d, { month: "long", day: "numeric", year: "numeric" })}
                </div>
                <div className="mt-1 text-sm text-burgundy-soft">10:00 AM PT</div>
                              </div>
              {first ? badge("absolute -top-3.5 right-6 bg-cream") : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/* Promo code with copy button. */
export function CopyCode() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-stretch overflow-hidden rounded-[0.625rem] border border-dashed border-champagne/60">
      <span className="flex flex-1 items-center px-5 py-3 font-monument text-lg tracking-[0.14em] text-champagne-light">
        {site.promoCode}
      </span>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard?.writeText(site.promoCode).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          });
        }}
        className="border-l border-dashed border-champagne/60 px-5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-champagne transition-colors hover:bg-champagne/10"
        aria-label={`Copy code ${site.promoCode}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
