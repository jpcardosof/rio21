import { renderOgImage } from "@/lib/og-image";

export const alt = "RIO21 Lisboa method: a week-by-week Jiu-Jitsu curriculum";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage({
    eyebrow: "Rio21 Method · Ramada, Odivelas",
    title: "A method planned week by week",
    footer: "1st class free"
  });
}
