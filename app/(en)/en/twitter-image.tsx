import { renderOgImage } from "@/lib/og-image";

export const alt = "RIO21 Lisboa, Brazilian Jiu-Jitsu academy in Ramada, Odivelas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage({
    eyebrow: "Brazilian Jiu-Jitsu · Ramada, Odivelas",
    title: "Strong mind. Strong body.",
    footer: "1st class free"
  });
}
