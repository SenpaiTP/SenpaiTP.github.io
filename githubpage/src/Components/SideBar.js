import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import { GradientBox } from "../Styles/BoxStyles";

const SideBar = () => {
    const menuItemStyle = {
        border: "2px solid transparent",
        borderImage: "linear-gradient(to right, red, yellow) 1",
        borderRadius: "10px",
        marginBottom: "10px",
        padding: "10px 16px", // horizontal padding to avoid touching edges
        fontWeight: "bold",
        width: "100%",
        boxSizing: "border-box",
        color: "white",
        // ensure padding doesn't overflow
    };

    return (
        <div style={{ display: "flex" }}>
            <GradientBox
                sx={{
                    position: "fixed",
                    top: 350,
                    left: 100,
                    height: "auto",
                    width: 250,
                    borderRadius: "20px",
                    overflow: "hidden",
                    padding: "2px", // inner padding to create space for border effect
                    zIndex: 1000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(to right, red, yellow)",
                    backgroundColor: "transparent",

                    // Use ::before to create true rounded border effect
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        padding: "2px", // border thickness
                        borderRadius: "20px",
                        background: "linear-gradient(to right, red, yellow)",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                        zIndex: -1,
                    },
                }}
            >
                <Sidebar
                    rootStyles={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Menu>
                        <MenuItem component={<Link to="/" />} style={menuItemStyle}>
                            Home
                        </MenuItem>
                        <MenuItem component={<Link to="/about" />} style={menuItemStyle}>
                            About
                        </MenuItem>
                        <MenuItem style={menuItemStyle}>Projects</MenuItem>
                        <MenuItem style={menuItemStyle}>Blog</MenuItem>
                        <MenuItem style={menuItemStyle}>Contact</MenuItem>
                    </Menu>
                </Sidebar>
            </GradientBox>

            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default SideBar;
