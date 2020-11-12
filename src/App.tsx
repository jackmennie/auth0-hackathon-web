import React from "react";
import "./App.css";

import { useAuth0} from '@auth0/auth0-react';


import Theme, {nib} from '@nib-components/theme';
import HeaderFooterLayout from '@nib-components/header-footer-layout';
import Container from '@nib-components/container';
import {Margin} from "styled-components-spacing"
import Profile from "./Profile";
import Login from "./Login";

function App() {
  const {
    isAuthenticated,
  } = useAuth0();
  
  console.log("Is authed: " + isAuthenticated);

  return (
    
    <Theme theme={nib} className="App">
      <HeaderFooterLayout smallLayout>
        <Container>
          <Margin all={2}>
          {!isAuthenticated ? (<Login/>) : (<Profile/>)}
          </Margin>
        </Container>
      </HeaderFooterLayout>
    </Theme>
    
  );
}

export default App;
