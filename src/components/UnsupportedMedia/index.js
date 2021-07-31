import React from "react";
import { Typography, Box, ThemeProvider } from "@material-ui/core";
import { colorTheme } from "../../styles/themes";
import "./styles.css";

const UnsupportedMedia = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <Box id="unsupported-media">
        <Typography
          variant="h2"
          align="center"
          style={{
            padding: 30,
            fontFamily: "YellowTail, cursive",
          }}
          color="primary"
        >
          Coming Soon!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default UnsupportedMedia;
