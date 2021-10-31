import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./styles.css";

const PortfolioItem = ({ id, imgData, title, tech }) => {
  const animate = () => {
    const cover = document.getElementById(id);
    cover.style.opacity = 1;
  };

  const removeAnimate = () => {
    const cover = document.getElementById(id);
    cover.style.opacity = 0;
  };

  return (
    <div
      className="portfolio-img"
      onMouseOver={animate}
      onMouseLeave={removeAnimate}
      style={{
        width: "31%",
        position: "relative",
      }}
    >
      <div id={id} className="portfolio-cover">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="label" className="profile-item-title">
            {title}
          </Typography>
          <Typography variant="label" className="profile-item-tech">
            {tech}
          </Typography>
        </div>
        <Button color="primary" variant="outlined">
          Learn More
        </Button>
      </div>
      <img src={imgData} width="100%" />
    </div>
  );
};

export default PortfolioItem;
