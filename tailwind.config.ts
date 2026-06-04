import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raw: {
          bg:            "#FAF8F5",
          card:          "#FFFFFF",
          surface:       "#F5F2EC",
          surface2:      "#EDE9E1",
          text:          "#2C2418",
          text2:         "#7A6B55",
          text3:         "#A89880",
          accent:        "#8B6B3D",
          "accent-light":"#F0E8DC",
          "accent-mid":  "#C4965A",
          red:           "#C44B2A",
          green:         "#4A7C59",
        },
      },
      borderRadius: {
        "2xl": "18px",
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "44px",
      },
      boxShadow: {
        "raw-sm": "0 1px 6px rgba(139,115,85,0.08)",
        "raw":    "0 2px 12px rgba(139,115,85,0.10)",
        "raw-lg": "0 8px 32px rgba(139,115,85,0.14)",
      },
      maxWidth: {
        "phone": "430px",
      },
    },
  },
  plugins: [],
};

export default config;
