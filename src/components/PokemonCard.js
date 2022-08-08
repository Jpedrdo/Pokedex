import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cardMedia: {
    margin: "auto",
    width: "250px",
    height: "250px",
    position: "relative",
    zIndex: 99,
  },
  cardContent: {
    textAlign: "center",
    backgroundColor: "white",
    marginTop: -30,
    height: "50px",
  },
  card: {
    backgroundColor: "transparent",
    "&:hover": {
      opacity: 0.8,
    },
  },
  types: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    fontSize: "0.8em",
    padding: "5px 10px",
  },
  boxPadding: {
    padding: "0 1rem",
  },
  flexRow: {
    display: "flex",
    alignContent: "row",
    justifyContent: "space-between",
  },
}));

const PokemonCard = ({ pokemon, handleSelect }) => {
  const classes = useStyles();
  const { id, name, sprite, types, typeColor } = pokemon;

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => handleSelect(pokemon)}>
        <Box sx={{ backgroundColor: typeColor }}>
          <Box pt={3} className={[classes.boxPadding, classes.flexRow]}>
            <Typography variant="h3">{name}</Typography>
            <Typography>{id}</Typography>
          </Box>
          <Box pt={0.5} className={[classes.boxPadding, classes.flexRow]}>
            <Typography className={classes.types}>{types}</Typography>
          </Box>
          <CardMedia className={classes.cardMedia} image={sprite} />
        </Box>
        <CardContent className={classes.cardContent} />
      </CardActionArea>
    </Card>
  );
};

export default PokemonCard;
