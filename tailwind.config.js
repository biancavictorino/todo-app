/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#503981",
        'secondary-color': "#FFF3FB",
        'tertiary-color': "#FAFFFB",
      }
    },
  },
  plugins: [],
}

