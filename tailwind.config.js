/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(75deg, rgb(40,58,88) 0%, rgb(54,69,98) 100%)',
        'custom-gradient-2': 'linear-gradient(180deg, rgba(54,69,98,0) 10%, rgba(54,69,98,1) 100%)'
      }
    },
  },
  plugins: [],
}