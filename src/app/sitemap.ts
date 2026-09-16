import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/resume`, changeFrequency: "monthly", priority: 0.6 },
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
