import React from "react";
import {useNavigate} from "react-router-dom";
import {Typography, Button, Container, Grid2, Box} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../Styles/Theme";

import {experienceData} from "../Data/experinceData";
import ExperienceCard from "../Components/ExperienceCard";
import {GradientBox} from "../Styles/BoxStyles";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{paddingY: 10}}>
            <Box sx={{py: 5, textAlign: "center"}}>
                <Typography variant="h2" gutterBottom>
                    Thomas Høgh Pedersen
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Learn more about me and my projects.
                </Typography>
            </Box>
            <Box sx={{py: 5, paddingX: 50}}>
                <Box
                    sx={{
                        border: "2px solid transparent", // Define the width of the border
                        borderImage: "linear-gradient(to right, red, yellow) 1", // Apply the gradient to the border
                        borderRadius: 40,
                        overflow: "hidden",
                        paddingX: 20,
                    }}
                >
                    {/* Hero Section */}
                    <Box sx={{py: 5}}>
                        <Container sx={{py: 5}}>
                            <Typography variant="h1" gutterBottom>
                                About Me
                            </Typography>
                            <Grid2 container spacing={4} alignItems="center">
                                <Grid2 item xs={12} md={6}>
                                    <Typography variant="body1">
                                        I'm a 6th-semester Software Technology student at Aarhus
                                        University. My primary focus is on Back-end development,
                                        where I enjoy building robust and scalable systems.
                                        <br/>
                                        <br/>
                                        In backend development, I have primarily worked with the
                                        ASP.NET including EF Core, Logging, DI, Middleware,
                                        Identity, Web API, and MVC environment and have developed
                                        a strong understanding of it.
                                        <br/>
                                        <br/>
                                        During my studies i have also worked with other areas of
                                        software engineering, including Front-end development,
                                        game development, embedded systems, algorithms, .
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Container>
                    </Box>
                </Box>
            </Box>
        </Box>
    );};

export default AboutPage;
