import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Container, Grid2, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Styles/Theme";

// Import the new components
import { experienceData, ExperienceCard } from "../Components/ExperienceCard";
import GradientBox from "../Styles/BoxStyles";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      {/* Header Section */}
      <Header />
      {/* Main Content Section with Border */}
      <GradientBox sx={{ paddingY: 10 }}>
        <Box sx={{ py: 5, textAlign: "center" }}>
          <Typography variant="h2" gutterBottom>
            Thomas Høgh Pedersen
          </Typography>
          <Typography variant="h5" gutterBottom>
            Learn more about me and my projects.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </Button>
        </Box>
        <Box sx={{ py: 5, paddingX: 30 }}>
          <Box
            sx={{
              border: "2px solid transparent", // Define the width of the border
              borderImage: "linear-gradient(to right, red, yellow) 1", // Apply the gradient to the border
              borderRadius: 40,
              overflow: "hidden",
              paddingX: 20,
            }}
          >
            {/* Hero Section */}
            <Box sx={{ py: 5 }}>
              <Container sx={{ py: 5 }}>
                <Typography variant="h1" gutterBottom>
                  About Me
                </Typography>
                <Grid2 container spacing={4} alignItems="center">
                  <Grid2 item xs={12} md={6}>
                    <Typography variant="body1">
                      I'm a 5th-semester Software Technology student at Aarhus
                      University. My primary focus is on Back-end development,
                      where I enjoy building robust and scalable systems, but
                      I’ve also explored other exciting areas of software
                      engineering, including Front-end development, game
                      development, and embedded systems.
                    </Typography>
                  </Grid2>
                </Grid2>
              </Container>
            </Box>

            {/* Experience Section */}
            <Box sx={{ py: 5 }}>
              <Container>
                <Typography variant="h2" gutterBottom>
                  Experience
                </Typography>
                <Grid2 container spacing={4}>
                  {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                  ))}
                </Grid2>
              </Container>
            </Box>
          </Box>
        </Box>
      </GradientBox>
    </ThemeProvider>
  );
};

export default AboutPage;
