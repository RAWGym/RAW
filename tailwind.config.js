/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raw: {
          bg:             "#FAF8F5",
          card:           "#FFFFFF",
          surface:        "#F5F2EC",
          surface2:       "#EDE9E1",
          text:           "#2C2418",
          text2:          "#7A6B55",
          text3:          "#A89880",
          accent:         "#8B6B3D",
          "accent-light": "#F0E8DC",
          "accent-mid":   "#C4965A",
          red:            "#C44B2A",
          green:          "#4A7C59",
        },
      },
    },
  },
  plugins: [],
};
