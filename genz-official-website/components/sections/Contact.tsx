"use client";

import Image from "next/image";
import { useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { WaveMark, DiamondCluster, TriangleMark } from "@/components/icons/Decor";

/** Floating-label field matching the Figma form styling */
function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  className = "",
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  className?: string;
  autoComplete?: string;
}) {
  return (
    <div className={"relative " + className}>
      <label
        htmlFor={name}
        className="absolute -top-[10px] left-[21px] z-10 bg-white px-[10px] text-[16px] font-medium tracking-[0.02em] text-black"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="h-[71px] w-full rounded-card bg-white px-[31px] text-[20px] font-medium text-ink shadow-field outline-none transition-shadow placeholder:text-placeholder focus:shadow-[0_0_0_2px_#05BEDD]"
      />
    </div>
  );
}

export function Contact() {
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-[100px]">
      <WaveMark className="pointer-events-none absolute bottom-[12%] left-[38%] hidden h-[96px] w-[123px] -rotate-[71deg] animate-float lg:block" />
      <DiamondCluster className="pointer-events-none absolute right-[6%] top-[18%] hidden h-[105px] w-[105px] animate-drift lg:block" />
      <TriangleMark className="pointer-events-none absolute bottom-[8%] left-[8%] hidden h-[106px] w-[106px] animate-drift lg:block" />

      <div className="shell grid items-start gap-12 lg:grid-cols-[568px_minmax(0,1fr)] lg:gap-[43px]">
        {/* ---------- left: heading + illustration ---------- */}
        <div>
          <h2 className="text-[clamp(2.5rem,1.7rem+3vw,4.5rem)] font-bold tracking-[-0.02em] text-black">
            Let&rsquo;s <span className="text-brand-cyan">Talk</span>
          </h2>
          <div className="relative mt-8 aspect-[568/556] w-full">
            <Image
              src="/assets/contact-illustration.png"
              alt="A GenZ DevLabs support engineer taking a call"
              fill
              sizes="(max-width: 1024px) 100vw, 568px"
              className="object-contain"
            />
          </div>
        </div>

        {/* ---------- right: form ---------- */}
        <div className="rounded-card bg-white p-6 shadow-panel sm:p-[28px]">
          {sent ? (
            <div
              role="status"
              className="flex min-h-[560px] flex-col items-center justify-center text-center"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-4xl text-white">
                ✓
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-black">
                Thanks — we&rsquo;ve got it.
              </h3>
              <p className="mt-2 max-w-sm text-muted">
                Someone from the GenZ DevLabs team will get back to you within
                one business day.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-brand-cyan underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: wire to your form endpoint / email service
                setSent(true);
              }}
              className="grid gap-x-[24px] gap-y-[52px] sm:grid-cols-2"
            >
              <Field
                label="Your name*"
                name="name"
                placeholder="Full name"
                autoComplete="name"
              />
              <Field
                label="Company*"
                name="company"
                placeholder="Company name"
                autoComplete="organization"
              />
              <Field
                label="Phone number*"
                name="phone"
                type="tel"
                placeholder="(+94)"
                autoComplete="tel"
              />
              <Field
                label="Location*"
                name="location"
                placeholder="Country/state"
                autoComplete="country-name"
              />
              <Field
                label="E-Mail*"
                name="email"
                type="email"
                placeholder="example@email.com"
                autoComplete="email"
                className="sm:col-span-2"
              />

              <div className="relative sm:col-span-2">
                <label
                  htmlFor="description"
                  className="absolute -top-[10px] left-[21px] z-10 bg-white px-[10px] text-[16px] font-medium tracking-[0.02em] text-black"
                >
                  Description* (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  maxLength={700}
                  onChange={(e) => setCount(e.target.value.length)}
                  placeholder="Share few details about your project..."
                  className="h-[162px] w-full resize-none rounded-card bg-white px-[31px] pb-10 pt-6 text-[20px] font-medium text-ink shadow-field outline-none transition-shadow placeholder:text-placeholder focus:shadow-[0_0_0_2px_#05BEDD]"
                />
                <span className="pointer-events-none absolute bottom-4 left-[31px] text-[20px] font-medium text-placeholder">
                  {count}/700
                </span>
              </div>

              <GradientButton type="submit" className="h-[54px] w-full sm:col-span-2">
                Submit
              </GradientButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
