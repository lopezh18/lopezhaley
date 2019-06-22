import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import Routes from './components/Routes'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavBar/>
      <Routes/>
      </BrowserRouter>
    )
  }
}

