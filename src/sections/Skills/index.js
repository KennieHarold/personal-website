import React from "react";
import { Grid, Box, Paper, Typography } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import SectionTitle from "../../components/SectionTitle";
import LinearProgressWithLabel from "../../components/LinearProgressWithLabel";
import { Icon } from "@iconify/react";
import { colorTheme } from "../../styles/themes";
import "./styles.css";
import skillItems from "./skillItems";

const useStyles = makeStyles({
  skillItemPaper: {
    width: screen.width / 2.8,
    minHeight: screen.height / 3.4,
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  skillIconContainer: {
    margin: 15,
  },
  skillItemTitle: {
    padding: 15,
    //marginBottom: 15,
  },
  skillItemTitleText: {
    fontWeight: 700,
  },
  skillItemTitleIcon: {
    fontSize: 35,
    marginRight: 10,
    color: "#41A6E7",
  },
  skillItemIconName: {
    fontWeight: 700,
    marginTop: 2,
  },
});

const Skills = () => {
  const classes = useStyles();

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
          <Box
            id="skills__grid__content"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            flexWrap="wrap"
            flex={9}
          >
            {skillItems.map((skillItem) => (
              <Paper
                id="skill--paper"
                key={skillItem.key}
                className={classes.skillItemPaper}
              >
                <LinearProgressWithLabel
                  color="secondary"
                  value={skillItem.rate}
                />
                <Box
                  display="flex"
                  flex={1}
                  width="100%"
                  flexDirection="column"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    className={classes.skillItemTitle}
                    flex={1}
                  >
                    <Icon
                      id="skill--title-icon"
                      icon={skillItem.titleIcon}
                      className={classes.skillItemTitleIcon}
                    />
                    <Typography
                      id="skill--title"
                      variant="h6"
                      color="textSecondary"
                      className={classes.skillItemTitleText}
                    >
                      {skillItem.title}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    alignContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                    flex={9}
                    style={{ marginTop: -20 }}
                  >
                    {skillItem.toolsList.map((tool) => (
                      <Box
                        className={classes.skillIconContainer}
                        key={tool.key}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Icon
                          id="skill--icon"
                          icon={tool.icon}
                          style={{
                            fontSize: 50,
                            color: tool.name === "Gspread" ? "#0F9855" : null,
                          }}
                        />
                        <Typography
                          variant="caption"
                          color="textSecondary"
                          className={classes.skillItemIconName}
                        >
                          {tool.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Skills;
