import React from "react";
import { Grid, Box, Paper, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import SectionTitle from "../../components/SectionTitle";
import { Icon } from "@iconify/react";
import { colorTheme } from "../../styles/themes";
import "./styles.css";
import skillItems from "./skillItems";

const Skills = () => {
  return (
    <section id="skills">
      <ThemeProvider theme={colorTheme}>
        <Grid
          id="skills__grid"
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box
            id="skills__grid__section-title"
            display="flex"
            flex={1}
            justifyContent="center"
            alignItems="flex-end"
          >
            <SectionTitle
              id="skills__grid__section-title__skills"
              title="skills"
            />
          </Box>
          <Grid container>
            {skillItems.map((skillItem) => (
              <Grid
                key={skillItem.key}
                container
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <Paper id="skill-card">
                  <Icon
                    icon={skillItem.icon}
                    style={{ fontSize: 44, ...skillItem.styles }}
                  />
                  <Typography variant="h6">{skillItem.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Skills;
