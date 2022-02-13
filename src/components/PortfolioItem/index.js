import React from "react";
import { Button, Typography } from "@material-ui/core";
import "./styles.css";

const PortfolioItem = ({ id, imgData, title, tech, learnMore }) => {
  const animate = () => {
    const cover = document.querySelector(`#${id}`);
    const profileItemText = document.querySelector(`#${id} > div`);
    const learnMoreButton = document.querySelector(`#${id} > button`);

    profileItemText.classList.remove("animate-exit-profile-item-text");
    profileItemText.classList.add("animate-entrance-profile-item-text");

    learnMoreButton.classList.remove("animate-exit-learn-more-button");
    learnMoreButton.classList.add("animate-entrance-learn-more-button");

    cover.style.opacity = 1;
  };

  const removeAnimate = () => {
    const cover = document.querySelector(`#${id}`);
    const profileItemText = document.querySelector(`#${id} > div`);
    const learnMoreButton = document.querySelector(`#${id} > button`);

    profileItemText.classList.remove("animate-entrance-profile-item-text");
    profileItemText.classList.add("animate-exit-profile-item-text");

    learnMoreButton.classList.remove("animate-entrance-learn-more-button");
    learnMoreButton.classList.add("animate-exit-learn-more-button");

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
        display: "flex",
      }}
    >
      <div id={id} className="portfolio-cover">
        <div className="profile-item-text">
          <Typography variant="label" className="profile-item-title">
            {title}
          </Typography>
          <Typography
            variant="label"
            className="profile-item-tech"
            style={{ textAlign: "center" }}
          >
            {tech}
          </Typography>
        </div>
        <Button
          className="profile-item-learn-more"
          color="secondary"
          variant="outlined"
          onClick={learnMore}
        >
          Learn More
        </Button>
      </div>
      <img src={imgData} width="100%" />
    </div>
  );
};

export default PortfolioItem;
