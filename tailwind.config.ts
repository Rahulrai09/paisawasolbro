import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#FFFFFF",
        inkSoft: "#FFF3F2",
        inkLine: "#F3D9D8",
        gold: "#E01B1B",
        goldBright: "#FF3B30",
        rust: "#A81810",
        paper: "#1C1310",
        paperDim: "#7A6664",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
    },
  },
  plugins: [],
};
export default config;
