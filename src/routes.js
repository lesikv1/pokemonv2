import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Search from './components/Search';
import NotFound from './components/NotFound';
import PokemonList from './components/PokemonList';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='/pokemonlist' component={PokemonList} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
