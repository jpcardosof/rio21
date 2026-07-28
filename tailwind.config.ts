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
        ash: "#3f3f46",
        paper: "#f4f4f5",
        ember: "#c1121f"
      },
      boxShadow: {
        "hard-red": "0 18px 60px rgba(193, 18, 31, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
