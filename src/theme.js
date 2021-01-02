import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: {
      main: "#e05915",
      contrastText: "#fff",
    },
    secondary: {
      main: "#628078",
      contrastText: "#ffffff",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
};

export default createMuiTheme(theme);
