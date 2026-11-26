import type { MetadataRoute } from "next";
import { localePath } from "@/content/types";
import { siteConfig } from "@/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteConfig.url).toString();
  const languages = { "pt-PT": url(localePath.pt), en: url(localePath.en) };

  return [
    { url: url(localePath.pt), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: url(localePath.en), changeFrequency: "monthly", priority: 0.8, alternates: { languages } }
  ];
}
