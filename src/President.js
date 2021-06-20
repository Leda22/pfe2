import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './Auth';
import Login from './Login';

function President() {
  const {isPresident} = useContext(AuthContext)
  if (!isPresident)return (<Redirect to="/"/>)
else
    return (
        <Router>
        <Switch>
        <Route exact path="/president" component={Login}/>
        </Switch>
    </Router>
    )
}

export default President
