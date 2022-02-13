import React, { useState } from "react";
import { Grid, Box, Typography, Modal, Button, Fade } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { ThemeProvider } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";
import SectionTitle from "../../components/SectionTitle";
import PortfolioItem from "../../components/PortfolioItem";
import { Icon } from "@iconify/react";
import closeSmall from "@iconify/icons-ci/close-small";
import externalLink from "@iconify/icons-ci/external-link";
import "./styles.css";

//  Image assets
import gocart from "../../assets/gocart.jpg";
import gocart1 from "../../assets/gocart-1.png";
import gocart2 from "../../assets/gocart-2.png";
import gocart3 from "../../assets/gocart-3.png";
import gocart4 from "../../assets/gocart-4.png";

import powerfanStaking from "../../assets/powerfan-staking.png";
import powerfanStaking1 from "../../assets/powerfan-staking-1.png";
import powerfanStaking2 from "../../assets/powerfan-staking-2.png";

import lazymugss from "../../assets/lazymugss.png";
import lazymugss1 from "../../assets/lazymugss-1.png";
import lazymugss2 from "../../assets/lazymugss-2.png";
import lazymugss3 from "../../assets/lazymugss-3.png";

import findisport from "../../assets/findisport.png";
import findisport1 from "../../assets/findisport-1.png";
import findisport2 from "../../assets/findisport-2.png";
import findisport3 from "../../assets/findisport-3.png";
import findisport4 from "../../assets/findisport-4.png";
import findisport5 from "../../assets/findisport-5.png";
import findisport6 from "../../assets/findisport-6.png";

import capsule from "../../assets/capsule.png";
import capsule1 from "../../assets/capsule-1.png";
import capsule2 from "../../assets/capsule-2.png";
import capsule3 from "../../assets/capsule-3.png";
import capsule4 from "../../assets/capsule-4.png";

import ova from "../../assets/ova.png";
import ova1 from "../../assets/ova-1.jpg";
import ova2 from "../../assets/ova-2.png";
import ova3 from "../../assets/ova-3.png";

const portfolioItems = [
  {
    id: "portfolio-gocart",
    key: "portfolio-gocart",
    title: "GoCart Iloilo",
    imgData: gocart,
    tech: "React Native / Firebase",
    type: "Online Grocery App",
    desc: "GoCart Iloilo is an online grocery delivery service that aims to ensure fast, convenient, and safe delivery of groceries right at your doorstep.",
    link: "https://play.google.com/store/apps/details?id=com.gocartiloilo",
    imgList: [gocart1, gocart2, gocart3, gocart4],
  },
  {
    id: "portfolio-powerfan-staking",
    key: "portfolio-powerfan-staking",
    title: "PowerFan Staking",
    imgData: powerfanStaking,
    tech: "Node / Javascript / Ethereum",
    type: "Staking Platform",
    desc: "PowerFan Staking is a multi-chain platform that incentivizes investors by providing PFAN/ETH liquidity on Uniswap",
    link: "https://powerfan.io/staking",
    imgList: [powerfanStaking1, powerfanStaking2],
  },
  {
    id: "portfolio-lazymugss",
    key: "portfolio-lazymugss",
    title: "Lazymugss",
    imgData: lazymugss,
    tech: "Shopify / Javascript",
    type: "Ecommerce Website",
    desc: "Lazymugss is a dropshipping website of high quality self-stirring mugs with PayPal integration and realtime parcel tracker",
    link: "https://lazymugss.com",
    imgList: [lazymugss1, lazymugss2, lazymugss3],
  },
  {
    id: "portfolio-findisport",
    key: "portfolio-findisport",
    title: "FindiSport",
    imgData: findisport,
    tech: "React Native / Python / Firebase",
    type: "Coach Pairing App",
    desc: "FindiSport is a one-stop platform for sports activities and coach pairing, which helps students to find the right coach in any kind of sport, making exercise and learning easier",
    subtitle: "- Contributed as a mobile app developer",
    link: "https://play.google.com/store/apps/details?id=com.findi",
    imgList: [
      findisport1,
      findisport2,
      findisport3,
      findisport4,
      findisport5,
      findisport6,
    ],
  },
  {
    id: "portfolio-capsule",
    key: "portfolio-capsule",
    title: "Capsule",
    imgData: capsule,
    tech: "React JS",
    type: "Virtual Online Closet with Recommender System",
    desc: "Capsule is a virtual online closet that curates your personalized virtual wardrobe using a machine learning algorithm",
    subtitle: "- Contributed as a frontend developer",
    imgList: [capsule1, capsule2, capsule3, capsule4],
  },
  {
    id: "portfolio-ova",
    key: "portfolio-ova",
    title: "OVA Payroll",
    imgData: ova,
    tech: "React JS / Firebase",
    type: "Payroll System",
    desc: "OVA Payroll is a platform that allows employees to track their attendance by timing in and timing out, submit daily reports, request leaves, and view payslips",
    imgList: [ova1, ova2, ova3],
  },
];

