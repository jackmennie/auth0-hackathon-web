import React, { useEffect, useState } from "react";

import FormControl from '@nib-components/form-control';
import Textbox from '@nib-components/textbox';
import { PrimaryButton } from '@nib-components/button';
import { useAuth0 } from "@auth0/auth0-react";
import Form from '@nib-components/form';
import { RedirectLoginOptions } from "@auth0/auth0-spa-js";
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

    //Login options can take in any optional attribute
    //In this case it is `handOffNonce` which will contain the provided nonce
    //In auth0 this is passed in as the context.request.query 
    const loginOptions: RedirectLoginOptions = {
      handOffNonce: nonce
    };

    //This method will be different depending what auth0 sdk you will use,
    //but its all doing the same, calling the auth0 universal login.
    loginWithRedirect(loginOptions);
  }

  return (
    <Form id="handOffForm"  name="nonceForm" title="Login to the Hand Off Application" >
      <FormControl id="nonce"  name="nonce" label="Handoff Nonce" valid={false} validated={false} error="Please enter your first name." help="Leave blank to use normal SSO Expiry, or provide a nonce to test extended SSO Expiry (mobile experience)">
        <Textbox value={nonce} onChange={(e) => setNonce(e.target.value)}/>
      </FormControl>

      <PrimaryButton id="nib" onClick={login}>Login</PrimaryButton>
    </Form>
  )
}

export default Login;