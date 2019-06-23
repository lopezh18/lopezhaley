import React, { Component } from 'react'
import portrait from '../images/portrait.jpeg'
import './stylesheets/about.css'

export default class About extends Component {
  render() {
    
    return (
      <div>
        <img className='portrait image-fluid' src={portrait} alt='portrait'/>
      </div>
    )
  }
}
