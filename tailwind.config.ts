import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        serelemo: ["var(--font-serelemo)"],
      },
      dropShadow: {
        nav: [
          "0px 397px 111px 0px rgba(0, 0, 0, 0%)",
          "0px 254px 102px 0px rgba(0, 0, 0, 1%)",
          " 0px 143px 86px 0px rgba(0, 0, 0, 5%)",
          "0px 63px 63px 0px rgba(0, 0, 0, 9%)",
          "0px 16px 35px 0px rgba(0, 0, 0, 10%)",
        ],
      },
      colors: {
        mauve: {
          100: "#DABFFF",
          200: "#907AD6",
        },
        black: "#0D1821",
        white: "#F9FBF2",
      },
    },
  },
  plugins: [],
};
export default config;
