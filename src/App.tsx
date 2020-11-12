import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { useAuth0} from '@auth0/auth0-react';

import {Margin} from "styled-components-spacing"
import Profile from "./Profile";
import Login from "./Login";
import LoginPostForm from "./LoginPostForm";

function App() {
  const {
    isAuthenticated,
  } = useAuth0();
  
  console.log("Is authed: " + isAuthenticated);

  return (
    <Router>
      <Route exact path="/">
        <Margin all={2}>
          {!isAuthenticated ? (<Login/>) : (<Profile/>)}
        </Margin>
      </Route>
      <Route path="/postLogin" component={LoginPostForm}></Route>
    </Router>  
  );
}

export default App;
