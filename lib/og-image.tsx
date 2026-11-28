import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * Imagem de partilha 1200×630 (Open Graph / Twitter) no design system do site:
 * fundo preto, logótipo branco, faixa amarela.
 */
export async function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const logo = await readFile(join(process.cwd(), "public/images/logotipo_png.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#E2E2E1",
          padding: "64px 72px",
          fontFamily: "sans-serif"
        }}
      >
        <img src={logoSrc} width={230} height={100} alt="" style={{ objectFit: "contain", objectPosition: "left" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase", color: "#BABABA" }}>{eyebrow}</div>
          <div style={{ marginTop: 18, fontSize: 76, fontWeight: 800, lineHeight: 1.02, color: "#FFFFFF", maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", background: "#F9E04C", color: "#0A0A0A", padding: "12px 26px", borderRadius: 999, fontSize: 28, fontWeight: 700 }}>
            {footer}
          </div>
          <div style={{ fontSize: 26, color: "#BABABA" }}>rio21lisboa.com</div>
        </div>
      </div>
    ),
    ogSize
  );
}
