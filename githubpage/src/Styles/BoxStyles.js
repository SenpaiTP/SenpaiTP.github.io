import React from "react";
import { Box } from "@mui/material";

const GradientBox = ({ children, sx = {} }) => (
  <Box
    sx={{
      ...sx,
      backgroundImage:
        "linear-gradient(to bottom right, rgb(20, 2, 43) 1%, black 100%)",
      color: "white",
    }}
  >
    {children}
  </Box>
);

export default GradientBox;
