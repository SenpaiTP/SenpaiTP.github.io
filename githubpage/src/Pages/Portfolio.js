import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Styles/Theme";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid2,
} from "@mui/material";
import Header from "../Components/Header"; // Import the Header component
import { useNavigate } from "react-router-dom";
import GradientBox from "../Styles/BoxStyles";
const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Header /> {/* Add the Header */}
      {/* Hero Section */}
      <GradientBox sx={{ paddingY: 10 }}>
        <Box sx={{ py: 5, textAlign: "center" }}>
          <Typography variant="h2" gutterBottom>
            My Portfolio
          </Typography>
          <Typography variant="h5" gutterBottom>
            A collection of my projects and experiences.
          </Typography>
        </Box>
      </GradientBox>
    </ThemeProvider>
  );
};

export default Portfolio;
