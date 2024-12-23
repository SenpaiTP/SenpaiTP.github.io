import {
  Storage as StorageIcon,
  Html as HtmlIcon,
  Css as CssIcon,
  Http as HttpIcon,
} from "@mui/icons-material";

export const icons = {
  JsIcon: require("../assets/images/CodeIcons/JSIcon.png"),
  GitHubIcon: require("../assets/images/CodeIcons/GithubIcon.png"),
  MongoDBIcon: require("../assets/images/CodeIcons/MongoDBIcon.png"),
  StorageIcon,
  PythonIcon: require("../assets/images/CodeIcons/PythonIcon.png"),
  CIcon: require("../assets/images/CodeIcons/CIcon.png"),
  CsIcon: require("../assets/images/CodeIcons/CsIcon.png"),
  DockerIcon: require("../assets/images/CodeIcons/DockerIcon.png"),
  HtmlIcon,
  CssIcon,
  HttpIcon,
};

export const experienceData = [
  {
    title: "Adept",
    skills: [
      { icon: "CIcon", label: "C" },
      { icon: "CsIcon", label: "C#" },
      { icon: "DockerIcon", label: "Docker" },
    ],
  },
  {
    title: "Intermediate",
    skills: [
      { icon: "JsIcon", label: "Javascript" },
      { icon: "GitHubIcon", label: "GitHub" },
      { icon: "MongoDBIcon", label: "MongoDB" },
      { icon: "StorageIcon", label: "SQL" },
      { icon: "PythonIcon", label: "Python" },
    ],
  },
  {
    title: "Novice",
    skills: [
      { icon: "HtmlIcon", label: "HTML5" },
      { icon: "CssIcon", label: "CSS3" },
    ],
  },
];
