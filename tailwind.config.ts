import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        grid: "url('/images/grid.svg')",
      },
      screens: {
        xs: "512px",
      },
    },
  },
  plugins: [],
};

export default config;
