import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      screens: {
        xs: "576px",
      },
      zIndex: {
        top: "1",
      },
    },
  },
  plugins: [],
};

export default config;
