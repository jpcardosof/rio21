import { MethodPage } from "@/components/method/MethodPage";
import { buildMethodMetadata } from "@/content";

export const metadata = buildMethodMetadata("pt");
// Regenera de hora a hora para a semana atual vir certa do servidor.
export const revalidate = 3600;

export default function Page() {
  return <MethodPage locale="pt" />;
}
