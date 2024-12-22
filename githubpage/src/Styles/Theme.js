import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black primary color
    },
    secondary: {
      main: "#ffffff", // White secondary color
    },
    custom: {
      main: "#333333",
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#ffffff", // White color for headings
    },
    h2: {
      fontWeight: 500,
      color: "#ffffff", // White color for headings
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#ffffff", // Black color for body text
    },
  },
  spacing: 8,
  components: {
    // Override the Card component
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Black background for the Card
          color: "#ffffff", // White text color
        },
      },
    },
  },
});

export default theme;
