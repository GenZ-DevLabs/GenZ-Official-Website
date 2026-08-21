import * as simpleIcons from "simple-icons";
import { TECH } from "@/lib/content";

type Icon = { path: string; hex: string; title: string };

/** map our display name → simple-icons export name */
const SLUGS: Record<string, string> = {
  CSS3: "siCss",
  Java: "siOpenjdk",
  Angular: "siAngular",
  "Three.js": "siThreedotjs",
  MongoDB: "siMongodb",
  JavaScript: "siJavascript",
  MUI: "siMui",
  MySQL: "siMysql",
  HTML5: "siHtml5",
  Flutter: "siFlutter",
  Django: "siDjango",
  TypeScript: "siTypescript",
  Blender: "siBlender",
  "Tailwind CSS": "siTailwindcss",
  React: "siReact",
  Figma: "siFigma",
  Grafana: "siGrafana",
  Python: "siPython",
  Firebase: "siFirebase",
  Illustrator: "siAdobeillustrator",
};

/** Fallbacks for slugs that shift between simple-icons majors */
const ALTERNATES: Record<string, string[]> = {
  CSS3: ["siCss3", "siCss"],
  Java: ["siOpenjdk", "siJava"],
  MUI: ["siMui", "siMaterialui"],
  "Three.js": ["siThreedotjs"],
};

function resolve(name: string): Icon | null {
  const bag = simpleIcons as unknown as Record<string, Icon | undefined>;
  const candidates = [...(ALTERNATES[name] ?? []), SLUGS[name]].filter(Boolean);
  for (const key of candidates) {
    const hit = bag[key];
    if (hit?.path) return hit;
  }
  return null;
}

function TechTile({
  name,
  size,
  x,
  y,
}: {
  name: string;
  size: number;
  x: number;
  y: number;
}) {
  const icon = resolve(name);
  const glyph = Math.round(size * 0.5);

  return (
    <li
      className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${((x + y) % 7) * 0.4}s`,
      }}
    >
      <span
        title={name}
        className="flex items-center justify-center rounded-[18px] bg-white shadow-[0_4px_18px_-4px_rgba(5,190,221,0.35)] ring-1 ring-black/[0.04] transition-transform duration-300 hover:scale-110"
        style={{ width: size, height: size }}
      >
        {icon ? (
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={name}
            style={{ width: glyph, height: glyph }}
            fill={`#${icon.hex}`}
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <span
            aria-label={name}
            className="font-bold text-brand-cyan"
            style={{ fontSize: glyph * 0.5 }}
          >
            {name.slice(0, 2)}
          </span>
        )}
      </span>
    </li>
  );
}

export function TechStack() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-[80px]">
      {/* soft radial wash behind the cloud */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(5,190,221,0.10)_0%,rgba(255,255,255,0)_68%)]"
      />

      {/* ---------- desktop: scattered cloud ---------- */}
      <div className="relative mx-auto hidden h-[720px] w-full max-w-[1280px] lg:block">
        <ul className="absolute inset-0">
          {TECH.map((t) => (
            <TechTile key={t.name} {...t} />
          ))}
        </ul>
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(2.25rem,1.5rem+2.6vw,4rem)] font-bold leading-[1.2] tracking-[0.02em] text-black">
          Expertise <span className="text-brand-cyan">In</span> Latest
          <br />
          <span className="text-brand-cyan">Technologies</span>
        </h2>
      </div>

      {/* ---------- mobile / tablet: heading then a neat grid ---------- */}
      <div className="shell relative lg:hidden">
        <h2 className="text-center text-[clamp(2rem,1.4rem+2.4vw,3rem)] font-bold leading-[1.2] text-black">
          Expertise <span className="text-brand-cyan">In</span> Latest{" "}
          <span className="text-brand-cyan">Technologies</span>
        </h2>
        <ul className="mt-12 grid grid-cols-4 justify-items-center gap-6 sm:grid-cols-5">
          {TECH.map((t) => {
            const icon = resolve(t.name);
            return (
              <li key={t.name}>
                <span
                  title={t.name}
                  className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white shadow-[0_4px_18px_-4px_rgba(5,190,221,0.35)] ring-1 ring-black/[0.04]"
                >
                  {icon ? (
                    <svg
                      viewBox="0 0 24 24"
                      role="img"
                      aria-label={t.name}
                      className="h-7 w-7"
                      fill={`#${icon.hex}`}
                    >
                      <path d={icon.path} />
                    </svg>
                  ) : (
                    <span className="text-xs font-bold text-brand-cyan">
                      {t.name.slice(0, 2)}
                    </span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
