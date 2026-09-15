import { SITE_URL } from "@/lib/base-path";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Archived backup of the pre-cutover site — kept out of search results so it
// doesn't compete with the live isagog-web site for indexing.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
