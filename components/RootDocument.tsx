import { Anton, Source_Sans_3 } from "next/font/google";
import type { Viewport } from "next";

const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

// Anton só é usada onde a Impact não existe (Android, iOS, Linux). Sem preload:
// em Windows/macOS a Impact local é usada e o ficheiro nunca é descarregado.
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: false
});

// Aplica o tema antes da primeira pintura para não haver "flash" de tema errado.
// Também ativa as animações de scroll só quando há JS e o visitante não pediu "reduzir movimento".
const themeScript = `(function(){var h=document.documentElement;try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;h.classList.toggle("dark",d)}catch(e){}try{if("IntersectionObserver" in window&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches)h.classList.add("reveal")}catch(e){}})();`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" }
  ]
};

export function RootDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${sans.variable} ${anton.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
