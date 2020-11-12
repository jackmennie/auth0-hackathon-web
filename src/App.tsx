import React from "react";
import "./App.css";

import { useAuth0} from '@auth0/auth0-react';

import {Margin} from "styled-components-spacing"
import Profile from "./Profile";
import Login from "./Login";

function App() {
  const {
    isAuthenticated,
  } = useAuth0();
  
  console.log("Is authed: " + isAuthenticated);

  return (
          <Margin all={2}>
          {!isAuthenticated ? (<Login/>) : (<Profile/>)}
          </Margin>
  );
}

export default App;
