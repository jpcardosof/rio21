import type { MetadataRoute } from "next";
import { localePath, methodPath } from "@/content/types";
import { siteConfig } from "@/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteConfig.url).toString();
  const languages = { "pt-PT": url(localePath.pt), en: url(localePath.en) };

  const lastModified = new Date();
  const methodLanguages = { "pt-PT": url(methodPath.pt), en: url(methodPath.en) };

  return [
    { url: url(localePath.pt), lastModified, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: url(localePath.en), lastModified, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
    { url: url(methodPath.pt), lastModified, changeFrequency: "weekly", priority: 0.7, alternates: { languages: methodLanguages } },
    { url: url(methodPath.en), lastModified, changeFrequency: "weekly", priority: 0.6, alternates: { languages: methodLanguages } }
  ];
}
