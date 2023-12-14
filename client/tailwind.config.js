import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lt: ['Oswald', 'sans-serif'],
        rt: ['Barlow Condense','sans-serif'] 
      },
      colors: {
        'gray': '#18181b',
        'black': '#020617',
        'offwhite' : '#d4d4d4',
        'main': '#3730a3',
      }
    },
  },
  plugins: [],
})