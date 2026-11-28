import { MethodPage } from "@/components/method/MethodPage";
import { buildMethodMetadata } from "@/content";

export const metadata = buildMethodMetadata("en");
// Regenerated hourly so the current week is right from the server.
export const revalidate = 3600;

export default function Page() {
  return <MethodPage locale="en" />;
}
