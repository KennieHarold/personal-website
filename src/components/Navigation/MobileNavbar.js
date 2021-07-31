import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Button, Fade } from "@material-ui/core";
import { MenuRounded } from "@material-ui/icons";
import "./styles.css";

const MobileNavbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav id="navbar--mobile">
      <Button
        aria-controls="navbar--mobile__menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuRounded fontSize="large" style={{ color: "white" }} />
      </Button>
      <Menu
        id="navbar--mobile__menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Fade}
        style={{ marginTop: 25 }}
      >
        {props.headerItems.map((item) => (
          <MenuItem
            id={`navbar--mobile__menu__${item}`}
            key={`navbar--mobile__menu__${item}`}
            style={{ textTransform: "capitalize" }}
            onClick={() => {
              window.scrollTo(0, document.getElementById(item).offsetTop);
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </nav>
  );
};

export default MobileNavbar;
