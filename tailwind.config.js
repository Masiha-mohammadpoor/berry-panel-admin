const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        'span-15': 'span 15 / span 15',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr));',
      },
      colors : {
        primary : colors.violet,
        secondary : colors.sky,
        tertiary : colors.blue,
        error : colors.rose,
        warning : colors.amber,
        success : colors.green,
        body : "#eef2f6",
        light : colors.white
      }
    },
  },
  plugins: [],
};
