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
    marginBottom: "1rem",
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
    title: "Blockchain Developer",
    inst: "PowerFan.io via Stacktrek Enterprise, Iloilo City",
    date: "February 2022 - Present",
    desc: [
      {
        key: "timelineItem1-desc-1",
        text: `- Successfully launched a slot machine gambling dapp with a two-level referral system which uses Chainlink for generating randomness for Solaire Resort & Casino. `,
      },
      {
        key: "timelineItem1-desc-2",
        text: "- Worked with ZK proofs by forking the tornado cash repository and built our own cryptocurrency mixing service with a two-level referral system.",
      },
    ],
  },
  {
    key: "timelineItem2",
    title: "Blockchain Developer",
    inst: "PartArk of Dreams, Metaverse · Part-time",
    date: "March 2022 - June 2022",
    desc: [
      {
        key: "timelineItem2-desc-1",
        text: "- Refactored smart contracts by converting them into UUPS upgradeable using the Openzeppelin library.",
      },
    ],
  },
  {
    key: "timelineItem3",
    title: "Software Developer",
    inst: "Stacktrek Enterprise, Iloilo City",
    date: "July 2019 - February 2022",
    desc: [
      {
        key: "timelineItem3-desc-1",
        text: "- Worked in an Agile-driven environment to effectively maintain project timelines and utilize available resources.",
      },
      {
        key: "timelineItem3-desc-2",
        text: "- Worked and collaborated with a group of software engineers on designing, researching, testing, and maintaining software for clients, either web-based or mobile-based.",
      },
    ],
  },
  {
    key: "timelineItem4",
    title: "Web Scraping Developer / Programmer",
    inst: "Outsourcing Virtual Agents, Iloilo City",
    date: "January 2020 - June 2020 · Part-time",
    desc: [],
  },
  {
    key: "timelineItem5",
    title: "BS In Computer Science",
    inst: "Garcia College of Technology, Kalibo Aklan",
    date: "June 2015 - April 2019",
    desc: [],
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
                      {/* <Box
                        id="timeline--divider"
                        className={classes.timelineItemDivider}
                      /> */}
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
