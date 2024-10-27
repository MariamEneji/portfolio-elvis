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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#edb5bf",
        secondary: "#4d6d9a",
        tertiary: "#86b3d1",
        support: "#5f6366",
        supporttwo: "#99c3d3",
      },
    },
  },
  plugins: [],
};
