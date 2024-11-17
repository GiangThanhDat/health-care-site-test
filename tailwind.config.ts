import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "960px",
      },
    },
    fontFamily: {
      inter: "var(--font-inter)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0",
        },
        dark: {
          500: "#414141",
          600: "#2E2E2E",
        },
        gray: {
          400: "#777777",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
