import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './stylesheets/navbar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-white bg-white">
        <NavLink className="navbar-brand">HL</NavLink>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/about'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/work'>Work</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
