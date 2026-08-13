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
        gold: { light: "#6DC4D4", DEFAULT: "#3A9DB5", dark: "#2A7A8F" },
        cream: { DEFAULT: "#F5F3EF", dark: "#EAE7E1" },
        obsidian: { DEFAULT: "#04061A", 50: "#07091E", 100: "#0C1030", 200: "#111838" },
        cobalt: { DEFAULT: "#3333BB", light: "#4F4FCE", dark: "#2222A0" },
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
