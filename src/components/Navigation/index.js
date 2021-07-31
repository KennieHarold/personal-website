import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import "./styles.css";
import MobileNavbar from "./MobileNavbar";

const Navigation = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [isHome, setIsHome] = useState(true);
  const [isShadowedNavBar, setIsShadowedNavBar] = useState(false);

  const headerItems = [
    "home",
    "about",
    "timeline",
    "skills",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    window.addEventListener("scroll", observeScrollChange);
    navbarHiglighting();
  }, []);

  const observeScrollChange = () => {
    navbarHiglighting();
    showShadowedNavbar();
  };

  const navbarHiglighting = () => {
    const homeSectionId = document.getElementById("home");
    const aboutSectionId = document.getElementById("about");
    const timelineSectionId = document.getElementById("timeline");
    const skillsSectionId = document.getElementById("skills");
    const portfolioSectionId = document.getElementById("portfolio");
    const contactSectionId = document.getElementById("contact");

    let section = "home";

    const roundedY = Math.round(window.scrollY);

    if (
      roundedY >= homeSectionId.offsetTop &&
      roundedY < aboutSectionId.offsetTop
    ) {
      section = "home";
    } else if (
      roundedY >= aboutSectionId.offsetTop &&
      roundedY < timelineSectionId.offsetTop
    ) {
      section = "about";
    } else if (
      roundedY >= timelineSectionId.offsetTop &&
      roundedY < skillsSectionId.offsetTop
    ) {
      section = "timeline";
    } else if (
      roundedY >= skillsSectionId.offsetTop &&
      roundedY < portfolioSectionId.offsetTop
    ) {
      section = "skills";
    } else if (
      roundedY >= portfolioSectionId.offsetTop &&
      roundedY < contactSectionId.offsetTop
    ) {
      section = "portfolio";
    } else {
      section = "contact";
    }

    setIsHome(section === "home" ? true : false);
    setSelectedItem(section);
  };

  const showShadowedNavbar = () => {
    const homeSectionId = document.getElementById("home");
    const aboutSectionId = document.getElementById("about");
    const timelineSectionId = document.getElementById("timeline");
    const skillsSectionId = document.getElementById("skills");
    const portfolioSectionId = document.getElementById("portfolio");
    const contactSectionId = document.getElementById("contact");

    const roundedY = Math.round(window.scrollY);

    if (
      roundedY > homeSectionId.offsetTop + 130 &&
      roundedY < aboutSectionId.offsetTop
    ) {
      setIsShadowedNavBar(true);
    } else if (
      roundedY > aboutSectionId.offsetTop + 20 &&
      roundedY < timelineSectionId.offsetTop
    ) {
      setIsShadowedNavBar(true);
    } else if (
      roundedY > timelineSectionId.offsetTop + 20 &&
      roundedY < skillsSectionId.offsetTop
    ) {
      setIsShadowedNavBar(true);
    } else if (
      roundedY > skillsSectionId.offsetTop + 20 &&
      roundedY < portfolioSectionId.offsetTop
    ) {
      setIsShadowedNavBar(true);
    } else if (
      roundedY > portfolioSectionId.offsetTop + 20 &&
      roundedY < contactSectionId.offsetTop
    ) {
      setIsShadowedNavBar(true);
    } else if (roundedY > contactSectionId.offsetTop + 20) {
      setIsShadowedNavBar(true);
    } else {
      setIsShadowedNavBar(false);
    }
  };

  const renderClassNamesForHeaderItems = (item) => {
    let classNames = ["navbar__grid__item"];

    if (isHome) {
      classNames.push("navbar__grid__item--light");
    } else {
      classNames.push("navbar__grid__item--dark");
    }
    if (selectedItem === item) {
      classNames.push("navbar__grid__item--selected");
    }
    return classNames.join(" ");
  };

  const renderClassNamesForNavbar = () => {
    let classNames = [];

    if (isShadowedNavBar) {
      classNames.push("navbar--shadowed");
    }
    if (isHome) {
      classNames.push("navbar--dark");
    } else {
      if (selectedItem === "timeline" || selectedItem === "portfolio") {
        classNames.push("navbar--light-2");
      } else {
        classNames.push("navbar--light");
      }
    }
    return classNames.join(" ");
  };

  return (
    <>
      <nav id="navbar" className={renderClassNamesForNavbar()}>
        <Grid
          id="navbar__grid"
          container
          justify="center"
          alignItems="center"
          direction="row"
        >
          {headerItems.map((item) => (
            <a
              key={`navbar__grid__${item}`}
              id={`navbar__grid__${item}`}
              className={renderClassNamesForHeaderItems(item)}
              onClick={() => {
                window.scrollTo(0, document.getElementById(item).offsetTop);
              }}
            >
              {item}
            </a>
          ))}
        </Grid>
      </nav>
      <MobileNavbar
        headerItems={headerItems} 
        isHome={isHome} 
      />
    </>
  );
};

export default Navigation;
