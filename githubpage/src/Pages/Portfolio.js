import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Styles/Theme";
import { GradientBox } from "../Styles/BoxStyles";
import { projectsData } from "../Data/projectData";
import ProjectCarousel from "../Components/ProjectCarousel/projectCarousel";

const Portfolio = () => {
  return (
      <Box sx={{ py: 5 }}>
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
      </Box>
  );
};

export default Portfolio;
