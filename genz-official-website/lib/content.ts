/**
 * All page copy, transcribed verbatim from the Figma home page
 * (node 360:889). Editing text here updates it everywhere.
 */

export type NavLink = { label: string; href: string; dropdown?: boolean };

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
];

export const SERVICE_LINKS = [
  { label: "UI/UX Design", href: "#services" },
  { label: "Software development", href: "#services" },
  { label: "Web Application development", href: "#services" },
  { label: "Mobile Application development", href: "#services" },
] as const;

export type ServiceIconName =
  | "mobile"
  | "web"
  | "uiux"
  | "software";

export const SERVICES: {
  icon: ServiceIconName;
  title: string[];
  body: string;
  href: string;
}[] = [
  {
    icon: "mobile",
    title: ["Mobile Applications", "Development"],
    body: "Offering interactive and dynamic functionality for various online tasks, from social networking to productivity tools for the users.",
    href: "#services",
  },
  {
    icon: "web",
    title: ["Web Applications", "Development"],
    body: "Combines aesthetics and functionality to craft visually appealing and intuitive digital interfaces, enhancing user satisfaction and engagement.",
    href: "#services",
  },
  {
    icon: "uiux",
    title: ["UI/UX", "Design"],
    body: "Offering diverse features and services that cater to users' needs and preferences, spanning entertainment, productivity, education, customization, and more.",
    href: "#services",
  },
  {
    icon: "software",
    title: ["Software", "Development"],
    body: "Designed to address specific problems or tasks, streamlining processes and enhancing efficiency across various industries and various users.",
    href: "#services",
  },
];

const PROJECT_BODY =
  "Designed to address specific problems or tasks, streamlining processes and enhancing efficiency across various industries and various users.";

export const PROJECTS = [
  {
    title: "Cakesale website",
    body: PROJECT_BODY,
    image: "/assets/project-cakesale.png",
    href: "#projects",
  },
  {
    title: "Car sale application",
    body: PROJECT_BODY,
    image: "/assets/project-carsale.png",
    href: "#projects",
  },
  {
    title: "Wasana Cake website",
    body: PROJECT_BODY,
    image: "/assets/project-wasana.png",
    href: "#projects",
  },
  {
    title: "Car sale application",
    body: PROJECT_BODY,
    image: "/assets/project-carsale-2.png",
    href: "#projects",
  },
] as const;

export type ReasonIconName = "coins" | "headset" | "clock";

export const REASONS: { icon: ReasonIconName; label: string }[] = [
  { icon: "coins", label: "COST-EFFECTIVE" },
  { icon: "headset", label: "RESPONSIVE" },
  { icon: "clock", label: "LONG-TERM FOCUSED" },
];

/**
 * Tech-cloud logos. `x` / `y` are percentages of the section box,
 * matching the scatter in the Figma "softwares" frame (212:548).
 * `size` is the tile edge in px at the 1600px design width.
 */
export const TECH = [
  // upper arc
  { name: "MongoDB", x: 10, y: 24, size: 56 },
  { name: "CSS3", x: 22, y: 14, size: 74 },
  { name: "Java", x: 37, y: 10, size: 56 },
  { name: "Angular", x: 55, y: 11, size: 74 },
  { name: "Three.js", x: 72, y: 18, size: 56 },
  { name: "Flutter", x: 85, y: 30, size: 74 },
  // mid band, kept clear of the centred heading
  { name: "JavaScript", x: 27, y: 27, size: 56 },
  { name: "MUI", x: 42, y: 24, size: 74 },
  { name: "MySQL", x: 62, y: 27, size: 56 },
  { name: "HTML5", x: 14, y: 38, size: 74 },
  { name: "Django", x: 3, y: 50, size: 56 },
  { name: "Tailwind CSS", x: 92, y: 46, size: 56 },
  { name: "Blender", x: 80, y: 42, size: 56 },
  { name: "React", x: 6, y: 66, size: 74 },
  // lower arc
  { name: "TypeScript", x: 19, y: 76, size: 56 },
  { name: "Figma", x: 33, y: 84, size: 74 },
  { name: "Python", x: 26, y: 92, size: 56 },
  { name: "Grafana", x: 52, y: 87, size: 56 },
  { name: "Firebase", x: 44, y: 95, size: 56 },
  { name: "Illustrator", x: 68, y: 82, size: 74 },
] as const;

export const CONTACT = {
  phone: "(+94) 702926972",
  email: "genzdevlabs@gmail.com",
  address: "kalutara, Kalutara South, Sri Lanka",
  blurb:
    "At GenZ, we're harnessing the power of cutting-edge technology to create innovative solutions that drive business success and empower the next generations of digital natives.",
  copyright: "Copyright 2023 by GenZ DevLabs. All Rights Reserved.",
};

export const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
] as const;

export const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
  { name: "WhatsApp", href: "https://wa.me/94702926972" },
] as const;
