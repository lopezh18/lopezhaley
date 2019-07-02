import React, { Component } from 'react'
import portrait from '../images/portrait.jpeg'
import './stylesheets/about.css'
import resume from '../images/lopez-resume.pdf'

export default class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className="vertical-swatch"></div>
        <div className='about-content'>
          <div className='about-portrait-info'>
            <div className='portrait'>
            </div>
            <div className='about-icons'>
              <a className='about-icon' href='mailto:haleylopez95@gmail.com'>
                <i className="far fa-envelope fa-lg mb-4"></i>
              </a>
              <br />
              <a className='about-icon' href='https://www.linkedin.com/in/haleyalopez/'>
                <i className="fab fa-linkedin fa-lg mb-4"></i>
              </a>
              <br />
              <a className='about-icon' href='https://github.com/lopezh18'>
                <i className="fab fa-github fa-lg"></i>
              </a>
            </div>
          </div>
          <div className='about-info'>
            <p className='greeting'>Hello</p>
            <p className='about-text'>I am a Bay Area native looking for an opportunity to make global impact through an engineering role. I am proficient in a wide range of web technologies: Node, Express, Python, SQL, React, and more. For more details about my experience, click <a className='about-text-anchor' href={resume}>here</a>. </p> </div>
        </div>
      </div>
        )
      }
    }
