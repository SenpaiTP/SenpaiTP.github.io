import React from "react";
import {
  Grid2,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Javascript as JavascriptIcon,
  GitHub as GitHubIcon,
  Storage as StorageIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Http as HttpIcon,
} from "@mui/icons-material";
import cIcon from "../assets/images/CodeIcons/CIcon.png";
import PythonIcon from "../assets/images/CodeIcons/PythonIcon.png";
import csIcon from "../assets/images/CodeIcons/C#Icon.png";
import dockerIcon from "../assets/images/CodeIcons/DockerIcon.png";

// Experience data
export const experienceData = [
  {
    title: "Adept",
    skills: [
      { icon: <JavascriptIcon />, label: "JavaScript (ES6+)" },
      { icon: <GitHubIcon />, label: "GitHub" },
      { icon: <StorageIcon />, label: "MongoDB" },
      { icon: <StorageIcon />, label: "SQL" },
      {
        icon: (
          <img
            src={PythonIcon}
            alt="Python"
            style={{ width: 24, height: 24 }}
          />
        ),
        label: "Python",
      },
      {
        icon: <img src={cIcon} alt="C" style={{ width: 24, height: 24 }} />,
        label: "C",
      },
      {
        icon: <img src={csIcon} alt="C#" style={{ width: 24, height: 24 }} />,
        label: "C#",
      },
      {
        icon: (
          <img
            src={dockerIcon}
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
    title: "Newbie",
    skills: [{ icon: <HttpIcon />, label: "Express.js" }],
  },
];

// Experience Card Component
export const ExperienceCard = ({ title, skills }) => (
  <Grid2 item xs={12} sm={6} md={4}>
    <Card sx={{ backgroundColor: "transparent" }}>
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
