import React from "react";
import { Grid, Box, Typography, makeStyles } from "@material-ui/core";
import SectionTitle from "../../components/SectionTitle";
import ProfilePic from "../../assets/pp_300.png";
import CircularProgressWithLabel from "../../components/CircularProgressWithLabel";
import "./styles.css";

const useStyles = makeStyles({
  aboutProfilePicture: {
    height: 175,
    width: 175,
  },
  aboutWhoAmI: {
    marginTop: 20,
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
  },
  aboutDesc: {
    fontSize: "1rem",
    textAlign: "left",
    marginTop: 10,
    fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
    width: "85%",
  },
  aboutCircleTitles: {
    width: "100%",
    fontFamily: "Roboto, sans-serif !important",
    fontWeight: "bolder !important",
    fontSize: "1.9rem !important",
  },
  aboutCircleCaptions: {
    width: "100%",
    fontSize: "1.05rem !important",
    fontFamily: "Open Sans, Arial, Helvetica, sans-serif !important",
    paddingLeft: 15,
    paddingRight: 15,
  },
});

const graphItems = [
  {
    key: "about__grid__content__grid__graph__item__creativity",
    title: "Creativity",
    caption:
      "Accurate with innovative mindset, attentive to details while keeping in track of the fast changing trends.",
    circleColor: "#FDA702",
    circleRate: 70,
  },
  {
    key: "about__grid__content__grid__graph__item__skill",
    title: "Skill",
    caption:
      "3-year dedicated software developer manage to earn problem solving skills with excellent time management and organizational skills.",
    circleColor: "#55CB97",
    circleRate: 80,
  },
  {
    key: "about__grid__content__grid__graph__item__passion",
    title: "Passion",
    caption:
      "Love to work with projects that gives new learnings which stimulates my curiousiy and boosts my self-esteem.",
    circleColor: "#41A6E7",
    circleRate: 90,
  },
];

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Grid
        id="about__grid"
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box
          id="about__grid__section-title"
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
        >
          <SectionTitle id="about__grid__section-title__about" title="about" />
        </Box>
        <Grid
          id="about__grid__content"
          justify="center"
          alignItems="center"
          container
        >
          <Grid
            className="about__grid__content__grid"
            container
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Box
              id="about__grid__content__grid__desc"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                id="about--profile"
                className={classes.aboutProfilePicture}
                src={ProfilePic}
              />
              <Typography
                className={classes.aboutWhoAmI}
                variant="h5"
                color="primary"
              >
                Who am I?
              </Typography>
              <Typography
                id="about--desc"
                className={classes.aboutDesc}
                color="textSecondary"
              >
                I remember the day at high school when I successfully run my
                first script written in Batch. It is a quiz app containing ten
                items and saves your highest score to a file. I was fascinated
                by how a simple notepad file can do amazing things. On that day,
                I discovered programming and start searching on Google, "What is
                the hardest programming language to learn?". For your curiosity,
                Google says C++. Without hesitation, I quickly started my laptop
                and began learning the language. It was easy at first until I
                encountered pointers. :D <br />
                <br /> My passion drives me to choose Computer Science as my
                degree. I didn't waste my time learning different languages and
                frameworks. Most of my friends have a collection of anime shows
                on their laptops, while I have a collection of Indian tutorials
                about programming. I created different websites, mobile apps,
                and desktop apps and joined programming competitions online. It
                drastically enhanced my programming skills, most especially in
                designing algorithms. <br />
                <br /> Now that I'm in the tech industry, my passion still lives
                with me. I know there are more technologies to learn, more
                projects to build, more documentations to read, and more bugs to
                debug, but it will be awesome.
              </Typography>
            </Box>
          </Grid>
          <Grid
            className="about__grid__content__grid"
            container
            item
            justify="flex-end"
            lg={6}
            md={6}
            sm={12}
            xs={12}
          >
            <Box
              id="about__grid__content__grid__graph"
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              alignItems="center"
            >
              {graphItems.map((graphItem) => (
                <Grid
                  key={graphItem.key}
                  id={graphItem.key}
                  className="about--graph-item"
                  container
                >
                  <Grid
                    id="about--circles"
                    justify="center"
                    alignItems="center"
                    container
                    item
                    lg={3}
                  >
                    <CircularProgressWithLabel
                      value={graphItem.circleRate}
                      size={150}
                      textsize={30}
                      customcolor={graphItem.circleColor}
                    />
                  </Grid>
                  <Grid container item lg={9} style={{ textAlign: "center" }}>
                    <Typography
                      id="about--circle-title"
                      className={classes.aboutCircleTitles}
                      color="primary"
                    >
                      {graphItem.title}
                    </Typography>
                    <Typography
                      id="about--circle-caption"
                      className={classes.aboutCircleCaptions}
                      color="textSecondary"
                    >
                      {graphItem.caption}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
