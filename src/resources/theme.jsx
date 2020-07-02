import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    // used to represent primary interface elements for a user
    // Cambridge blue: #a3c1ad
    primary: {
      main: "#005ba8", //Uppingham blue
    },
    // used to represent secondary interface elements for a user
    secondary: {
      main: "#5d8aa8", //RAF blue
    },
  },

  typography: {
    fontFamily: ["Major Mono Display", "Montserrat"].join(","),
    fontSize: 14,
    h2: {
      fontSize: 52,
      "@media screen and (min-width:1024px)": {
        fontSize: 44,
      },
      "@media screen and (min-width:768px)": {
        fontSize: 36,
      },
      "@media screen and (min-width:568px)": {
        fontSize: 24,
      },
      "@media screen and (min-width:320px)": {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 48,
      "@media screen and (min-width:1024px)": {
        fontSize: 40,
      },
      "@media screen and (min-width:768px)": {
        fontSize: 32,
      },
      "@media screen and (min-width:568px)": {
        fontSize: 24,
      },
      "@media screen and (min-width:320px)": {
        fontSize: 20,
      },
    },
    h4: {
      fontSize: 40,
      "@media screen and (min-width:1024px)": {
        fontSize: 32,
      },
      "@media screen and (min-width:768px)": {
        fontSize: 24,
      },
      "@media screen and (min-width:568px)": {
        fontSize: 18,
      },
      "@media screen and (min-width:320px)": {
        fontSize: 16,
      },
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: 32,
      "@media screen and (min-width:1024px)": {
        fontSize: 24,
      },
      "@media screen and (min-width:768px)": {
        fontSize: 18,
      },
      "@media screen and (min-width:568px)": {
        fontSize: 16,
      },
      "@media screen and (min-width:320px)": {
        fontSize: 12,
      },
    },
  },

  // allows us to override css sheets in this file, instructions here https://material-ui.com/customization/globals/
  overrides: {},
});

theme = responsiveFontSizes(theme);

export default theme;
