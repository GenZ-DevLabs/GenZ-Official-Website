/**
 * GitHub Pages serves static files only, so the site is exported with
 * `output: 'export'`. That has two consequences worth knowing:
 *
 *   - the built-in image optimizer can't run, hence `images.unoptimized`
 *   - `next start` no longer works; preview the export with `npx serve out`
 *
 * A GitHub *project* page lives at /<repo>, so every asset and link needs
 * that prefix. The deploy workflow sets NEXT_PUBLIC_BASE_PATH for us.
 * Leave it empty for a custom domain or a user/org page.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    // A custom loader replaces the optimizer entirely and, unlike
    // `unoptimized: true`, still lets us prepend basePath to every src.
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
