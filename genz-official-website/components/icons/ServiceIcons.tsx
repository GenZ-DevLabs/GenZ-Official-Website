import type { ServiceIconName } from "@/lib/content";

const C = "#05BEDD";
const D = "#5A6472";

/** Mobile Applications Development — phone with code + gear badge */
function MobileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 130" fill="none" {...props}>
      <rect
        x="28"
        y="18"
        width="64"
        height="104"
        rx="10"
        stroke={C}
        strokeWidth="5"
      />
      <rect x="50" y="24" width="20" height="4" rx="2" fill={C} />
      <path
        d="M52 60l-9 9 9 9M68 60l9 9-9 9"
        stroke={C}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="28" y="106" width="64" height="16" rx="0" fill={C} opacity=".18" />
      <g transform="translate(62 66)">
        <circle cx="16" cy="16" r="15" fill={D} />
        <circle cx="16" cy="16" r="5" fill="#fff" />
        <g fill={D}>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="14"
              y="-2"
              width="4"
              height="8"
              rx="1.5"
              transform={`rotate(${i * 45} 16 16)`}
            />
          ))}
        </g>
      </g>
      <path
        d="M6 8h22M6 16h14"
        stroke={C}
        strokeWidth="4"
        strokeLinecap="round"
        opacity=".55"
      />
    </svg>
  );
}

/** Web Applications Development — monitor with code brackets */
function WebIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 130 120" fill="none" {...props}>
      <rect
        x="10"
        y="16"
        width="110"
        height="76"
        rx="8"
        stroke={C}
        strokeWidth="5"
      />
      <path d="M10 34h110" stroke={C} strokeWidth="4" />
      <circle cx="22" cy="25" r="3" fill={C} />
      <circle cx="33" cy="25" r="3" fill={C} />
      <circle cx="44" cy="25" r="3" fill={C} />
      <path
        d="M44 52l-12 12 12 12M70 52l12 12-12 12"
        stroke={C}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="92" y="46" width="18" height="36" rx="3" stroke={C} strokeWidth="4" />
      <path d="M96 54h10M96 62h10M96 70h6" stroke={C} strokeWidth="3" strokeLinecap="round" />
      <path d="M52 92v12M78 92v12M42 106h46" stroke={C} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** UI/UX Design — monitor with layout blocks and a cursor */
function UiUxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 130 120" fill="none" {...props}>
      <rect
        x="10"
        y="16"
        width="110"
        height="76"
        rx="8"
        stroke={C}
        strokeWidth="5"
      />
      <path d="M10 34h110" stroke={C} strokeWidth="4" />
      <circle cx="22" cy="25" r="3" fill={C} />
      <circle cx="33" cy="25" r="3" fill={C} />
      <rect x="22" y="44" width="30" height="38" rx="4" fill={C} opacity=".35" />
      <rect x="60" y="44" width="48" height="8" rx="4" fill={C} opacity=".55" />
      <path
        d="M62 74l40-18-16 34-6-12z"
        fill="#fff"
        stroke={C}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M52 92v12M78 92v12M42 106h46" stroke={C} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** Software Development — monitor, code panel, gear and Java-ish badge */
function SoftwareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 120" fill="none" {...props}>
      <rect
        x="10"
        y="20"
        width="104"
        height="72"
        rx="8"
        stroke={C}
        strokeWidth="5"
      />
      <path d="M10 38h104" stroke={C} strokeWidth="4" />
      <circle cx="22" cy="29" r="3" fill={C} />
      <circle cx="33" cy="29" r="3" fill={C} />
      <path
        d="M42 54l-12 11 12 11M66 54l12 11-12 11"
        stroke={C}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="86" y="48" width="18" height="34" rx="3" stroke={C} strokeWidth="4" />
      <path d="M90 56h10M90 64h10M90 72h6" stroke={C} strokeWidth="3" strokeLinecap="round" />
      <path d="M48 92v12M76 92v12M38 106h48" stroke={C} strokeWidth="5" strokeLinecap="round" />
      <g transform="translate(100 56)">
        <circle cx="18" cy="18" r="17" fill={D} />
        <circle cx="18" cy="18" r="6" fill="#fff" />
        <g fill={D}>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x="15.5"
              y="-3"
              width="5"
              height="9"
              rx="1.5"
              transform={`rotate(${i * 45} 18 18)`}
            />
          ))}
        </g>
      </g>
      <path
        d="M96 14c6 4-6 7 0 11M104 12c7 5-7 8 0 13"
        stroke={C}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect x="88" y="30" width="26" height="6" rx="3" fill={C} opacity=".6" />
    </svg>
  );
}

const MAP = {
  mobile: MobileIcon,
  web: WebIcon,
  uiux: UiUxIcon,
  software: SoftwareIcon,
} satisfies Record<ServiceIconName, React.FC<React.SVGProps<SVGSVGElement>>>;

export function ServiceIcon({
  name,
  className = "",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Cmp = MAP[name];
  return <Cmp className={className} aria-hidden="true" focusable="false" />;
}
