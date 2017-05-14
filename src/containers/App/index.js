import React, { Component } from 'react';
import NavLink from '../../components/NavLink';

import './assets/styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='heads'>
          <ul className='nav nav-pills'>
            <li className='main'><NavLink onlyActiveOnIndex={true} to='/' className='main'>Search</NavLink></li>
            <li className='pokemonlist'><NavLink to='/pokemonlist' className='pokemonlist'>All pokemons</NavLink></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
