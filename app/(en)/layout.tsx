import "../globals.css";
import { RootDocument } from "@/components/RootDocument";

export { viewport } from "@/components/RootDocument";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
