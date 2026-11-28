import "../globals.css";
import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { siteConfig } from "@/siteConfig";

export { viewport } from "@/components/RootDocument";

// Domínio base para URLs absolutas (imagens de partilha, canonical), também na página 404.
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url) };

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="pt-PT">{children}</RootDocument>;
}
