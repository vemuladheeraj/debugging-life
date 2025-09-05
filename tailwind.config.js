/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00E5FF',
          green: '#00FFA3',
          purple: '#B86BFF',
          orange: '#FF8A00',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};


