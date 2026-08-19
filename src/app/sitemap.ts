import { MetadataRoute } from "next";
import { getAllProjectIds } from "../data/projects";
import { getAllArtifactIds } from "../data/artifacts";
import { getAllBlogSlugs } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahlulfirdaus.com";

  const projectRoutes = getAllProjectIds().map((id) => ({
    url: `${baseUrl}/work/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const artifactRoutes = getAllArtifactIds().map((id) => ({
    url: `${baseUrl}/artifacts/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectRoutes,
    ...artifactRoutes,
    ...blogRoutes,
  ];
}
