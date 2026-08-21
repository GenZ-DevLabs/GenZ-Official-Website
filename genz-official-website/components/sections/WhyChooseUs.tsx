import { SectionHeading } from "@/components/ui/Bits";
import { ReasonIcon } from "@/components/icons/MiscIcons";
import { REASONS } from "@/lib/content";

const GRADIENTS = [
  "bg-brand-card",
  "bg-brand-card-alt",
  "bg-brand-card",
] as const;

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-[100px]">
      <SectionHeading lead="Why " accent="Choose" trail=" Us" />

      <ul className="shell mt-[110px] grid gap-5 md:grid-cols-3">
        {REASONS.map((r, i) => (
          <li
            key={r.label}
            className={`group flex h-[372px] flex-col items-center justify-center rounded-card px-6 transition-transform duration-300 hover:-translate-y-2 ${GRADIENTS[i]}`}
          >
            <span className="flex h-[85px] w-[85px] items-center justify-center rounded-full bg-black shadow-[0_0_28px_6px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110">
              <ReasonIcon name={r.icon} className="h-[46px] w-[46px]" />
            </span>
            <h3 className="mt-[52px] text-center text-[clamp(1.375rem,1.1rem+0.8vw,2rem)] font-semibold leading-[1.42] text-black">
              {r.label}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
