import React, { useState } from "react";
import { Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import { Card, CardContent, CardActions } from "@mui/material";
import { projectCardStyles } from "../Styles/BoxStyles"; // Import your style file

export const ProjectCard = ({ project }) => {
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
            {project.title}
          </Typography>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
        </CardContent>
      </Card>

      {/* Back Side */}
      <Card onClick={handleFlip} sx={projectCardStyles}>
        <CardContent>
          <Typography variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" component="p">
            {project.technologies}
          </Typography>
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
