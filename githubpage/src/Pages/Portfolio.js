import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Styles/Theme';
import { Box, Container, Paper, TextField, Button, Typography, Grid2 } from "@mui/material";
import Header from "../Components/Header"; // Import the Header component
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Header /> {/* Add the Header */}
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" gutterBottom>
          Showcasing my skills and projects.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("/about")}
        >
          Learn More About Me
        </Button>
      </Box>

      {/* About Me Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 item xs={12} md={6}>
            <Typography variant="body1">
              Hi, I'm Thomas Høgh Pedersen, a 5th-semester Software Technology
              student at Aarhus University. My primary focus is on Back-end
              development, where I enjoy building robust and scalable systems,
              but I’ve also explored other exciting areas of software
              engineering, including Front-end development, game development,
              and embedded systems.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>

      {/* Contact Me Section */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Paper sx={{ p: 4 }}>
          <form>
            <Grid2 container spacing={3}>
              <Grid2 item xs={12} sm={6}>
                <TextField fullWidth label="Name" variant="outlined" required />
              </Grid2>
              <Grid2 item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" required />
              </Grid2>
              <Grid2 item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid2>
              <Grid2 item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </Paper>
      </Container>
      </ThemeProvider>
  );
};

export default Portfolio;
