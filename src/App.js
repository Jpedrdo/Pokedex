import React from "react";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";
import { Route, Switch } from "react-router-dom";
import AppBarComponent from "./AppBar";

const App = () => (
  <Switch>
    <Route exact path="/" render={(props) => <Pokedex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
    <Route 
    exact 
    path="/" 
    render={(props) => <AppBarComponent {...props} />} />
  </Switch>
);

export default App;
