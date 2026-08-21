import Link from "next/link";
import { ArrowRight } from "@/components/icons/MiscIcons";

/** "Our <Services>" — 64px Poppins Bold, accent word in #05BEDD */
export function SectionHeading({
  lead,
  accent,
  trail,
  id,
  className = "",
}: {
  lead?: string;
  accent: string;
  trail?: string;
  id?: string;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={
        "text-center text-[clamp(2.25rem,1.5rem+2.6vw,4rem)] font-bold tracking-[0.02em] text-black " +
        className
      }
    >
      {lead}
      <span className="text-brand-cyan">{accent}</span>
      {trail}
    </h2>
  );
}

/** Shared "Learn more →" affordance */
export function LearnMore({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "group inline-flex items-center gap-3 text-[1.25rem] font-semibold text-black transition-colors hover:text-brand-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue " +
        className
      }
    >
      Learn more
      <ArrowRight className="h-3 w-8 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}
