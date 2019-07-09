import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Projects from './Projects'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/about' render={() => <About/>}/>
        <Route exact path='/projects' render={() => <Projects/>}/>
      </Switch>
    )
  }
}
