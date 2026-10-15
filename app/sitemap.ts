import type { MetadataRoute } from "next";
import { templates } from "@/lib/templates";

const base = "https://www.saturdaycontent.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base },
    { url: `${base}/templates` },
    ...templates.map((t) => ({ url: `${base}/templates/${t.slug}` })),
  ];
}
