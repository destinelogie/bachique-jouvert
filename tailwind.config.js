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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        smokeSlow: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(80px, 60px) scale(1.15)' },
        },
        smokeReverse: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-90px, -50px) scale(1.2)' },
        },
        smokeDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(50px, -80px) rotate(180deg) scale(1.1)' },
        },
      },
      animation: {
        'smoke-slow': 'smokeSlow 18s ease-in-out infinite',
        'smoke-reverse': 'smokeReverse 22s ease-in-out infinite',
        'smoke-drift': 'smokeDrift 25s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
