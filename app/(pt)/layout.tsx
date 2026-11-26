import "../globals.css";
import { RootDocument } from "@/components/RootDocument";

export { viewport } from "@/components/RootDocument";

export default function PortugueseLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="pt-PT">{children}</RootDocument>;
}
