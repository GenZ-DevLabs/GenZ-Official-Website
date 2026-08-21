import Image from "next/image";

/**
 * Official GenZ DevLabs "GZ" monogram, exported from Figma (node 360:1077).
 * Source file: public/assets/logo-genz.png (711 x 512, transparent).
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block aspect-[711/512] ${className}`}>
      <Image
        src="/assets/logo-genz.png"
        alt="GenZ DevLabs"
        fill
        sizes="220px"
        priority
        className="object-contain"
      />
    </span>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <LogoMark className="h-11 w-auto shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[20px] font-extrabold tracking-tight text-ink">
          GenZ <span className="text-brand-cyan">DevLabs</span>
        </span>
        <span className="mt-[3px] text-[7px] font-medium uppercase tracking-[0.2em] text-brand-cyan/70">
          Innovating the future
        </span>
      </span>
    </span>
  );
}
