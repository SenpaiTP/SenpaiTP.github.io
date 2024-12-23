import React from "react";
import { Box } from "@mui/material";

// GradientBox component to apply a gradient background
export const GradientBox = ({ children, sx = {} }) => (
  <Box
    sx={{
      ...sx, // Spread custom styles passed via sx
      backgroundImage:
        "linear-gradient(to bottom right, rgb(30, 0, 69) 1%, black 100%)",
      color: "white", // Default white text
    }}
  >
    {children}
  </Box>
);

// projectCardStyles for card styling, with sx flexibility
export const projectCardStyles = (sx = {}) => ({
  cursor: "pointer",
  borderRadius: "20px", // Rounded corners
  backgroundColor: "rgb(143, 98, 70)", // Dark background for contrast
  color: "black", // Black text
  width: "100%", // Allow the carousel to control the width
  maxWidth: "300px", // Limit maximum width
  height: "400px", // Fixed height
  display: "flex", // Center content
  flexDirection: "column", // Align items vertically
  alignItems: "center", // Center content horizontally
  margin: "auto", // Center within the carousel
  boxSizing: "border-box", // Include padding/borders in dimensions
});
