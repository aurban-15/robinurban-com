import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://robinurban.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/book`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/introduction`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/free`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/music`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.5 },
  ];
}
