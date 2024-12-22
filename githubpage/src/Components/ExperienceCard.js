import React from "react";
import { Grid2, Card, CardContent, Typography, Box } from "@mui/material";
import {
  Storage as StorageIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Http as HttpIcon,
} from "@mui/icons-material";
const icons = {
  CIcon: require("../assets/images/CodeIcons/CIcon.png"),
  PythonIcon: require("../assets/images/CodeIcons/PythonIcon.png"),
  CsIcon: require("../assets/images/CodeIcons/CsIcon.png"),
  DockerIcon: require("../assets/images/CodeIcons/DockerIcon.png"),
  JsIcon: require("../assets/images/CodeIcons/JSIcon.png"),
  GitHubIcon: require("../assets/images/CodeIcons/GithubIcon.png"),
  MongoDBIcon: require("../assets/images/CodeIcons/MongoDBIcon.png"),
};

// Experience data
export const experienceData = [
  {
    title: "Adept",
    skills: [
      {
        icon: (
          <img src={icons.JsIcon} alt="JS" style={{ width: 24, height: 24 }} />
        ),
        label: "Javascript",
      },
      {
        icon: (
          <img
            src={icons.GitHubIcon}
            alt="GitHub"
            style={{ width: 24, height: 24 }}
          />
        ),
        label: "GitHub",
      },
      {
        icon: (
          <img
            src={icons.MongoDBIcon}
            alt="MongoDB"
            style={{ width: 24, height: 24 }}
          />
        ),
        label: "MongoDB",
      },
      { icon: <StorageIcon />, label: "SQL" },
      {
        icon: (
          <img
            src={icons.PythonIcon}
            alt="Python"
            style={{ width: 24, height: 24 }}
          />
        ),
        label: "Python",
      },
      {
        icon: (
          <img src={icons.CIcon} alt="C" style={{ width: 24, height: 24 }} />
        ),
        label: "C",
      },
      {
        icon: (
          <img src={icons.CsIcon} alt="C#" style={{ width: 24, height: 24 }} />
        ),
        label: "C#",
      },
      {
        icon: (
          <img
            src={icons.DockerIcon}
            alt="Docker"
            style={{ width: 24, height: 24 }}
          />
        ),
        label: "Docker",
      },
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
    title: "Novice",
    skills: [{ icon: <HttpIcon />, label: "Express.js" }],
  },
];

// Experience Card Component
export const ExperienceCard = ({ title, skills }) => (
  <Grid2 item xs={12}>
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* Grid layout for skills */}
        <Grid2 container spacing={7} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid2 item xs={6} sm={4} md={3} key={index}>
              <Box display="flex" flexDirection="column" alignItems="center">
                {React.cloneElement(skill.icon, {
                  style: {
                    width: 48, // Increase the width to 32 pixels
                    height: 48, // Increase the height to 32 pixels
                  },
                })}
                <Typography sx={{ ml: 1 }}>{skill.label}</Typography>
              </Box>
            </Grid2>
          ))}
        </Grid2>
      </CardContent>
    </Card>
  </Grid2>
);
