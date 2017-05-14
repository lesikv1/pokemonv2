import React, {Component} from 'react';
import axios from 'axios';

import './assets/styles.scss';

export default class Search extends Component {
  constructor(props){
    super(props)
    this.changeValue = this.changeValue.bind(this)
    this.state = {
      title: '',
      value: '',
      url: 'http://pokeapi.co/api/v2/type/flying/',
      name: '',
      name2: '',
      name3: '',
      name4: '',
      name5: '',
      name6: '',
    }
  }

  changeValue(e) {
    this.setState({
      value: e.target.value,
    });
    let name = this.state.value
    this.setState({
      url: 'http://pokeapi.co/api/v2/type/' + name + '/',
    });
    axios(this.state.url).then((result) => {
      this.setState({
        name: result.data.pokemon[0].pokemon.name,
        name2: result.data.pokemon[1].pokemon.name,
        name3: result.data.pokemon[2].pokemon.name,
        name4: result.data.pokemon[3].pokemon.name,
        name5: result.data.pokemon[4].pokemon.name,
        name6: result.data.pokemon[5].pokemon.name,
        title: result.data.name,
      })
    });
  }

  pokemon(url) {
    axios(url).then((result) => {
      this.setState({
        name: result.data.pokemon[0].pokemon.name,
        name2: result.data.pokemon[1].pokemon.name,
        name3: result.data.pokemon[2].pokemon.name,
        name4: result.data.pokemon[3].pokemon.name,
        name5: result.data.pokemon[4].pokemon.name,
        name6: result.data.pokemon[5].pokemon.name,
        title: result.data.name,
      })
    });
  }

  componentDidMount() {
    this.pokemon(this.state.url);
  }

  render() {
    return (
      <div className='block'>
        <div className='container'>
          <div className='row'>
              <h1>Searth pokemons</h1>
              <hr/>
              <h4>Search pokemons from elements, on example: fire, ground, rock, steel, electric, ice, fighting, bug, grass. And click on button twice</h4>
              <div className="col-lg-6">
              <div className="input-group">
                <input
                  type="text"
                  name="text"
                  className="form-control"
                  placeholder="Search for pokemons"
                  onChange={this.changeValue}
                  value={this.state.value}/>
                <span className="input-group-btn">
                  <button
                    className="btn btn-default"
                    onClick={this.changeValue}
                    type="submit">Go!</button>
                </span>
              </div>
            </div>
          </div>
          <h3>top {this.state.title}s pokemons</h3>
          <div className='row'>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name2}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name3}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name4}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name5}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='thumbnail'>
                <div className='caption'>
                  <h3>{this.state.name6}</h3>
                  <button
                    className='btn btn-primary'
                    >pokemon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
