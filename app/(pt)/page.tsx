import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/content";

export const metadata = buildMetadata("pt");
// Regenera de hora a hora para o cartão "Esta semana no tatame" vir certo do servidor.
export const revalidate = 3600;

export default function Page() {
  return <HomePage locale="pt" />;
}
