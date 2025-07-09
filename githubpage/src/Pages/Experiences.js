import {Box, Container, Grid2, Typography} from "@mui/material";
import {experienceData} from "../Data/experinceData";
import ExperienceCard from "../Components/ExperienceCard";
import React from "react";
import theme from "../Styles/Theme";
import {ThemeProvider} from "@mui/material/styles";

export const ExperiencesPage = () => {
    return (
        <Box sx={{py: 5}}>
            <Container>
                <Typography variant="h2" gutterBottom sx={{textAlign: "center"}}>
                    Experience
                </Typography>
                <Grid2 container spacing={4} direction="column">
                    {experienceData.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}
                </Grid2>
            </Container>
        </Box>
    );
};
export default ExperiencesPage;