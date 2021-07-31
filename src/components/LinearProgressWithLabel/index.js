import React from "react";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { colorTheme } from "../../styles/themes";

const LinearProgressWithLabel = (props) => {
  return (
    <Box display="flex">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{ borderRadius: "10px 0 0 0" }}
        />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ fontWeight: 700 }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
