import React, { Component } from 'react';
import './stylesheets/home.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

export default class Home extends Component {
  render() {
    return (
      <Fade bottom>
        <div className='home'>
          <div className='element-container'>
              <div className='first-name'>
                HALEY
            <div className='last-name'>
                  Lopez
            </div>
              </div>
            <div className='details'>
              <Typewriter options={{
                strings: ['Software Engineer', 'React', 'Node', 'Accessibility', 'Redux', 'SQL', 'JavaScript', 'TailwindCSS', 'Styled Components'],
                autoStart: true,
                loop: true
              }} />
            </div>
          </div>
        </div>
      </Fade>
    )
  }
}
