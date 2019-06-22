import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='NavBar'>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/about'>About</NavLink>
        <NavLink exact to='/work'>Work</NavLink>
        <NavLink exact to='/contact'>Contact</NavLink>
      </nav>
    )
  }
}
