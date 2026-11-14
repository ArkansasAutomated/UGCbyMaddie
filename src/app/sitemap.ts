import type { MetadataRoute } from "next";

const HOST = "https://www.ugcbymaddie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${HOST}/`, lastModified: new Date("2026-11-14T00:00:00.000Z"), changeFrequency: "weekly", priority: 1 },
    { url: `${HOST}/ugc`, lastModified: new Date("2026-11-14T00:00:00.000Z"), changeFrequency: "monthly", priority: 0.6 },
  ];
}
