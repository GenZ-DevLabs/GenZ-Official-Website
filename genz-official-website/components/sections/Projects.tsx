import Image from "next/image";
import { SectionHeading, LearnMore } from "@/components/ui/Bits";
import { DiamondCluster, RibbonStripes } from "@/components/icons/Decor";
import { PROJECTS } from "@/lib/content";

type Project = (typeof PROJECTS)[number];

/**
 * The Figma exports already carry their own rounded corners and drop shadow
 * inside a transparent 388x388 bleed, so this renders them bare — no extra
 * radius, background or shadow, or you get the treatment twice.
 */
function Thumb({
  src,
  alt,
  className = "",
  sizes = "388px",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={"relative " + className}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
    </div>
  );
}

/** 820 × 389 card — thumbnail on one side, copy on the other */
function HorizontalCard({
  project,
  side,
}: {
  project: Project;
  side: "left" | "right";
}) {
  return (
    <article className="group relative h-[389px] w-[820px]">
      <div
        className={`absolute top-0 h-[389px] w-[710px] rounded-card bg-white shadow-card ${
          side === "left" ? "right-0" : "left-0"
        }`}
      />
      <Thumb
        src={project.image}
        alt={`${project.title} preview`}
        className={`absolute top-[1px] h-[388px] w-[388px] ${
          side === "left" ? "left-[-36px]" : "left-[468px]"
        }`}
      />
      <div
        className={`absolute top-0 flex h-full w-[404px] flex-col items-center justify-center px-4 text-center ${
          side === "left" ? "right-[56px]" : "left-[56px]"
        }`}
      >
        <h3 className="text-[2rem] font-semibold leading-[1.2] text-black">
          {project.title}
        </h3>
        <p className="mt-6 text-[1.25rem] font-medium leading-[1.35] text-muted">
          {project.body}
        </p>
        <span className="mt-8">
          <LearnMore
            href={project.href}
            className="after:absolute after:inset-0 after:content-['']"
          />
        </span>
      </div>
    </article>
  );
}

/** 389 × 820 card — thumbnail sits on top, copy below */
function VerticalCard({ project }: { project: Project }) {
  return (
    <article className="group relative h-[820px] w-[389px]">
      <div className="absolute left-0 top-[110px] h-[710px] w-full rounded-card bg-white shadow-card" />
      <Thumb
        src={project.image}
        alt={`${project.title} preview`}
        className="absolute left-[2px] top-[-36px] h-[388px] w-[388px]"
      />
      <div className="absolute inset-x-0 top-[366px] flex flex-col items-center px-[38px] text-center">
        <h3 className="text-[2rem] font-semibold leading-[1.42] text-black">
          {project.title}
        </h3>
        <p className="mt-6 text-[1.25rem] font-medium leading-[1.35] text-muted">
          {project.body}
        </p>
        <span className="mt-9">
          <LearnMore
            href={project.href}
            className="after:absolute after:inset-0 after:content-['']"
          />
        </span>
      </div>
    </article>
  );
}

/** Responsive fallback used below the lg breakpoint */
function StackedCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-white shadow-card">
      <Thumb
        src={project.image}
        alt={`${project.title} preview`}
        sizes="(max-width: 640px) 100vw, 45vw"
        className="aspect-square w-full"
      />
      <div className="flex flex-1 flex-col items-center p-8 text-center">
        <h3 className="text-2xl font-semibold text-black">{project.title}</h3>
        <p className="mt-4 text-base font-medium leading-[1.45] text-muted">
          {project.body}
        </p>
        <span className="mt-6">
          <LearnMore
            href={project.href}
            className="text-lg after:absolute after:inset-0 after:content-['']"
          />
        </span>
      </div>
    </article>
  );
}

export function Projects() {
  const [cakesale, carsaleTop, wasana, carsaleLeft] = PROJECTS;

  return (
    <section id="projects" className="relative overflow-hidden py-20 lg:py-[100px]">
      <SectionHeading lead="Our " accent="Projects" />

      <DiamondCluster className="pointer-events-none absolute right-[8%] top-[24px] hidden h-[128px] w-[128px] animate-drift lg:block" />

      {/* ---------- desktop collage (1300 × 1572 in Figma) ---------- */}
      <div className="relative mx-auto mt-[200px] hidden h-[1280px] w-[1300px] lg:block">
        <RibbonStripes className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

        <div className="absolute left-0 top-0 z-10">
          <HorizontalCard project={cakesale} side="left" />
        </div>

        <div className="absolute left-[911px] top-0 z-10">
          <VerticalCard project={carsaleTop} />
        </div>

        {/* centre showcase image */}
        <Thumb
          src="/assets/project-showcase.png"
          alt="GenZ DevLabs project showcase"
          sizes="470px"
          className="absolute left-[415px] top-[421px] z-10 h-[470px] w-[470px]"
        />

        <div className="absolute left-0 top-[459px] z-10">
          <VerticalCard project={carsaleLeft} />
        </div>

        <div className="absolute left-[480px] top-[890px] z-10">
          <HorizontalCard project={wasana} side="right" />
        </div>
      </div>

      {/* ---------- mobile / tablet ---------- */}
      <div className="shell mt-14 grid gap-8 sm:grid-cols-2 lg:hidden">
        {PROJECTS.map((p, i) => (
          <StackedCard key={`${p.title}-${i}`} project={p} />
        ))}
      </div>
    </section>
  );
}
