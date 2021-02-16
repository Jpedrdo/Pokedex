/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Button, Box } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponent from "./AppBar";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    marginTop: "80px",
    maxWidth: "1000px",
    textAlign: "center",
    margin: "0 auto",
    background: "#333",
    color: "#ffff",
    border: "3px solid black",
    borderRadius: "30px",
  },
  imgPoke: {
    width: "300px",
    height: "300px",
  },
  butaoMain: {
    margin: "40px auto 52px auto",
    color: "#ffff",
    borderColor: "#ffff",
    padding: "12px 2%",
    "&:hover": {
      fontSize: "14.8px",
      background: "rgb(40, 40, 40)",
    },
  },
  error: {
    marginTop: "100px",
  },
  errorText: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  text: {
    fontWeight: "bold",
    fontSize: "30px",
    border: "2px solid #ffff",
  },
  textTitulo: {
    textTransform: "upperCase",
  },
}));

const Pokemon = (props) => {
  const classes = useStyles();
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    let peso = Number.parseFloat(weight);
    return (
      <>
        <Box className={classes.pokedexContainer}>
          <Typography className={classes.textTitulo} variant="h1">
            {toFirstCharUppercase(name)}
          </Typography>
          <img className={classes.imgPoke} src={fullImageUrl} />
          <Typography className={classes.text} variant="h3">
            Pokemon Infos
          </Typography>
          <Typography className={classes.text}>
            {"Nome: "} {species.name}
          </Typography>
          <Typography className={classes.text}>Altura: {height}m </Typography>
          <Typography className={classes.text}>Peso: {peso}kg </Typography>
          {types.map((typeInfo) => {
            const { type } = typeInfo;
            const { name } = type;
            return (
              <Typography className={classes.text} key={name}>
                {" "}
                {`Tipo: ${name}`}
              </Typography>
            );
          })}
          <Box className={classes.butaoContainer}>
            <Button
              className={classes.butaoMain}
              variant="outlined"
              onClick={() => history.push("/")}
            >
              Voltar a Pokedex
            </Button>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <AppBarComponent history={history} />
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && (
        <>
          <Box className={classes.pokedexContainer}>
            <Box className={classes.error}>
              <Typography className={classes.errorText}>
                [ERROR] Pokemon não encontrado!
              </Typography>
              <Box className={classes.butaoContainer}>
                <Button
                  className={classes.butaoMain}
                  variant="outlined"
                  onClick={() => history.push("/")}
                >
                  Voltar a Pokedex
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Pokemon;
