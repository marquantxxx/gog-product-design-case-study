/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        'neutral-1': '#1A1A1D',
        'neutral-2': '#1D1D20',
        'neutral-3': '#313134',
        'grey': '#AFAEAE',
        'primary': '#8953A5',
        'green': '#0B7B1F',
        'green-2': '#4ADE80',
        'green-3': '#1E2F26',
        'yellow-1': '#F7DA46',
        'yellow-2': '#332D1D',
      },
    },
  },
  plugins: [],
}


