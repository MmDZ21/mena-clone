import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#e9effe",
          200: "#cfdcfd",
          300: "#a8bdfb",
          400: "#7e98f7",
          500: "#5e7df1",
          600: "#455ee0",
          700: "#394ac0",
          800: "#2f3d99",
          900: "#2a367d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.05)"
      }
    }
  },
  plugins: []
} satisfies Config
