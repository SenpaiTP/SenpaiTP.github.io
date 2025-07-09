import React, {useEffect} from "react";
import {Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import {GradientBox} from "../Styles/BoxStyles";
import {menuItemStyle, gradientBoxStyle} from "../Styles/SideBarStyle";
import {Link, useLocation} from "react-router-dom";
import theme from "../Styles/Theme";

import AboutPage from "./About";
import Portfolio from "./Portfolio";
import ExperiencesPage from "./Experiences";
import {ThemeProvider} from "@mui/material/styles";

const MainPage = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.pathname.replace("/", "") || "about"; // fallback to "about"
        const section = document.getElementById(hash);
        if (section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }, [location]);

    return (
        <div style={{display: "flex", backgroundColor: "transparent"}}>
            <ThemeProvider theme={theme}>
                <GradientBox sx={{flex: 1, backgroundColor: "transparent"}}>
                    <GradientBox sx={gradientBoxStyle}>
                        <Sidebar
                            rootStyles={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: "transparent",
                            }}
                        >
                            <Menu>
                                <Link to="/about" style={{textDecoration: "none", color: "inherit"}}>
                                    <MenuItem style={menuItemStyle}>About</MenuItem>
                                </Link>
                                <Link to="/portfolio" style={{textDecoration: "none", color: "inherit"}}>
                                    <MenuItem style={menuItemStyle}>Portfolio</MenuItem>
                                </Link>
                                <Link to="/experiences" style={{textDecoration: "none", color: "inherit"}}>
                                    <MenuItem style={menuItemStyle}>Experience</MenuItem>
                                </Link>

                            </Menu>
                        </Sidebar>
                    </GradientBox>

                    {/* One-page layout rendering */}
                    <div style={{flex: 1, overflowY: "auto", scrollBehavior: "smooth"}}>
                        <section id="about">
                            <AboutPage/>
                        </section>
                        <section id="portfolio">
                            <Portfolio/>
                        </section>
                        <section id="experiences">
                            <ExperiencesPage/>
                        </section>
                    </div>
                </GradientBox>
            </ThemeProvider>
        </div>
    );
};

export default MainPage;
