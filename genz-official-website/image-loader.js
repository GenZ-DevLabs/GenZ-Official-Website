/**
 * next/image loader for the static export.
 *
 * The built-in optimizer can't run on GitHub Pages, and with `output: 'export'`
 * Next does NOT prefix `basePath` onto image sources, so a project page served
 * from /<repo> would request /assets/... and 404. This prepends it.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }) {
  // absolute URLs pass through untouched
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
