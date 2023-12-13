/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lt: ['Oswald', 'sans-serif'],
        rt: ['Barlow Condense','sans-serif'] 
      }
    },
  },
  plugins: [],
}