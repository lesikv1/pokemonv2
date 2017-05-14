import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1> Page not found. Back to <Link to='/'>Main</Link>? </h1> 
          </div>
        </div>
      </div>
    )
  }
}
