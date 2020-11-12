import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@material-ui/core";

function Login() {
  const {loginWithRedirect} = useAuth0();
  

  function login() {

    //This method will be different depending what auth0 sdk you will use,
    //but its all doing the same, calling the auth0 universal login.
    loginWithRedirect();
  }

  return (
    <div>

      <Button variant="contained" onClick={login}>Login</Button>
      </div>
  )
}

export default Login;