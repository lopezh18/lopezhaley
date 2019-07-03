import React, { Component } from 'react'
import './stylesheets/about.css'
import resume from '../images/lopez-resume.pdf'

export default class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-info'>
            <h1 className='greeting'>Hello, I'm Haley.</h1>
            <p className='about-text'>I am a Bay Area native looking for an opportunity to make social impact through technology. Technically, I built my first basic web application in 2012, but I didn't think I could pursue engineering fulltime so pursued a different route in higher education. After graduating with a B.S. in business, I went straight into nonprofit development where I learned there were many other ways to impact communities and chose to start learning HTML, CSS, and Javascript. </p>

            <p>I was able to get into Rithm School, a bootcamp in San Francisco and learned a bunch of technologies and problem solving techniques. While at Rithm, I became proficient in a wide range of web technologies: Node, Express, Python, SQL, React, and more. For more details about my experience, click <a className='about-text-anchor' href={resume}>here</a>. </p>
          </div>
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
        </div>
      </div>
    )
  }
}
