import type { ReasonIconName } from "@/lib/content";

type S = React.SVGProps<SVGSVGElement>;

/* ---------------- Why Choose Us ---------------- */

function CoinsIcon(p: S) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...p}>
      <ellipse cx="22" cy="13" rx="12" ry="5" stroke="#05BEDD" strokeWidth="3" />
      <path
        d="M10 13v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6"
        stroke="#05BEDD"
        strokeWidth="3"
      />
      <path
        d="M10 19v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6"
        stroke="#05BEDD"
        strokeWidth="3"
      />
      <path
        d="M10 25v6c0 2.8 5.4 5 12 5s12-2.2 12-5v-6"
        stroke="#05BEDD"
        strokeWidth="3"
      />
    </svg>
  );
}

function HeadsetIcon(p: S) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...p}>
      <path
        d="M8 25v-4a14 14 0 0 1 28 0v4"
        stroke="#05BEDD"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="4" y="22" width="8" height="12" rx="4" stroke="#05BEDD" strokeWidth="3" />
      <rect x="32" y="22" width="8" height="12" rx="4" stroke="#05BEDD" strokeWidth="3" />
      <path
        d="M36 34v2a5 5 0 0 1-5 5h-6"
        stroke="#05BEDD"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="22" cy="41" r="2.5" fill="#05BEDD" />
    </svg>
  );
}

function ClockIcon(p: S) {
  return (
    <svg viewBox="0 0 44 44" fill="none" {...p}>
      <circle cx="22" cy="22" r="17" stroke="#05BEDD" strokeWidth="3" />
      <path
        d="M22 11v11l8 5"
        stroke="#05BEDD"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const REASON_MAP = {
  coins: CoinsIcon,
  headset: HeadsetIcon,
  clock: ClockIcon,
} satisfies Record<ReasonIconName, React.FC<S>>;

export function ReasonIcon({
  name,
  className = "",
}: {
  name: ReasonIconName;
  className?: string;
}) {
  const Cmp = REASON_MAP[name];
  return <Cmp className={className} aria-hidden="true" />;
}

/* ---------------- UI bits ---------------- */

export function ArrowRight(p: S) {
  return (
    <svg viewBox="0 0 36 12" fill="none" aria-hidden="true" {...p}>
      <path
        d="M0 6h32m0 0-5.5-5M32 6l-5.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown(p: S) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Contact ---------------- */

export function PhoneIcon(p: S) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.6a1 1 0 0 1-.25 1l-2.23 2.2Z" />
    </svg>
  );
}

export function MailIcon(p: S) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" fill="currentColor" />
      <path
        d="m3.5 7 8.5 6 8.5-6"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon(p: S) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 15.4 12 22 12 22s7.5-6.6 7.5-12.5A7.5 7.5 0 0 0 12 2Zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z" />
    </svg>
  );
}

export function CopyrightIcon(p: S) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15 9.4a4 4 0 1 0 0 5.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Social ---------------- */

export function SocialIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className,
    "aria-hidden": true as const,
  };
  switch (name) {
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M3 3h18v18H3V3Zm4.2 15.4V9.9H4.9v8.5h2.3ZM6.05 8.9a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm12.95 9.5v-4.9c0-2.4-1.3-3.6-3-3.6-1.4 0-2 .78-2.35 1.33V9.9H11.3c.03.66 0 8.5 0 8.5h2.35v-4.7c0-.22.02-.43.08-.58.18-.42.57-.86 1.23-.86.87 0 1.22.66 1.22 1.63v4.51H19Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common}>
          <path d="M3 3h18v18H3V3Zm9 4.1a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8Zm0 2a2.9 2.9 0 1 1 0 5.8 2.9 2.9 0 0 1 0-5.8Zm5.3-2.6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common}>
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case "WhatsApp":
    default:
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-8.6 15.06L2 22l5.07-1.33A10 10 0 1 0 12 2Zm5.1 14.13c-.24.67-1.4 1.28-1.94 1.32-.5.04-1.13.06-1.82-.11a15 15 0 0 1-1.65-.61c-2.9-1.25-4.8-4.18-4.95-4.38-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.58-.36.77-.36l.55.01c.18 0 .42-.07.65.5.24.58.82 2 .9 2.15.07.14.12.31.02.5-.1.2-.15.32-.3.49l-.44.51c-.14.15-.29.3-.13.6.17.28.75 1.23 1.6 2 1.11.98 2.04 1.29 2.33 1.43.29.15.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.38-.24.64-.14.26.09 1.67.79 1.96.93.29.15.48.22.55.34.07.12.07.68-.17 1.34Z" />
        </svg>
      );
  }
}
