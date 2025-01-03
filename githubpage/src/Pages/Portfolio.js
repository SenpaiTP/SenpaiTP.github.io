import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Styles/Theme";
import { GradientBox } from "../Styles/BoxStyles";
import Header from "../Components/Header";
import { projectsData } from "../Data/projectData";
import ProjectCarousel from "../Components/ProjectCarousel/projectCarousel";

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header /> {/* Add the Header */}
      {/* Hero Section */}
      <GradientBox sx={{ paddingY: 10, paddingX: 40 }}>
        <Box sx={{ py: 5, textAlign: "center" }}>
          <Typography variant="h2" gutterBottom>
            Portfolio
          </Typography>
          <Typography variant="h5" gutterBottom>
            A collection of my projects and experiences.
          </Typography>
        </Box>
        <Container>
          <ProjectCarousel projectsData={projectsData} />
        </Container>
      </GradientBox>
    </ThemeProvider>
  );
};

export default Portfolio;
