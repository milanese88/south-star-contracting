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
        gold: { light: "#D6D3CD", DEFAULT: "#B8B3AB", dark: "#8C877E" },
        dove: { light: "#E5E3DF", DEFAULT: "#B5B1A9", dark: "#7E7A73" },
        obsidian: { DEFAULT: "#0E0E10", 50: "#161618", 100: "#1E1E22", 200: "#28282C" },
        cream: { DEFAULT: "#F4F2EE", dark: "#E6E3DD" },
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
