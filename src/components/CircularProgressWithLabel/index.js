import React from "react";
import { Box, Typography, CircularProgress } from "@material-ui/core";

const CircularProgressWithLabel = (props) => {
  return (
    <Box position="relative">
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ color: props.customcolor, zIndex: 1 }}
      />
      <CircularProgress
        variant="determinate"
        size={props.size}
        value={100}
        style={{
          color: props.customcolor,
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          color: "rgba(0, 0, 0, 0.04)",
        }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          style={{
            fontSize: props.textsize,
            fontWeight: 700,
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
