/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:      '#1A1612',
        espresso: '#2E2118',
        amber:    '#A8651F',
        wheat:    '#EDD9B4',
        cream:    '#FDF9F3',
        stone:    '#6B6059',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
