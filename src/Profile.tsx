import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components"
import Heading from '@nib-components/heading';
import { SecondaryButton} from '@nib-components/button';
import {Margin} from "styled-components-spacing"


const TokenBox = styled.div`
  padding: 20px;
  margin-left: 50px;
  margin-right: 50px;
  background-color: #EEE;
  border: solid 1px #444;
  border-radius: 5px;
  overflow-wrap: break-word;
`

function Profile() {
  const { user, getAccessTokenSilently, logout} = useAuth0();
  const [token, setToken] = useState("");


  useEffect(()=> {
    (async ()=> {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://my.nib.com.au/api"
        })

        setToken(token);
      } catch(e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <Heading size={3}>Succesfully logged in</Heading>
      <div>Username: {user.name}</div>
      <div>Access Token:
        <TokenBox>
          {token}
        </TokenBox>
      </div>

    <Margin top={5}>
      <SecondaryButton onClick={()=>{logout({returnTo: window.location.origin})}}>Logout</SecondaryButton>
      </Margin>
    </div>
    );
}

export default Profile;