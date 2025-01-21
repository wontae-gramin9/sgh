import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        "1": "1.01",
        "2": "1.03",
        "3": "1.05",
      },
      colors: {
        black: {
          3: "var(--black-dark)",
          2: "var(--black-normal)",
          1: "var(--black-light)",
        },
        white: {
          3: "var(--white-dark)",
          2: "var(--white-normal)",
          1: "var(--white-light)",
        },
        purple: {
          3: "var(--purple-dark)",
          2: "var(--purple-normal)",
          1: "var(--purple-light)",
        },
        orange: {
          3: "var(--orange-dark)",
          2: "var(--orange-normal)",
          1: "var(--orange-light)",
        },
        yellow: {
          3: "var(--yellow-dark)",
          2: "var(--yellow-normal)",
          1: "var(--yellow-light)",
        },
        red: {
          3: "var(--red-dark)",
          2: "var(--red-normal)",
          1: "var(--red-light)",
        },
        green: {
          3: "var(--green-dark)",
          2: "var(--green-normal)",
          1: "var(--green-light)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
