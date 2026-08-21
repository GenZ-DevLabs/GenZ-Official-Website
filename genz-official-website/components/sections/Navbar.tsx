"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLockup } from "@/components/icons/Logo";
import { ChevronDown } from "@/components/icons/MiscIcons";
import { GradientButton } from "@/components/ui/GradientButton";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);
  const [active, setActive] = useState("#home");

  /* Highlight the nav item whose section is in view */
  useEffect(() => {
    const ids = ["home", "services", "projects", "about"];
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => obs.observe(el as Element));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[77px] bg-white shadow-nav">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 lg:px-[119px]"
      >
        <Link
          href="#home"
          className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
        >
          <LogoLockup />
          <span className="sr-only">GenZ DevLabs — home</span>
        </Link>

        {/* ---------- desktop ---------- */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[61px] lg:flex">
          {NAV_LINKS.map((l) =>
            l.dropdown ? (
              <li
                key={l.label}
                className="relative"
                onMouseEnter={() => setServices(true)}
                onMouseLeave={() => setServices(false)}
              >
                <button
                  type="button"
                  aria-expanded={services}
                  aria-haspopup="true"
                  onClick={() => setServices((v) => !v)}
                  className="flex items-center gap-2 whitespace-nowrap py-2 text-[20px] font-bold text-black transition-colors hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                >
                  {l.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      services ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute left-1/2 top-full w-[585px] max-w-[90vw] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    services
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  }`}
                >
                  <ul className="rounded-[19.688px] bg-white p-8 shadow-card">
                    {SERVICE_LINKS.map((s) => (
                      <li key={s.label}>
                        <Link
                          href={s.href}
                          onClick={() => setServices(false)}
                          className="block rounded-lg px-4 py-2 text-[23.625px] font-bold text-black transition-colors hover:text-brand-cyan"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="relative block whitespace-nowrap py-2 text-[20px] font-bold text-black transition-colors hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                  aria-current={active === l.href ? "page" : undefined}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-1 rounded-full bg-brand-teal transition-all duration-300 ${
                      active === l.href ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <GradientButton href="#contact" className="h-[54px] w-[231px]">
            Lets Talk
          </GradientButton>
        </div>

        {/* ---------- mobile trigger ---------- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-lg lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-transform duration-200 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-6 rounded-full bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* ---------- mobile panel ---------- */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-77px)] overflow-y-auto border-t border-black/5 bg-white px-6 pb-10 pt-4 shadow-nav lg:hidden"
      >
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg py-3 text-xl font-bold text-black"
              >
                {l.label}
              </Link>
              {l.dropdown && (
                <ul className="mb-2 ml-4 border-l-2 border-brand-cyan/30 pl-4">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.label}>
                      <Link
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-base font-semibold text-muted"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <GradientButton
          href="#contact"
          className="mt-4 w-full"
        >
          Lets Talk
        </GradientButton>
      </div>
    </header>
  );
}
