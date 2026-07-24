import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./siteConfig.ts"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070707",
        graphite: "#121212",
        steel: "#24272d",
        paper: "#f5f2ec",
        ember: "#c1121f",
        gold: "#c9a227",
        ocean: "#174c72"
      },
      boxShadow: {
        "hard-red": "0 18px 60px rgba(193, 18, 31, 0.22)",
        "hard-gold": "0 18px 60px rgba(201, 162, 39, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
