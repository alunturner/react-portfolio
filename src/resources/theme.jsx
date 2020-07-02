import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    // used to represent primary interface elements for a user
    // Cambridge blue: #a3c1ad
    primary: {
      main: "#a3c1ad", //Uppingham blue
    },
    // used to represent secondary interface elements for a user
    secondary: {
      main: "#5d8aa8", //RAF blue
    },
  },

  typography: {
    fontFamily: ["Major Mono Display", "Montserrat"].join(","),
    fontSize: 16,
    body1: {
      fontFamily: "Montserrat",
    },
  },

  // allows us to override css sheets in this file, instructions here https://material-ui.com/customization/globals/
  overrides: {},
});

theme = responsiveFontSizes(theme);

export default theme;
