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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'slide': 'slide 1.5s',
        'flip': 'flip 1s'
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(-25%)' },
          'to': { transform: 'translateX(0)' }
        },
        flip: {
          'from': { transform: 'rotate(0)' },
          'to': { transform: 'rotateX(360deg)' }
        }
      }
    },
  },
  plugins: [],
};
export default config;
