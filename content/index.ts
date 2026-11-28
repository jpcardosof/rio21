import type { Metadata } from "next";
import { siteConfig } from "@/siteConfig";
import { en } from "./en";
import { pt } from "./pt";
import { getMethod } from "./curriculum";
import { localePath, methodPath, type Dictionary, type Locale } from "./types";

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

type PageSeo = { title: string; description: string; paths: Record<Locale, string> };

const absolute = (path: string) => new URL(path, siteConfig.url).toString();

/**
 * Metadados comuns: canonical, hreflang, Open Graph e Twitter. A imagem de partilha (1200×630)
 * vem dos ficheiros `opengraph-image.tsx` / `twitter-image.tsx` de cada idioma.
 */
function pageMetadata(locale: Locale, { title, description, paths }: PageSeo): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: dict.seo.keywords,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
    },
    alternates: {
      canonical: paths[locale],
      languages: { "pt-PT": paths.pt, en: paths.en, "x-default": paths.pt }
    },
    icons: { icon: siteConfig.logoBadge, apple: siteConfig.logoBadge },
    openGraph: {
      title,
      description,
      url: paths[locale],
      siteName: siteConfig.name,
      locale: dict.ogLocale,
      alternateLocale: locale === "pt" ? [en.ogLocale] : [pt.ogLocale],
      type: "website"
    },
    twitter: { card: "summary_large_image", title, description }
  };
}

export function buildMetadata(locale: Locale): Metadata {
  const { seo } = getDictionary(locale);
  return pageMetadata(locale, { title: seo.title, description: seo.description, paths: localePath });
}

export function buildMethodMetadata(locale: Locale): Metadata {
  const { seo } = getMethod(locale);
  return pageMetadata(locale, { title: seo.title, description: seo.description, paths: methodPath });
}

/** Identificadores estáveis para ligar as entidades do JSON-LD entre páginas. */
const ids = {
  academy: `${siteConfig.url}/#academia`,
  website: `${siteConfig.url}/#website`
};

/** Academia (SportsActivityLocation) com os dados reais de contacto e localização. */
function academyJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const { location, contacts } = siteConfig;

  return {
    "@type": "SportsActivityLocation",
    "@id": ids.academy,
    name: siteConfig.name,
    alternateName: siteConfig.alternateNames,
    url: absolute(localePath[locale]),
    description: dict.seo.description,
    image: [absolute(siteConfig.images.hero.src), absolute(siteConfig.images.about.src)],
    logo: absolute(siteConfig.logoBadge),
    sport: "Brazilian Jiu-Jitsu",
    telephone: `+${contacts.whatsapp}`,
    email: contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      postalCode: location.postalCode,
      addressLocality: location.locality,
      addressRegion: location.region,
      addressCountry: location.country
    },
    geo: { "@type": "GeoCoordinates", latitude: location.latitude, longitude: location.longitude },
    hasMap: location.mapsUrl,
    areaServed: ["Ramada", "Odivelas", "Lisboa"].map((name) => ({ "@type": "City", name })),
    founder: siteConfig.team.founders.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      sameAs: founder.instagram
    })),
    sameAs: [contacts.instagram],
    makesOffer: {
      "@type": "Offer",
      name: dict.trial.title,
      price: "0",
      priceCurrency: "EUR"
    }
  };
}

function websiteJsonLd(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: locale === "pt" ? "pt-PT" : "en",
    publisher: { "@id": ids.academy }
  };
}

export function buildJsonLd(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      academyJsonLd(locale),
      websiteJsonLd(locale),
      {
        "@type": "FAQPage",
        "@id": `${absolute(localePath[locale])}#faq`,
        inLanguage: dict.htmlLang,
        mainEntity: dict.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
      }
    ]
  };
}

/** Página Método: WebPage + breadcrumb, ligada à academia. */
export function buildMethodJsonLd(locale: Locale) {
  const dict = getDictionary(locale);
  const method = getMethod(locale);
  const url = absolute(methodPath[locale]);

  return {
    "@context": "https://schema.org",
    "@graph": [
      academyJsonLd(locale),
      websiteJsonLd(locale),
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: method.seo.title,
        description: method.seo.description,
        inLanguage: dict.htmlLang,
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.academy },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: siteConfig.name, item: absolute(localePath[locale]) },
            { "@type": "ListItem", position: 2, name: method.nav, item: url }
          ]
        }
      }
    ]
  };
}
