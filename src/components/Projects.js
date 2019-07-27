import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import './stylesheets/projects.css'
import GIFsmosDemo from '../images/gifsmos-demo.mp4'
import warblerDemo from '../images/warbler-demo.mp4'
import joblyDemo from '../images/jobly-demo.mp4'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-container'>
        <Fade left>
          <ProjectCard title='Warbler' bottom='no' video={warblerDemo} content='A Python-based Twitter clone including features for posting messages, liking posts, following users, handling account details, and login/logout authentication.' tech={['Python', 'Flask', 'SQLAlchemy', 'Jinja', 'HTML', 'CSS']} git='https://github.com/Kristina55/Twitter-Clone'/>
          <ProjectCard title='Jobly' bottom='no'
          video={joblyDemo} content='A full-stack job search website. Users can create an account, search for companies or jobs, and more. Companies can post jobs. Data is stored in a PostgreSQL database.' tech={['React', 'Javascript(ES6+)', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS']} git='https://github.com/lopezh18/fs-jobly'/>
          <ProjectCard title='GIFsmos' bottom='yes'
          video={GIFsmosDemo}  content='An open source web application that lets users make gifs. Users can create their own graph or load a saved Desmos, Inc. graph. GIFsmos uses the Desmos, Inc. API.' tech={['React', 'Javascript(ES6+)', 'Redux', 'HTML', 'CSS', 'Gifshot']} git='https://github.com/desmosinc/gifsmos' />
        </Fade>
      </div>
    )
  }
}