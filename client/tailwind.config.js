import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lt: ["Oswald", "sans-serif"],
        rt: ["Barlow Condense", "sans-serif"],
      },
      colors: {
        offwhite: "#d4d4d4",
        main: "#3730a3",
      },
    },
    screens: {
      xs: {'max': "320px"},
      sm: {'max': "640px"},
      md: {'max': "768px"},
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
});
