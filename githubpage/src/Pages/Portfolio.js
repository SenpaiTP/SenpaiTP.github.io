import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Grid2,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Styles/Theme";
import { GradientBox } from "../Styles/BoxStyles";
import { ProjectCard } from "../Components/ProjectCard";
import Header from "../Components/Header";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: "React, JavaScript, CSS",
    githubLink: "https://github.com/project1",
    liveLink: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: "React, TypeScript, Node.js",
    githubLink: "https://github.com/project2",
    liveLink: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    technologies: "React, TypeScript, Node.js",
    githubLink: "https://github.com/project2",
    liveLink: "https://project2.com",
  },
  // Add more project objects as needed
];
const Portfolio = () => {
  const navigate = useNavigate();

  // Sample project dat
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
        <Container>
          <Grid2 container spacing={1}>
            {projects.map((project, index) => (
              <Grid2 item xs={12} sm={6} md={4} key={index}>
                <ProjectCard project={project} />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </GradientBox>
      {/* Projects Section */}
    </ThemeProvider>
  );
};

export default Portfolio;
