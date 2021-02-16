import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Button, Box } from "@material-ui/core";
import { PrimeiraLetraMaiuscula } from "./PrimeiraLetraMaiuscula";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import AppBarComponente from "./AppBarComponente";

const useStyles = makeStyles(() => ({
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

  const gerarPokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return (
      <Box className={classes.pokedexContainer}>
        <Typography className={classes.textTitulo} variant="h1">
          {name}
        </Typography>
        <img
          className={classes.imgPoke}
          src={fullImageUrl}
          alt="PokemonImage"
        />
        <Typography className={classes.text} variant="h3">
          Pokemon Infos
        </Typography>
        <Typography className={classes.text}>
          {"Nome: "} {PrimeiraLetraMaiuscula(species.name)}
        </Typography>
        <Typography className={classes.text}>Altura: {height}m </Typography>
        <Typography className={classes.text}>Peso: {weight}kg </Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return (
            <Typography className={classes.text} key={name}>
              {" "}
              {`Tipo: ${PrimeiraLetraMaiuscula(name)}`}
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
    );
  };

  return (
    <Box>
      <AppBarComponente history={history} />
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && gerarPokemonJSX(pokemon)}
      {pokemon === false && (
        <Box className={classes.pokedexContainer}>
          <Box className={classes.error}>
            <Typography className={classes.errorText}>
              [ERRO] Pokemon não encontrado!
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
      )}
    </Box>
  );
};

export default Pokemon;
