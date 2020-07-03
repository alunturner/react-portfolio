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
    fontFamily: ["Major Mono Display", "Montserrat", "Reenie Beanie"].join(","),
    fontSize: 16,
    body1: {
      fontFamily: "Montserrat",
    },
    body2: {
      fontFamily: "Reenie Beanie",
    },
    //remove all this to css
    "@media (max-width: 420px)": {},
    "@media (max-width: 600px)": {},
    "@media (max-width: 960px)": {},
    "@media (max-width: 1280px)": {},
    "@media (max-width: 1920px)": {},
  },
});

theme = responsiveFontSizes(theme);

export default theme;
