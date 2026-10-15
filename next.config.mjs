import { readFileSync } from "node:fs";

// Old Squarespace product URLs → new template pages, so existing links keep working.
const src = readFileSync(new URL("./lib/templates.ts", import.meta.url), "utf8");
const legacy = [...src.matchAll(/slug: "([^"]+)",[\s\S]*?legacySlug: "([^"]+)"/g)].map(([, slug, old]) => ({
  source: `/content-bodega/p/${old}`,
  destination: `/templates/${slug}`,
  permanent: true,
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      ...legacy,
      { source: "/content-bodega", destination: "/templates", permanent: true },
      { source: "/content-bodega/airtable", destination: "/templates?tool=Airtable", permanent: true },
      { source: "/content-bodega/clickup", destination: "/templates?tool=ClickUp", permanent: true },
      { source: "/content-bodega/notion", destination: "/templates?tool=Notion", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/cart", destination: "/templates", permanent: true },
    ];
  },
};

export default nextConfig;
