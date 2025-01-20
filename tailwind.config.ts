import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkpurple: "var(--dark-primary)",
        purple: "var(--primary)",
        violet: "var(--soft-primary)",
        lavender: "var(--pale-primary)",
        orange: "var(--secondary)",
        gold: "var(--tertiary)",
        darkgray: "var(--text-primary)",
        brightgray: "var(--text-secondary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
