/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#090D16',
          dark: '#111827',
          card: '#1F2937',
          blue: '#00A8FF',
          'blue-light': '#38BDF8',
          silver: '#CBD5E1',
          slate: '#94A3B8',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 168, 255, 0.25)',
        'glow-lg': '0 0 40px rgba(0, 168, 255, 0.3)',
        'glow-sm': '0 0 10px rgba(0, 168, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
