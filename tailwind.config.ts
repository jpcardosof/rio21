import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "selector",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.ts"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        "line-strong": token("line-strong"),
        surface: token("surface"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        "accent-ink": token("accent-ink"),
        ink: "#0A0A0A"
      },
      fontFamily: {
        display: ["Impact", '"Impact Regular"', "var(--font-anton)", '"Arial Narrow"', "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      maxWidth: {
        shell: "80rem"
      },
      boxShadow: {
        glow: "0 12px 32px -12px rgb(var(--accent) / 0.9)",
        lift: "0 14px 32px -14px rgb(0 0 0 / 0.45)",
        soft: "0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)"
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.16, 1, 0.3, 1)"
      }
    }
  },
  plugins: []
};

export default config;
