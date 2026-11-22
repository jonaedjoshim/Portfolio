import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticRoutes = [
    { path: "", changeFrequency: "yearly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
    { path: "/problem-solving", changeFrequency: "monthly", priority: 0.6 },
    { path: "/credentials", changeFrequency: "monthly", priority: 0.6 },
  ] as const;

  const projectRoutes = projects.flatMap((project) => [
    {
      path: `/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: `/projects/${project.slug}/story`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
