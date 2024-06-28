/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#35B8BE',
        'hero-bgc': '#F5FBFC',
        'gray-description': '#546285',
        'accent': '#08090A',
      },
      spacing: {
        '120': '120px',
      },
      opacity: {
        '87': '0.87',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'custom': '1.5', // Adjust this value as needed
      },
    },
  },
  plugins: [],
}