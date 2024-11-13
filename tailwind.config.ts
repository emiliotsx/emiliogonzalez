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
        green: "var(--green)",
        "green-medium": "var(--green-solid-medium)",
      },
      height: {
        'screen-whitout-header': 'calc(100vh - 5.4rem)'
      },
    },
  },
  plugins: [],
} satisfies Config;
