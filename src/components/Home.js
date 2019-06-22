import React, { Component } from 'react'
import './stylesheets/home.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='name-container'>
          <div className='name'>
            HAL
          </div>
          <div className='name'>
            EY
            <div className='last-name'>
              Lopez
            </div>
          </div>
        </div>
        <div className='details-container'>
          <div className='details'>
            <p>
              Software Engineer
          </p>
          </div>
        </div>
      </div>
    )
  }
}