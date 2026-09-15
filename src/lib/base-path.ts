/**
 * Where this build is served from.
 *
 * This site was the isagog.com root site until the 2026-09 cutover, when it
 * moved to https://isagog.com/isagog-old/ as an archived backup and the
 * isagog-web rebuild took over the domain root. NEXT_PUBLIC_BASE_PATH is set
 * to /isagog-old in the deploy workflow so it keeps working at that subpath.
 * Next prefixes next/link hrefs and next/image src on its own, but not every
 * raw string Next never touches: fetch() URLs and <iframe src>. asset()
 * covers those.
 */
import { normaliseBasePath } from "./normalise-base-path.mjs";

const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const BASE_PATH = normaliseBasePath(raw);

const ORIGIN = "https://isagog.com";

export const SITE_URL = `${ORIGIN}${BASE_PATH}`;

/**
 * Prefix a root-relative asset path with the deployment's base path.
 * Use for fetch() URLs, <iframe src>, and any other raw string Next does
 * not rewrite. Absolute URLs and non-path hrefs pass through unchanged.
 */
export const asset = (path: string): string => {
  if (!path.startsWith("/")) return path;
  if (BASE_PATH === "") return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path}`;
};
