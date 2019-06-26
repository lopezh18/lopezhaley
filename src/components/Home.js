import React, { Component } from 'react';
import './stylesheets/home.css';
import Typewriter from 'typewriter-effect';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='element-container'>
        <div className='name-container'>
          <div className='name first-three'>
            HAL
          </div>
          <div className='name last-two'>
            EY
            <div className='last-name'>
              Lopez
            </div>
          </div>
        </div>
        <div className='details-container'>
          <div className='details'>
            <Typewriter options={{
              strings: ['Software Engineer.', 'Web Developer.', 'Fullstack Engineer.', 'React Developer.'],
              autoStart: true,
              loop: true
            }} />
          </div>
        </div>
        </div>
      </div>
    )
  }
}
