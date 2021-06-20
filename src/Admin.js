import React from 'react'
import Dashboard from './admin/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Users from './admin/Users';
import Clubpresident from './admin/Clubpresident';
import Clubprofil from './admin/Clubprofil';
import { useContext } from 'react';
import { AuthContext } from './Auth';

function Admin() {
  const { isAdmin } = useContext(AuthContext)
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/clubpresidents" component={Clubpresident} />
          <Route exact path="/admin/clubprofil" component={Clubprofil} />
        </Switch>
      </Router>
    )
}

export default Admin
