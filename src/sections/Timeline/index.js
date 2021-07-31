import React from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import {
  Timeline as Timeline_,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import SectionTitle from "../../components/SectionTitle";
import { colorTheme } from "../../styles/themes";
import "./styles.css";

const useStyles = makeStyles({
  timelineItemContainer: {
    padding: 15,
  },
  timelineItemTitle: {
    fontWeight: 700,
    marginBottom: "2rem",
  },
  timelineItemInst: {
    fontWeight: 700,
  },
  timelineItemDate: {},
  timelineItemDesc: {
    marginBottom: 7,
  },
});

const timelineItems = [
  {
    key: "timelineItem1",
    title: "Software Developer",
    inst: "Stacktrek Enterprise, Iloilo City",
    date: "July 2019 - Present",
    desc: [
      {
        key: "timelineItem1-desc1",
        text: "- Worked in Agile-driven environment to effectively maintain project timelines and utilize available resources.",
      },
      {
        key: "timelineItem1-desc2",
        text: "- Designed responsive UI/UX layouts to meet usability and performance requirements.",
      },
      {
        key: "timelineItem1-desc3",
        text: "- Coded and maintained RESTful APIs using Node.js, Express.js for web applications and mobile applications.",
      },
      {
        key: "timelineItem1-desc4",
        text: "- Wrote web scrapers to collect dress images data for a fashion recommender system.",
      },
      {
        key: "timelineItem1-desc5",
        text: "- Wrote and executed effective tests and carried out manual testing to assess website performance.",
      },
    ],
  },
  {
    key: "timelineItem2",
    title: "Programmer",
    inst: "Outsourcing Virtual Agents, Iloilo City",
    date: "January 2020 - June 2020",
    desc: [
      {
        key: "timelineItem2-desc1",
        text: "- Wrote web scrapers to collect house owner and property data for lead generation.",
      },
      {
        key: "timelineItem2-desc2",
        text: "- Designed, built and maintained company's payroll system",
      },
    ],
  },
  {
    key: "timelineItem3",
    title: "BS In Computer Science",
    inst: "Garcia College of Technology, Kalibo Aklan",
    date: "June 2015 - April 2019",
    desc: [
      {
        key: "timelineItem3-desc1",
        text: "- 4th Year Vice President GCT-ITE Department",
      },
    ],
  },
];

const Timeline = () => {
  const classes = useStyles();

  return (
    <section id="timeline">
      <ThemeProvider theme={colorTheme}>
        <Grid
          id="timeline__grid"
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Box
            id="timeline__grid__section-title"
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <SectionTitle
              id="timeline__grid__section-title__timeline"
              title="timeline"
            />
          </Box>
          <Box
            id="timeline__grid__content"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Timeline_ align="alternate">
              {timelineItems.map((timelineItem) => (
                <TimelineItem key={timelineItem.key}>
                  <TimelineSeparator id="timeline--separator">
                    <TimelineDot color="primary" />
                    <TimelineConnector color="primary" />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper
                      id="timeline--paper"
                      //className={classes.timelineItemPaper}
                      elevation={3}
                    >
                      <Box
                        id="timeline--divider"
                        //className={classes.timelineItemDivider}
                      />
                      <Box className={classes.timelineItemContainer}>
                        <Typography
                          className={classes.timelineItemTitle}
                          variant="h6"
                          color="primary"
                        >
                          {timelineItem.title}
                        </Typography>

                        <Typography
                          className={classes.timelineItemInst}
                          color="textSecondary"
                        >
                          {timelineItem.inst}
                        </Typography>
                        <Typography
                          className={classes.timelineItemDate}
                          color="textSecondary"
                        >
                          {timelineItem.date}
                        </Typography>

                        <Box
                          display="flex"
                          flexDirection="column"
                          style={{ marginTop: 15 }}
                        >
                          {timelineItem.desc.map((timelineItemDesc) => (
                            <Typography
                              key={timelineItemDesc.key}
                              className={classes.timelineItemDesc}
                              color="textSecondary"
                            >
                              {timelineItemDesc.text}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline_>
          </Box>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Timeline;
