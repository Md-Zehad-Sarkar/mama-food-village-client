import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC222",
      light: purple[600],
    },
    secondary: {
      main: "#FFC222",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          padding: "8px 18px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          padding: "8px 4px",
        },
      },
    },
  },
  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});

theme.shadows[1] = "0 10px 5px lightgray";
