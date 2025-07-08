import React from "react";
import { Grid2, Card, CardContent, Typography, Box } from "@mui/material";
import { icons } from "../Data/experinceData"; // Import icons here

const ExperienceCard = ({ title, skills }) => (
  <Grid2 item xs={12}>
    <Card sx={{ backgroundColor: "transparent" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {title}
        </Typography>
        {/* Grid layout for skills */}
        <Grid2 container spacing={4} justifyContent="center">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon]; // Dynamically get the icon
            return (
              <Grid2 item xs={6} sm={4} md={3} key={index}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {typeof Icon === "string" ? (
                    <img
                      src={Icon}
                      alt={skill.label}
                      style={{ width: 48, height: 48 }}
                    />
                  ) : (
                    <Icon sx={{ width: 48, height: 48 }} />
                  )}
                  <Typography sx={{ ml: 1 }}>{skill.label}</Typography>
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
      </CardContent>
    </Card>
  </Grid2>
);

export default ExperienceCard;
