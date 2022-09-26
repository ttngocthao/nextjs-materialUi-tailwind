/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "blue",
    dark: "navy",
  },
  secondary: {
    main: "#212121",
    dark: "#3A3A3A",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: themeConstants.primary,
        blue: "#00CBFF",
        darkblue: "#002233",
        darkteal: "#00324b",
        orange: "#FD9800",
        red: "#FF0000",
        paper: themeConstants.paper,
      },
    },
    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      ...defaultTheme.screens,
      ...themeConstants.breakpoints,
      ha: { raw: "(hover: hover)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
