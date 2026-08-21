import Link from "next/link";

type Common = {
  children: React.ReactNode;
  className?: string;
};

/** Filled CTA — linear-gradient(259.23deg, #3294F4 15.65%, #05BEDD 90.47%) */
export function GradientButton({
  href,
  type,
  children,
  className = "",
}: Common & { href?: string; type?: "button" | "submit" }) {
  const cls =
    "inline-flex items-center justify-center rounded-card bg-brand-gradient px-6 py-3 text-[clamp(1rem,0.9rem+0.3vw,1.25rem)] font-bold text-white shadow-[0_6px_18px_-6px_rgba(50,148,244,.7)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-8px_rgba(50,148,244,.8)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue active:translate-y-0 " +
    className;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}

/** Outlined CTA — 4px #34AAFF border with gradient label */
export function OutlineButton({
  href,
  children,
  className = "",
}: Common & { href: string }) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-card border-4 border-brand-sky px-6 py-2 shadow-outline transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue " +
        className
      }
    >
      <span className="bg-gradient-to-r from-brand-sky to-brand-teal bg-clip-text text-[clamp(1rem,0.9rem+0.3vw,1.25rem)] font-bold tracking-[0.5px] text-transparent">
        {children}
      </span>
    </Link>
  );
}