const styles = {
  closeButton: {
    position: "absolute",
    zIndex: 9,
    top: 5,
    right: 5,
    fontSize: 35,
    cursor: "pointer",
    color: "gray",
  },
};

const Portfolio = () => {
  const [modal, showModal] = useState(false);
  const [portfolioIndex, setPortfolioIndex] = useState(0);

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
            {portfolioItems.map((portfolioItem, index) => (
              <PortfolioItem
                id={portfolioItem.id}
                key={portfolioItem.key}
                imgData={portfolioItem.imgData}
                title={portfolioItem.title}
                tech={portfolioItem.tech}
                learnMore={() => {
                  setPortfolioIndex(index);
                  showModal(true);
                }}
              />
            ))}
          </Box>
        </Grid>
        <Modal
          open={modal}
          aria-hidden="true"
          tabIndex="-1"
          style={{ overflowY: "auto" }}
          onBackdropClick={() => showModal(false)}
          closeAfterTransition
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modal}>
            <Box
              id="portfolio__modal-body"
              style={{
                backgroundColor: "white",
                width: "33%",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <Icon
                icon={closeSmall}
                style={styles.closeButton}
                onClick={() => showModal(false)}
              />
              <Carousel
                showStatus={false}
                showThumbs={false}
                dynamicHeight={false}
              >
                {portfolioItems[portfolioIndex].imgList.map((img, index) => (
                  <img key={`portfolio-img-${index}`} src={img} />
                ))}
              </Carousel>
              <Box style={{ padding: "1.5em", borderTop: "2px solid black" }}>
                <Box
                  style={{
                    fontFamily: "Open Sans, Arial, Helvetica, sans-serif",
                    borderBottom: "1px solid lightgray",
                    paddingBottom: "1em",
                    marginBottom: "1em",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{ fontWeight: "700", marginBottom: "0.2em" }}
                  >
                    {portfolioItems[portfolioIndex].title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    style={{ fontWeight: "700" }}
                  >
                    {portfolioItems[portfolioIndex].type}
                  </Typography>
                  {portfolioItems[portfolioIndex].subtitle &&
                  portfolioItems[portfolioIndex].subtitle !== "" ? (
                    <Typography
                      color="textSecondary"
                      style={{
                        marginTop: "0.6em",
                        fontSize: 13,
                        fontStyle: "italic",
                      }}
                    >
                      {portfolioItems[portfolioIndex].subtitle}
                    </Typography>
                  ) : null}
                </Box>
                <Typography
                  color="textSecondary"
                  style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: 14,
                  }}
                >
                  {portfolioItems[portfolioIndex].desc}
                </Typography>
                {portfolioItems[portfolioIndex].link &&
                portfolioItems[portfolioIndex].link !== "" ? (
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="row"
                    style={{ marginTop: "1.5em" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      disableElevation
                      style={{ color: "white" }}
                      href={portfolioItems[portfolioIndex].link}
                      target="_blank"
                    >
                      <Icon
                        style={{ fontSize: 20, marginRight: 5 }}
                        icon={externalLink}
                      />
                      <span>View App</span>
                    </Button>
                  </Box>
                ) : null}
              </Box>
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </section>
  );
};

export default Portfolio;
