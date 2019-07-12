import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import './stylesheets/projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <Fade left>
        <div className='projects'>
          <div className='project-card'>
            <div className='jobly'>
            </div>
            <div className='project-content'>
              <h5>Jobly</h5>
              <div className='project-tech'>
                <p className='web-tech'> React </p>
                <p className='web-tech'>Javascript </p>
                <p className='web-tech'> Node </p>
                <p className='web-tech'> Express </p>
                <p className='web-tech'> PostgreSQL </p>
                <p className='web-tech'> HTML </p>
                <p className='web-tech'> CSS </p>
              </div>
            </div>
          </div>
          <div className='project-card'>
            <div className='warbler'>
            </div>
            <div className='project-content'>
              <h5>Warbler</h5>
              <div className='project-tech'>
                <p className='web-tech'> Python </p>
                <p className='web-tech'> Flask </p>
                <p className='web-tech'> SQLAlchemy </p>
                <p className='web-tech'> Jinja </p>
                <p className='web-tech'> HTML </p>
                <p className='web-tech'> CSS </p>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    )
  }
}
