import React, { Component } from 'react'
import portrait from '../images/portrait.jpeg'
import './stylesheets/about.css'

export default class About extends Component {
  render() {

    return (
      <div>
        <div className='about-container'>
          <div className='about-info'>
            <p className='greeting'>Hello</p>
            <p className='about-text'>I am a Bay Area native looking for an opportunity to make global impact through an engineering role. I am proficient in a wide range of web technologies: Node, Express, Python, SQL, React, and more. For more details about my experience, click here. </p> </div>
          <img className='portrait image-fluid' src={portrait} alt='portrait' height="400" width="300" />
          <div className='about-icons'>
            <a href='mailto:haleylopez95@gmail.com'>
              <i className="far fa-envelope fa-lg mb-4"></i>
            </a>
            <br />
            <a href='https://www.linkedin.com/in/haleyalopez/'>
              <i className="fab fa-linkedin fa-lg mb-4"></i>
            </a>
            <br />
            <a href='https://github.com/lopezh18'>
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
