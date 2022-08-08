const typesColors = {
  grass: "#3ec1b1",
  fire: "#dd584f",
  water: "#6fbbff",
  bug: "#f8d5a3",
  normal: "#b1b1b1",
  poison: "#b667cf",
  electric: "#ffc212",
  ground: "#ffb66d",
  rock: "#d5d5d4",
  fairy: "#e455fd",
  dragon: "#2166ad",
  psychic: "#c1c346",
  flying: "#bbb1b1",
  fighting: "#cfbb93",
  ice: "#68afff",
};

export const firstLetterUpperCase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const clearPokedexString = (string) =>
  firstLetterUpperCase(string).replace(/-/g, " ");

export const separeteTypes = (types) => {
  const pokeTypes = Object.keys(typesColors);
  const colorName = pokeTypes.find((type) => type === types[0].type.name);
  const typeColor = typesColors[colorName];

  const typeText = types
    .map(({ type }) => firstLetterUpperCase(type.name))
    .toString()
    .replace(/,/g, " | ");

  return {
    typeColor: typeColor,
    typeText: typeText,
  };
};
