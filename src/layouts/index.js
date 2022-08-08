import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PokeList from "../views";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
    margin: "0 auto",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const MainLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.contentContainer}>
          <Box className={classes.content}>
            <PokeList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
