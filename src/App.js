import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { Route, Switch } from "react-router-dom";
import AppBarComponente from "./AppBarComponente";

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
    <Route exact path="/" render={(props) => <AppBarComponente {...props} />} />
  </Switch>
);

export default App;
