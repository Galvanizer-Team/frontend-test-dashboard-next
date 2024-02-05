/** @type {import('tailwindcss').Config} */

import { nextui } from "@nextui-org/react"
import next from "next"

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#4394AD", // Bright red from the lines
            secondary: "#2B6592", // The background color or off-white shade
            accent: "#D83367", // A slightly darker variant of the red
            text: {
              DEFAULT: "#262624",
              alt: "#9FA3A0",
            },
            background: "#efefef",
          },
        },
      },
    }),
  ],
}
