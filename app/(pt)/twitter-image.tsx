import { renderOgImage } from "@/lib/og-image";

export const alt = "RIO21 Lisboa, academia de Jiu-Jitsu Brasileiro na Ramada, Odivelas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage({
    eyebrow: "Jiu-Jitsu Brasileiro · Ramada, Odivelas",
    title: "Mente forte. Corpo forte.",
    footer: "1.ª aula grátis"
  });
}
