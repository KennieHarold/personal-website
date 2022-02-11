import React from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";
import SectionTitle from "../../components/SectionTitle";
import PortfolioItem from "../../components/PortfolioItem";
import "./styles.css";
import gocart from "../../assets/gocart.jpg";
import lazymugss from "../../assets/lazymugss.png";
import findisport from "../../assets/findisport.png";
import powerfanStaking from "../../assets/powerfan-staking.png";
import capsule from "../../assets/capsule.png";
import ova from "../../assets/ova.png";

const portfolioItems = [
  {
    id: "portfolio-gocart",
    key: "portfolio-gocart",
    title: "GoCart Iloilo",
    imgData: gocart,
    tech: "React Native / Firebase",
  },
  {
    id: "portfolio-powerfan-staking",
    key: "portfolio-powerfan-staking",
    title: "PowerFan Staking",
    imgData: powerfanStaking,
    tech: "Node / Javascript / Ethereum",
  },
  {
    id: "portfolio-lazymugss",
    key: "portfolio-lazymugss",
    title: "Lazymugss",
    imgData: lazymugss,
    tech: "Shopify / Javascript",
  },
  {
    id: "portfolio-findisport",
    key: "portfolio-findisport",
    title: "FindiSport",
    imgData: findisport,
    tech: "React Native / Python / Firebase",
  },
  {
    id: "portfolio-capsule",
    key: "portfolio-capsule",
    title: "Capsule",
    imgData: capsule,
    tech: "React JS",
  },
  {
    id: "portfolio-ova",
    key: "portfolio-ova",
    title: "OVA Payroll",
    imgData: ova,
    tech: "React JS / Firebase",
  },
];

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
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            {portfolioItems.map((portfolioItem) => (
              <PortfolioItem
                id={portfolioItem.id}
                key={portfolioItem.key}
                imgData={portfolioItem.imgData}
                title={portfolioItem.title}
                tech={portfolioItem.tech}
              />
            ))}
          </Box>
        </Grid>
      </ThemeProvider>
    </section>
  );
};

export default Portfolio;
