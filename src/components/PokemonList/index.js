import React, {Component} from 'react';
import Pokemon from '../Pokemon';

import './assets/styles.scss'

export default class PokemonList extends Component {
  pokemon(index) {
    return (
      <Pokemon key={index} url={'http://pokeapi.co/api/v2/pokemon/' + index + '/'} />
    );
  }

  render() {
    const range = Array.from(Array(722).keys());
    return(
      <div className='container'>
        <div className='row'>
          <div className='block2'>
            <h1>All pokemons</h1>
            <hr/>
            {range.map(this.pokemon)}
          </div>
        </div>
      </div>
    );
  }
}
