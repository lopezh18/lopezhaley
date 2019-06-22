import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
      </Switch>
    )
  }
}
