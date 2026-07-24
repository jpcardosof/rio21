import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Classes } from "@/components/Classes";
import { Coaches } from "@/components/Coaches";
import { FAQ } from "@/components/FAQ";
import { Filiais } from "@/components/Filiais";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { Schedule } from "@/components/Schedule";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Testimonials } from "@/components/Testimonials";
import { TrialClassCTA } from "@/components/TrialClassCTA";
import { siteConfig } from "@/siteConfig";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: `${siteConfig.unitName} · ${siteConfig.name}`,
    description: siteConfig.seo.description,
    image: siteConfig.media.heroImage,
    sport: "Brazilian Jiu-Jitsu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Odivelas",
      addressRegion: "Lisboa",
      addressCountry: "PT"
    },
    areaServed: siteConfig.poles.map((pole) => pole.location),
    sameAs: siteConfig.social.instagram.map((profile) => profile.url),
    makesOffer: {
      "@type": "Offer",
      name: "Aula experimental gratuita de Jiu-Jitsu Brasileiro"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollEffects />
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Benefits />
        <Coaches />
        <Schedule />
        <Filiais />
        <TrialClassCTA />
        <Gallery />
        <Testimonials />
        <FAQ />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
