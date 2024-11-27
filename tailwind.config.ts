import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "var(--green)",
        "green-medium": "var(--green-solid-medium)"
      },
      textShadow: {
        light: '5px 5px 2px #ECECEC',
        green: '5px 5px 2px var(--green)',
      },
      backgroundImage: {
        timeline: 'linear-gradient(121deg, var(--brand-background-medium) 0%, var(--green-dark) 100%)'
      },
      rotate: {
        5: '5deg'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    })
  ],
} satisfies Config;
