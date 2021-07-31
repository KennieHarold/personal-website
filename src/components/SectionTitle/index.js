import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";

const SectionTitle = ({ id, title }) => {
  return (
    <Typography className="section-title" id={id} variant="h4">
      {title}
    </Typography>
  );
};

export default SectionTitle;
