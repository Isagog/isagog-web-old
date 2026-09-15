/**
 * Normalise a NEXT_PUBLIC_BASE_PATH value into "" or a leading-slash path
 * with no trailing slash.
 *
 * Plain JavaScript (not TypeScript) because next.config.mjs must import it
 * directly and cannot import .ts files. src/lib/base-path.ts imports this
 * same function so the two never disagree on what counts as a legal base
 * path (e.g. a bare segment like "isagog-old" with no leading slash).
 *
 * @param {string} value
 * @returns {string}
 */
export function normaliseBasePath(value) {
  const trimmed = (value ?? "").trim();
  if (trimmed === "" || trimmed === "/") return "";
  const withLeading = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeading.endsWith("/") ? withLeading.slice(0, -1) : withLeading;
}
