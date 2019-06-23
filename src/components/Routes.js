import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './About'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/about' render={() => <About/>}/>
      </Switch>
    )
  }
}
