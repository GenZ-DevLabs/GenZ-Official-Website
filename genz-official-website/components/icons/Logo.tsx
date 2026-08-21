/**
 * GenZ DevLabs "GZ" monogram, re-drawn as vector from the Figma mark
 * (the raster export at figma.com was unreachable from the build sandbox).
 * To swap in the official artwork, drop it at public/assets/logo-genz.png
 * and see public/assets/README.md.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 210 150"
      role="img"
      aria-label="GenZ DevLabs"
      className={className}
    >
      <defs>
        <linearGradient id="gz-g" gradientUnits="userSpaceOnUse" x1="24" y1="20" x2="150" y2="130">
          <stop offset="0%" stopColor="#05BEDD" />
          <stop offset="100%" stopColor="#3294F4" />
        </linearGradient>
        <linearGradient id="gz-z" gradientUnits="userSpaceOnUse" x1="215" y1="24" x2="120" y2="126">
          <stop offset="0%" stopColor="#8EE0EE" />
          <stop offset="55%" stopColor="#2FC4E4" />
          <stop offset="100%" stopColor="#05BEDD" />
        </linearGradient>
      </defs>

      {/* G — bowl open on the right, plus the crossbar that makes it a G */}
      <g fill="none" stroke="url(#gz-g)" strokeWidth="30" strokeLinecap="butt">
        {/* circle centred (80,75) r=46, open between -48° and +48° */}
        <path d="M110.8 40.8A46 46 0 1 0 126 75" />
        <path d="M126 75H98" />
      </g>

      {/* white knock-out so the Z reads cleanly on top of the G */}
      <g fill="none" stroke="#fff" strokeWidth="34" strokeLinejoin="miter" strokeMiterlimit="2">
        <path d="M126 32h82l-72 86h82" />
      </g>

      {/* Z */}
      <g
        fill="none"
        stroke="url(#gz-z)"
        strokeWidth="26"
        strokeLinejoin="miter"
        strokeMiterlimit="2"
      >
        <path d="M126 32h82l-72 86h82" />
      </g>
    </svg>
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
