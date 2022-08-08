import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { clearPokedexString } from "../utils";
import { Dialog, Box, Typography } from "@mui/material";
import pokedexImg from "../imgs/pokedex.png";
import { ReactComponent as PokeBallGray } from "../assets/pokeballGraySvg.svg";
import { ReactComponent as PokemonLogoSvg } from "../assets/pokemonLogoSvg.svg";

const useStyles = makeStyles(() => ({
  pokemonImg: {
    position: "absolute",
    bottom: "55%",
    left: "50%",
    transform: "translate(-63%, 20%)",
    height: "18%",
  },
  pokemonTitle: {
    position: "absolute",
    fontWeight: "600",
    color: "#aaa",
    top: "55.18%",
    right: "24.5%",
    fontSize: "clamp(8px, 5vw, 25px)",
  },
  pokemonName: {
    color: "#3a444d",
    textTransform: "capitalize",
  },
  flexRow: {
    display: "flex",
    alignContent: "row",
    justifyContent: "space-between",
  },
  infos: {
    position: "absolute",
    top: "66%",
    left: "57%",
    width: "80%",
    transform: "translate(-57%, 0)",
    display: "flex",
  },
  columns: {
    width: "50%",
    fontSize: "clamp(8px, 5vw, 1rem)",
  },
  stats: {
    width: "72%",
  },
  types: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "2.5px 5px",
  },
  pokemonType: {
    position: "absolute",
    fontWeight: "600",
    color: "#fff",
    top: "21.8%",
    right: "20%",
    fontSize: "clamp(8px, 5vw, 25px)",
  },
  pokemonIcon: {
    position: "absolute",
    top: "9%",
    right: "19%",
  },
  pokemonLogo: {
    position: "absolute",
    bottom: '4%',
    right: "21%",
  }
}));

const Pokedex = ({ pokeSelect }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  useEffect(() => setOpen(!!pokeSelect), [pokeSelect]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      }}
      scroll={"body"}
    >
      <img className={classes.pokemonImg} src={pokeSelect.gif} alt="pokemon" />
      <Box className={classes.pokemonIcon}>
        <PokeBallGray width="64" height="64" />
      </Box>
      <Box className={classes.pokemonType}>
        <Typography className={classes.types}>{pokeSelect.types}</Typography>
      </Box>
      <Box className={classes.pokemonTitle}>
        <Typography component="span" variant="h2">
          {pokeSelect.id} -{" "}
        </Typography>
        <Typography
          component="span"
          variant="h2"
          className={classes.pokemonName}
        >
          {pokeSelect.name}
        </Typography>
      </Box>
      {pokeSelect.stats && (
        <Box className={classes.infos}>
          <Box className={[classes.columns, classes.stats]}>
            <Typography variant="h4">Stats</Typography>
            <Box pt={1}>
              {pokeSelect.stats.map((status) => (
                <Typography key={status.stat.name}>
                  {clearPokedexString(status.stat.name)}: {status.base_stat}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box className={classes.columns}>
            <Typography variant="h4">Abilities</Typography>
            <Box pt={1}>
              {pokeSelect.abilities.map((abilitiy) => (
                <Typography key={abilitiy.ability.name}>
                  {clearPokedexString(abilitiy.ability.name)}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      )}
      <Box className={classes.pokemonLogo}>
        <PokemonLogoSvg width="64" height="64" />
      </Box>
      <img src={pokedexImg} alt="pokemon" />
    </Dialog>
  );
};

export default Pokedex;
