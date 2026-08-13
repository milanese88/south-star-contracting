import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { light: "#D4BA8A", DEFAULT: "#C4A46A", dark: "#A8893A" },
        obsidian: { DEFAULT: "#08090F", 50: "#0D1020", 100: "#141828", 200: "#1C2238" },
        cream: { DEFAULT: "#F5F0E8", dark: "#E8E2D8" },
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: { widest2: "0.25em" },
    },
  },
  plugins: [],
};

export default config;
