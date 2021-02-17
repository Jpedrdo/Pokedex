import React from "react";
import { Typography, Box, Toolbar, AppBar } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    background: "#333",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  placeHolderFlex: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    minWidth: "34ch",
    [theme.breakpoints.up("sm")]: {
      width: "35ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const AppBarComponente = (props) => {
  const classes = useStyles();
  const { history } = props;

  return (
    <AppBar className={classes.AppBar} position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          onClick={() => history.push(`/`)}
          className={classes.title}
          variant="h6"
          noWrap
        >
          Pokedex
        </Typography>
        <Box className={classes.placeHolderFlex}></Box>
        <Box className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            onChange={props.handleSearchChange}
            placeholder="Pokemon (Pesquisar tudo em minúsculo)"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponente;
