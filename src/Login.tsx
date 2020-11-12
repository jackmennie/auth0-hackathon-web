import React, { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import qs from "query-string";

function Login() {
  const {loginWithRedirect} = useAuth0();
  const [nonce, setNonce] = useState("");

  const queries = qs.parse(window.location.search);

  useEffect(()=> {
    if(queries.nonce) {
      setNonce(queries ? queries.nonce.toString() : "")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function login() {
    console.log("Using a nonce: " + nonce);

    //This method will be different depending what auth0 sdk you will use,
    //but its all doing the same, calling the auth0 universal login.
    loginWithRedirect();
  }

  return (
      <button id="nib" onClick={login}>Login</button>
  )
}

export default Login;