/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        eikan: {
          blue: '#1E40AF',
          darkBlue: '#1E293B',
          green: '#15803D',
          gold: '#CA8A04',
          accent: '#0284C7',
        }
      }
    },
  },
  plugins: [],
}