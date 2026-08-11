/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPink: '#FF2A85',
        brandPurple: '#8B3AEE',
        brandBlue: '#4CC9F0',
      },
    },
  },
  plugins: [],
}
