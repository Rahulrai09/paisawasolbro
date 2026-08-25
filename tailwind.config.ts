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
        roman: ["Times New Roman", "Times", "serif"],
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out both",
        fadeIn: "fadeIn 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
