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
  backgroundColor: "black", // Dark background for contrast
  color: "white", // White text
  width: "300px", // Fixed width
  height: "400px", // Fixed height
  display: "flex", // Center content
  flexDirection: "column", // Align items vertically
  // justifyContent: "center", // Center content vertically
  alignItems: "center", // Center cntent horizontally
});
