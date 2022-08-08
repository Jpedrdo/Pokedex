import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import api from "../services/api";
import { firstLetterUpperCase, separeteTypes } from "../utils";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import Pokedex from "../components/Pokedex";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 2rem",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginTop: "-5rem",
  },
}));

const PokeList = () => {
  const classes = useStyles();
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsAllData, setPokemonsAllData] = useState([]);
  const [pokeSelect, setPokeSelect] = useState(0);
  const pokesNum = Array.from({ length: 151 }, (_, index) => index + 1);

  const getPokemons = async () => {
    const pokesData = await Promise.all(
      pokesNum.map(async (_, i) => {
        const indexPlusOne = i + 1;
        const { data } = await api.get(`/pokemon/${indexPlusOne}`);
        const { typeColor, typeText } = separeteTypes(data.types);

        return {
          id: `#${String(indexPlusOne).padStart(3, "0")}`,
          name: firstLetterUpperCase(data.species.name),
          sprite: data.sprites.other.home.front_default,
          gif: data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
          types: typeText,
          typeColor: typeColor,
          abilities: data.abilities,
          stats: data.stats,
        };
      })
    );
    setPokemons(pokesData);
    setPokemonsAllData(pokesData);
  };

  const handleSelect = (pokemon) => setPokeSelect(Object.create(pokemon));

  const handleSearch = (text) => {
    const newPokeList = pokemonsAllData.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
        String(item.id).toLowerCase().indexOf(text.toLowerCase()) >= 0
      );
    });
    setPokemons(newPokeList);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Box>
      <Header handleSearch={handleSearch} />
      <Box className={classes.container}>
        {pokemons.length ? (
          <Grid container spacing={1.8}>
            {pokemons.map((pokemon) => (
              <Grid item xs={12} sm={6} md={4}>
                <PokemonCard
                  key={pokemon.name}
                  pokemon={pokemon}
                  handleSelect={handleSelect}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box className={classes.loading}>
            <CircularProgress size={60} />
          </Box>
        )}
      </Box>
      <Pokedex pokeSelect={pokeSelect} />
    </Box>
  );
};

export default PokeList;
