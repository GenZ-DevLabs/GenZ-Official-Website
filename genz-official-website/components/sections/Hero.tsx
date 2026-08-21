import Image from "next/image";
import { Dot } from "@/components/icons/Decor";
import { GradientButton, OutlineButton } from "@/components/ui/GradientButton";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-16 pt-[110px] lg:pb-[100px] lg:pt-[160px]"
    >
      {/* ---- artwork (Figma "header shape", node 360:904) ---- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16%] top-[-26%] hidden h-[1180px] w-[1050px] lg:block xl:right-[-8%]"
      >
        <Image
          src="/assets/hero-shape.png"
          alt=""
          fill
          sizes="1050px"
          priority
          className="object-contain"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 h-[380px] w-[340px] opacity-70 lg:hidden"
      >
        <Image
          src="/assets/hero-shape.png"
          alt=""
          fill
          sizes="340px"
          className="object-contain"
        />
      </div>

      {/* ---- floating dots ---- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <Dot size={82} className="left-[calc(50%+0px)] top-[110px] animate-float opacity-90" />
        <Dot size={38} className="left-[calc(50%-90px)] top-[290px] animate-drift" />
        <Dot size={38} className="left-[44px] top-[470px] animate-float" />
        <Dot size={38} className="-left-[19px] top-[255px] animate-drift" />
        <Dot size={72} className="-left-[34px] top-[535px] animate-float" />
      </div>

      <div className="shell relative z-10">
        <div className="max-w-[810px]">
          <h1 className="text-[clamp(2.75rem,1.6rem+5vw,5.44rem)] font-extrabold leading-[1.19] tracking-[0.02em] text-ink">
            Innovating for{" "}
            <span className="bg-brand-text bg-clip-text text-transparent">
              GenZ
            </span>
            &rsquo;s
            <br />
            <span className="bg-brand-text bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Future
          </h1>

          <p className="mt-8 text-[clamp(1.25rem,1rem+1vw,2.125rem)] font-medium tracking-[0.02em] text-ink lg:mt-[68px]">
            A team of talented engineers,
          </p>

          <p className="mt-3 flex flex-wrap items-center text-[clamp(1.4rem,1.1rem+1.2vw,2.5rem)] font-extrabold tracking-[0.02em] text-ink">
            Experts in&nbsp;
            <span className="text-brand-cyan">Mobile Applications</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.85em] w-[6px] animate-caret bg-brand-cyan align-middle"
            />
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5 lg:mt-[62px]">
            <OutlineButton href="#projects" className="h-[54px] min-w-[220px]">
              See Our Works
            </OutlineButton>
            <GradientButton href="#contact" className="h-[54px] min-w-[230px]">
              Lets Talk
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
