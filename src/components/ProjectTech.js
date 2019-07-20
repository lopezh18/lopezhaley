import React, { Component } from 'react'
import uuid from 'uuid/v4'

export default class ProjectTech extends Component {
  render() {
    return (
      <div className='project-tech'>
        {this.props.tech.map(tech =>
          <p key={uuid()} className='web-tech'>{tech}</p>
        )}
      </div>
    )
  }
}