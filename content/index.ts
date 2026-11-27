import type { Metadata } from "next";
import { siteConfig } from "@/siteConfig";
import { en } from "./en";
import { pt } from "./pt";
import { localePath, type Dictionary, type Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function buildMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const image = siteConfig.images.hero;

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    authors: [{ name: siteConfig.name }],
    alternates: {
      canonical: localePath[locale],
      languages: { "pt-PT": localePath.pt, en: localePath.en, "x-default": localePath.pt }
    },
    icons: { icon: siteConfig.logoBadge, apple: siteConfig.logoBadge },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: localePath[locale],
      siteName: siteConfig.name,
      locale: dict.ogLocale,
      alternateLocale: locale === "pt" ? [en.ogLocale] : [pt.ogLocale],
      type: "website",
      images: [{ url: image.src, width: image.width, height: image.height, alt: dict.hero.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: [image.src]
    }
  };
}

export function buildJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const url = new URL(localePath[locale], siteConfig.url).toString();

  return [
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      name: siteConfig.name,
      url,
      description: dict.seo.description,
      image: new URL(siteConfig.images.hero.src, siteConfig.url).toString(),
      logo: new URL(siteConfig.logoBadge, siteConfig.url).toString(),
      sport: "Brazilian Jiu-Jitsu",
      telephone: `+${siteConfig.contacts.whatsapp}`,
      email: siteConfig.contacts.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.location.streetAddress,
        postalCode: siteConfig.location.postalCode,
        addressLocality: siteConfig.location.locality,
        addressRegion: siteConfig.location.region,
        addressCountry: siteConfig.location.country
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.location.latitude,
        longitude: siteConfig.location.longitude
      },
      hasMap: siteConfig.location.mapsUrl,
      sameAs: [siteConfig.contacts.instagram],
      makesOffer: {
        "@type": "Offer",
        name: dict.trial.title,
        price: "0",
        priceCurrency: "EUR"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: dict.htmlLang,
      mainEntity: dict.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    }
  ];
}
