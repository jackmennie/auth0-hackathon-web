import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from "styled-components"
import {Margin} from "styled-components-spacing"
import { Button } from '@material-ui/core';


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
          audience: "https://jacks-api.com.au/api"
        })

        setToken(token);
      } catch(e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>Succesfully logged in</h1>
      <p>Username: {user.name}</p>
      <div>
      {Object.keys(user).map(key => {
        return<p>{key}: {user[key]}</p>;
      })}
      </div>
      <div>Access Token:
        <TokenBox>
          {token}
        </TokenBox>
      </div>

    <Margin top={5}>
      <Button variant="contained" onClick={()=>{logout({returnTo: window.location.origin})}}>Logout</Button>
      </Margin>
    </div>
    );
}

export default Profile;