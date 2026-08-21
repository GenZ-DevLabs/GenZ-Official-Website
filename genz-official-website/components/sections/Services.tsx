import { SectionHeading, LearnMore } from "@/components/ui/Bits";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import {
  StackedSquares,
  WaveMark,
  TriangleMark,
} from "@/components/icons/Decor";
import { SERVICES } from "@/lib/content";

function ServiceCard({
  service,
  className = "",
}: {
  service: (typeof SERVICES)[number];
  className?: string;
}) {
  return (
    <article
      className={
        "group relative w-full max-w-[375px] rounded-card bg-white px-[56px] pb-[56px] pt-[86px] text-center shadow-card transition-transform duration-300 hover:-translate-y-2 focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-brand-blue " +
        className
      }
    >
      {/* icon breaks out above the card, as in the design */}
      <span className="absolute -top-[62px] left-1/2 flex h-[124px] w-[150px] -translate-x-1/2 items-end justify-center">
        <ServiceIcon
          name={service.icon}
          className="h-full w-full drop-shadow-[0_3px_4px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105"
        />
      </span>

      <h3 className="text-[clamp(1.5rem,1.2rem+0.7vw,2rem)] font-semibold leading-[1.2] text-black">
        {service.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>

      <p className="mt-6 text-[1.25rem] font-medium leading-[1.35] text-muted">
        {service.body}
      </p>

      <span className="mt-8 inline-flex">
        {/* stretched link makes the whole card clickable without nesting anchors */}
        <LearnMore
          href={service.href}
          className="after:absolute after:inset-0 after:rounded-card after:content-['']"
        />
      </span>
    </article>
  );
}

export function Services() {
  const [c1, c2, c3, c4] = SERVICES;

  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-[100px]">
      {/* decorative marks */}
      <StackedSquares
        className="pointer-events-none absolute left-[3%] top-[36px] z-20 hidden h-[107px] w-[107px] animate-drift lg:block"
      />
      <WaveMark className="pointer-events-none absolute right-[6%] top-[229px] z-20 hidden h-[126px] w-[116px] animate-float lg:block" />
      <TriangleMark className="pointer-events-none absolute bottom-[130px] left-[7%] z-20 hidden h-[136px] w-[140px] animate-drift lg:block" />

      <SectionHeading lead="Our " accent="Services" />

      {/* ---------- desktop: staggered diagonal layout ---------- */}
      <div className="relative mx-auto mt-[130px] hidden w-[935px] lg:block">
        {/* the big soft panel behind the cards */}
        <div
          aria-hidden="true"
          className="absolute -left-[155px] top-[192px] h-[1213px] w-[1300px] rounded-card bg-white shadow-card"
        />
        <div className="relative grid grid-cols-2 gap-x-[185px]">
          <div className="flex flex-col gap-y-[79px]">
            <ServiceCard service={c1} />
            <ServiceCard service={c3} />
          </div>
          <div className="mt-[219px] flex flex-col gap-y-[70px]">
            <ServiceCard service={c2} />
            <ServiceCard service={c4} />
          </div>
        </div>
      </div>

      {/* ---------- mobile / tablet ---------- */}
      <div className="shell mt-24 grid gap-y-[110px] sm:grid-cols-2 sm:gap-x-10 lg:hidden">
        {SERVICES.map((s) => (
          <ServiceCard key={s.title.join(" ")} service={s} className="mx-auto" />
        ))}
      </div>
    </section>
  );
}
