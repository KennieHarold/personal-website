import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import coverImg from "../../assets/cover-img.png";
import "./styles.css";

const Home = () => {
  return (
    <section id="home">
      <Grid
        id="home__grid"
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Box
          id="home__grid__item"
          className="home__grid__item"
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography id="home__grid__item__text1" variant="h5">
            Hi, I'm
          </Typography>
          <Box
            id="home__grid__item__text2"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <hr className='home--hrs' />
            <Typography id="home--kennie" variant="h2">
              Kennie Harold
            </Typography>
            <hr className='home--hrs' />
          </Box>
          <Typography id="home__grid__item__text3" variant="h4">
            I'm a software developer and I create beautiful apps
          </Typography>
          <Box
            id="home__grid__item__img"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img src={coverImg} alt="kennie harold" />
          </Box>
        </Box>
      </Grid>
    </section>
  );
};

export default Home;
