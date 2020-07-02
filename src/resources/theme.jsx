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
    "@media (max-width: 420px)": {
      fontSize: "0.1rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "0.8rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.1rem",
    },
    "@media (max-width: 1280px)": {
      fontSize: "1.3rem",
    },
    "@media (max-width: 1920px)": {
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "Montserrat",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
