import React from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Javascript as JavascriptIcon,
  GitHub as GitHubIcon,
  Storage as StorageIcon,
  Code as CodeIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  DesignServices as DesignServicesIcon,
  Http as HttpIcon,
} from '@mui/icons-material';
import cIcon from '../assets/images/CodeIcons/CIcon.png';
import PythonIcon from '../assets/images/CodeIcons/PythonIcon.png';
import csIcon from '../assets/images/CodeIcons/C#Icon.png';
import dockerIcon from '../assets/images/CodeIcons/DockerIcon.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Styles/Theme';


const experienceData = [
  {
    title: "Adept",
    skills: [
      { icon: <JavascriptIcon />, label: "JavaScript (ES6+)" },
      { icon: <GitHubIcon />, label: "GitHub" },
      { icon: <StorageIcon />, label: "MongoDB" },
      { icon: <StorageIcon />, label: "SQL" },
      { icon: <img src={PythonIcon} alt="Python" style={{ width: 24, height: 24 }} />, label: "Python" },
      { icon: <img src={cIcon} alt="C" style={{ width: 24, height: 24 }} />, label: "C" },
      { icon: <img src={csIcon} alt="C#" style={{ width: 24, height: 24 }} />, label: "C#" },
      { icon: <img src={dockerIcon} alt="Docker" style={{ width: 24, height: 24 }} />, label: "Docker" },
      
    ],
  },
  {
    title: "Intermediate",
    skills: [
      { icon: <HtmlIcon />, label: "HTML5" },
      { icon: <CssIcon />, label: "CSS3" },
    ],
  },
  {
    title: "Newbie",
    skills: [
      { icon: <HttpIcon />, label: "Express.js" },
    ],
  },
];
const ExperienceCard = ({ title, skills }) => (
  <Grid2 item xs={12} sm={6} md={4}>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <ListItemIcon>{skill.icon}</ListItemIcon>
              <ListItemText primary={skill.label} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  </Grid2>
);

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header /> {/* Add the Header */}

        {/* Hero Section */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            py: 5,
            textAlign: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            About Me
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

        {/* About Me Section */}
        <Container sx={{ py: 5, bgcolor: "black"}}>
          <Typography variant="h1" gutterBottom>
            About Me
          </Typography>
          <Grid2 container spacing={4} alignItems="center">
            <Grid2 item xs={12} md={6}>
              <Typography variant="body1">
                I'm a 5th-semester Software Technology student at Aarhus
                University. My primary focus is on Back-end development, where I
                enjoy building robust and scalable systems, but I’ve also explored
                other exciting areas of software engineering, including Front-end
                development, game development, and embedded systems.
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box sx={{ py: 5, bgcolor: "black" }}>
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
    </ThemeProvider>
  );
};

export default AboutPage;
