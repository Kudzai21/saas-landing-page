/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          fontFamily: {
              'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
          },
          colors: {
              primary: '#0B1215', // Use lowercase for consistency
              secondary: '#A34054',
              background: '#F1F4F9',
              accentBlue: '#E7EBFF',
              accentPurple: '#FFE3FF',
              accentOrange: '#FFFAE7',
          },
      },
  },
  plugins: [],
}