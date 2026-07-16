import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090a0b",
          900: "#0f1113",
          850: "#151719",
          800: "#1b1e21",
          700: "#2a2e32",
        },
        champagne: {
          300: "#ebd09c",
          400: "#d9b46d",
          500: "#c89b49",
          600: "#a97a2f",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(217, 180, 109, 0.12), 0 20px 70px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(90deg, rgba(9,10,11,0.98) 0%, rgba(9,10,11,0.90) 42%, rgba(9,10,11,0.28) 74%, rgba(9,10,11,0.18) 100%)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
