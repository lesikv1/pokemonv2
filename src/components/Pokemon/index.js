import React, {Component} from 'react';
import axios from 'axios';

export default class Pokemon extends Component{

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      abiliry: '',
      img: '',
      id: 0,
      exp: 0,
      height: 0,
      weight: 0,
      order: 0,
    }
  }

  pokemon(url) {
    axios(url).then((result) => {
      this.setState({
        name: result.data.name,
        id: result.data.id,
        ability: result.data.abilities["0"].ability.name,
        img: result.data.sprites.front_default,
        exp: result.data.base_experience,
        order: result.data.order,
        height: result.data.height,
        weight: result.data.weight,
      })
    });
  }

  componentDidMount() {
    this.pokemon(this.props.url);
  }

  render() {
    return(
      <div className='col-sm-6 col-md-4'>
        <div className='thumbnail'>
          <img src={this.state.img}/>
          <div className='caption'>
            <h3>{this.state.name}</h3>
            <h4>id: {this.state.id}</h4>
            <p>{this.state.ability}</p>
            <p>base experience: {this.state.exp}</p>
            <p>order: {this.state.order}</p>
            <p>height: {this.state.height}</p>
            <p>weight: {this.state.weight}</p>
            <button
              className='btn btn-primary'
              >pokemon</button>
          </div>
        </div>
      </div>
    );
  }
}


//721 pokemons
