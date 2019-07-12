import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './stylesheets/navbar.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarExpanded: false
    }
  }

  toggleNav = () => {
    this.setState({
      navbarExpanded: !this.state.navbarExpanded
    })
  }
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-white bg-white">
        <NavLink className="navbar-brand" exact to='/'>HL</NavLink>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded={this.state.navbarExpanded} aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/about' onClick={this.toggleNav}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/projects' onClick={this.toggleNav}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href='mailto:haleylopez95@gmail.com' onClick={this.toggleNav}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
