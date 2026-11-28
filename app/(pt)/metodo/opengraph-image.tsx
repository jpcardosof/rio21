import { renderOgImage } from "@/lib/og-image";

export const alt = "Método RIO21 Lisboa: currículo de Jiu-Jitsu semana a semana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Método Rio21 · Ramada, Odivelas",
    title: "Um método pensado semana a semana",
    footer: "1.ª aula grátis"
  });
}
