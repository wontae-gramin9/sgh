import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Galaxy Flip
        sm: "480px", // 640px → 480px overwriting
      },
      scale: {
        "1": "1.01",
        "2": "1.03",
        "3": "1.05",
      },
      colors: {
        white: {
          st: "var(--white-strong)",
          nm: "var(--white-normal)",
          li: "var(--white-light)",
        },
        background: {
          st: "var(--background-strong)",
          nm: "var(--background-normal)",
          li: "var(--background-light)",
        },
        foreground: {
          st: "var(--foreground-strong)",
          nm: "var(--foreground-normal)",
          li: "var(--foreground-light)",
        },
        primary: {
          st: "var(--primary-strong)",
          nm: "var(--primary-normal)",
          li: "var(--primary-light)",
        },
        secondary: {
          st: "var(--secondary-strong)",
          nm: "var(--secondary-normal)",
          li: "var(--secondary-light)",
        },
        error: {
          st: "var(--error-strong)",
          nm: "var(--error-normal)",
          li: "var(--error-light)",
        },
        success: {
          st: "var(--success-strong)",
          nm: "var(--success-normal)",
          li: "var(--success-light)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
