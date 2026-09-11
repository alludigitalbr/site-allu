import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.alludigital.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/nura", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/nura/crm-whatsapp", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/nura/recursos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/nura/ia", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/nura/afiliados", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/nura/sobre", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/nura/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/nura/termos", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
