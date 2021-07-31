import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";
import SectionTitle from "../../components/SectionTitle";
import "./styles.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <ThemeProvider theme={colorTheme}>
        <Grid
          id="portfolio__grid"
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box
            id="portfolio__grid__section-title"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <SectionTitle
              id="portfolio__grid__section-title__portfolio"
              title="portfolio"
            />
          </Box>
          <Box
            id="portfolio__grid__content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              id="portfolio--comingsoon"
              variant="h1"
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
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Portfolio;
