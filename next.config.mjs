import createMDX from "@next/mdx";
import { normaliseBasePath } from "./src/lib/normalise-base-path.mjs";

const basePath = normaliseBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Empty when this was the isagog.com root site; "/isagog-old" now that
  // it's archived at that subpath under the isagog-web rebuild.
  basePath,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Static export has no image optimizer; emit plain <img> tags.
    unoptimized: true,
  },
  // Fully static HTML/JS export into ./out — no server runtime required.
  output: "export",
  // Emit each route as <route>/index.html for maximum static-host portability.
  trailingSlash: true,
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
