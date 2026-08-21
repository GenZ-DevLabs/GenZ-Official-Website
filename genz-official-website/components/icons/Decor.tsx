/**
 * Decorative outline shapes scattered behind the sections
 * (Figma nodes 236:196, 236:208, 236:194, 280:459, 280:460, 524:1109-1111).
 * Purely ornamental — always aria-hidden.
 */

type S = React.SVGProps<SVGSVGElement>;

/** Stacked rotated squares (top-left of "Our Services") */
export function StackedSquares(p: S) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" {...p}>
      <g stroke="#3294F4" strokeWidth="4">
        <rect x="14" y="30" width="44" height="44" rx="3" transform="rotate(-18 36 52)" />
        <rect x="52" y="24" width="44" height="44" rx="3" transform="rotate(-18 74 46)" />
        <rect x="34" y="58" width="44" height="44" rx="3" transform="rotate(-18 56 80)" />
      </g>
    </svg>
  );
}

/** Four small diamonds (top-right of "Our Projects") */
export function DiamondCluster(p: S) {
  return (
    <svg viewBox="0 0 130 130" fill="none" aria-hidden="true" {...p}>
      <g stroke="#3294F4" strokeWidth="4">
        <rect x="10" y="10" width="36" height="36" rx="3" transform="rotate(-20 28 28)" />
        <rect x="78" y="26" width="24" height="24" rx="3" transform="rotate(-20 90 38)" />
        <rect x="26" y="76" width="24" height="24" rx="3" transform="rotate(-20 38 88)" />
        <rect x="70" y="72" width="36" height="36" rx="3" transform="rotate(-20 88 90)" />
      </g>
    </svg>
  );
}

/** Double wave (right of "Our Services") */
export function WaveMark(p: S) {
  return (
    <svg viewBox="0 0 140 110" fill="none" aria-hidden="true" {...p}>
      <g stroke="#3294F4" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M8 68c14-42 46-46 62-20s40 26 58-8" />
        <path d="M12 92c14-42 46-46 62-20s40 26 58-8" />
      </g>
    </svg>
  );
}

/** Open triangle outline (bottom-left of "Our Services") */
export function TriangleMark(p: S) {
  return (
    <svg viewBox="0 0 140 140" fill="none" aria-hidden="true" {...p}>
      <path
        d="M112 24 24 74l86 46z"
        stroke="#3294F4"
        strokeWidth="6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/** Diagonal ribbon stripes that run behind the project cards */
export function RibbonStripes({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1300 1300"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="ribbon" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#6ECDDD" />
          <stop offset="100%" stopColor="#3294F4" />
        </linearGradient>
      </defs>
      <g stroke="url(#ribbon)" strokeWidth="46" opacity=".85" fill="none">
        <path d="M120 1180 1180 120" />
        <path d="M270 1300 1300 270" strokeWidth="34" />
        <path d="M0 1030 1030 0" strokeWidth="34" />
      </g>
    </svg>
  );
}

/** Soft gradient blob used behind the hero */
export function HeroBlob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 900" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="blob" x1="0.15" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#4FC8F5" />
          <stop offset="55%" stopColor="#1E86F0" />
          <stop offset="100%" stopColor="#0A6FE0" />
        </linearGradient>
        <linearGradient id="blobLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity=".15" />
        </linearGradient>
      </defs>
      <circle cx="450" cy="450" r="440" fill="url(#blob)" />
      {/* white slash */}
      <path
        d="M120 830 830 120l58 58L178 888z"
        fill="#fff"
        opacity=".95"
      />
      {/* rounded capsules echoing the Figma artwork */}
      <g fill="url(#blobLight)">
        <rect x="330" y="150" width="230" height="120" rx="60" transform="rotate(-45 445 210)" />
        <rect x="540" y="470" width="230" height="120" rx="60" transform="rotate(-45 655 530)" />
        <rect x="180" y="430" width="170" height="110" rx="55" transform="rotate(-45 265 485)" />
      </g>
    </svg>
  );
}

/** The floating gradient dots on the hero */
export function Dot({
  size,
  className = "",
  style,
}: {
  size: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, ...style }}
      className={`absolute rounded-full bg-gradient-to-br from-[#6ECDDD] to-[#3294F4] ${className}`}
    />
  );
}
