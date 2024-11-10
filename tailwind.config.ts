import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from 'tailwindcss/colors'

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors:{
      background: "rgba(var(--background))",
      text: "rgba(var(--text))",
      border: "rgba(var(--border))",
      input: "rgba(var(--input))",
      card: "rgba(var(--card))",
      primary: "rgba(var(--primary))",
      ...colors
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
