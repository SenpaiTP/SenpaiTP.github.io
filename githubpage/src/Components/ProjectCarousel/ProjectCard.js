import React, { useState } from "react";
import { Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { Card, CardContent, CardActions } from "@mui/material";
import { projectCardStyles } from "../../Styles/BoxStyles"; // Import your style file

export const ProjectCard = ({ projectsData }) => {
  const [flip, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!flip);
  };

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      {/* Front Side */}
      <Card onClick={handleFlip} sx={projectCardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            {projectsData.title}
          </Typography>
          <Typography variant="body2" component="p">
            {projectsData.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Back Side */}
      <Card onClick={handleFlip} sx={projectCardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            {projectsData.title}
          </Typography>
          <Typography variant="body2" component="p">
            {projectsData.technologies}
          </Typography>
          {/* Conditionally render the link */}
          {projectsData.githubLink ? (
            <a
              href={projectsData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Github link to project
            </a>
          ) : null}
          <CardActions>
            <Typography variant="body2" color="white">
              Click anywhere to flip back.
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};
