import type { MetadataRoute } from "next";
import { galleryAlbums } from "@/lib/gallery";
import { getAllNewsSlugs } from "@/lib/news";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/news", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/gallery", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/partnership", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/get-involved", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.4, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const albums = galleryAlbums.map((album) => ({
    url: `${siteUrl}/gallery/${album.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articles = getAllNewsSlugs().map((slug) => ({
    url: `${siteUrl}/news/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...albums, ...articles];
}
