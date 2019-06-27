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
          <div className='details'>
            <Typewriter options={{
              strings: ['Software Engineer.', 'React','Node', 'Python', 'SQL'],
              autoStart: true,
              loop: true
            }} />
          </div>
          <div className='details-container'>
          </div>
        </div>
      </div>
    )
  }
}
