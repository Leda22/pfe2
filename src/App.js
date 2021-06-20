import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Learn from "./Learn";
import About from "./About";
import db, { auth } from "./firebase";
import { AuthContext } from "./Auth";
import President from "./President";


export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPresident, setIsPresident] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email === "abc@abc.com") {
          setIsAdmin(true)
        } else { setIsPresident(true) }
      } else {
        setIsAdmin(false)
        setIsPresident(false)
      }
    });
  }, [isAdmin, isPresident])

console.log('admin '+isAdmin)
console.log('president '+isAdmin)

  
  return (
    <Router>
      <Switch>
        <Route exact path="/clubs" component={Clubs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/learn" component={Learn} />
        <Route exact path="/about" component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/clubs' component={Clubs} />
        <Route exact path="/" component={Home} />
        <AuthContext.Provider value={isAdmin}>
          <Route exact path='/admin' component={Admin} />
        </AuthContext.Provider>
        <AuthContext.Provider value={isPresident}>
          <Route exact path='/president' component={President} />
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}