import React, { Component } from 'react'
import './stylesheets/projects.css'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <div className='projects'>
          <div className='project-card'>
            <div className='jobly'>
            </div>
            <div className='project-content'>
              <h5>Jobly</h5>
              <p> React • Node/Express • PostgreSQL </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
