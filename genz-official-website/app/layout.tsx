import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://genzdevlabs.com"),
  title: {
    default: "GenZ DevLabs — Innovating for GenZ's Digital Future",
    template: "%s | GenZ DevLabs",
  },
  description:
    "A team of talented engineers building mobile applications, web applications, software and UI/UX design for the next generation of digital natives.",
  keywords: [
    "GenZ DevLabs",
    "mobile app development",
    "web application development",
    "software development",
    "UI UX design",
    "Sri Lanka software company",
  ],
  openGraph: {
    title: "GenZ DevLabs — Innovating for GenZ's Digital Future",
    description:
      "A team of talented engineers, experts in mobile applications, web applications, software development and UI/UX design.",
    type: "website",
    locale: "en_US",
    siteName: "GenZ DevLabs",
  },
  // basePath is not applied to metadata icons on a static export
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-card"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
