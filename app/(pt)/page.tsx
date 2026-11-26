import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/content";

export const metadata = buildMetadata("pt");

export default function Page() {
  return <HomePage locale="pt" />;
}
