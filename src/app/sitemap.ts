import { MetadataRoute } from "next";
import { getAllProjectIds } from "../data/projects";
import { getAllArtifactIds } from "../data/artifacts";
import { blogPosts } from "../data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ahlulfirdaus.com";
  const now = new Date();

  const projectRoutes = getAllProjectIds().map((id) => ({
    url: `${baseUrl}/work/${id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const artifactRoutes = getAllArtifactIds().map((id) => ({
    url: `${baseUrl}/artifacts/${id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...projectRoutes,
    ...blogRoutes,
    ...artifactRoutes,
  ];
}
