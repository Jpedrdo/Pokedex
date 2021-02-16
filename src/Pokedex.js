import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { PrimeiraLetraMaiuscula } from "./PrimeiraLetraMaiuscula";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import AppBarComponente from "./AppBarComponente";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
    maxWidth: "1000px",
    textAlign: "center",
    margin: "80px auto 42px auto",
  },
  cardMedia: {
    margin: "auto",
    width: "130px",
    height: "130px",
  },
  cardContent: {
    textAlign: "center",
  },
  cards: {
    cursor: "pointer",
    backgroundColor: "#333",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(90, 90, 90)",
    },
  },
}));

const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
      });
  }, []);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    return (
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card className={classes.cards} onClick={() => history.push(`/${id}`)}>
          <CardMedia className={classes.cardMedia} image={sprite} />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${PrimeiraLetraMaiuscula(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <Box>
      <AppBarComponente
        handleSearchChange={handleSearchChange}
        history={history}
      />
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Pokedex;
