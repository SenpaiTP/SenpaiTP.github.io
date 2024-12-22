import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Styles/Theme';
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/about")}>
          About
        </Button>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
