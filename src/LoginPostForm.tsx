import React, { useEffect, useState } from "react";
import qs from "query-string";
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import axios from "axios";

function LoginPostForm() {
  const [files, setFiles] = useState({files: []});
  const [state, setState] = useState("");

  const queries = qs.parse(window.location.search);
  console.log(queries);

  const handleChange = (files) => {
    console.log("submitting form");
    setFiles({files});
  }

  useEffect(()=> {
    if(queries.state) {
      setState(queries ? queries.state.toString() : "")
    }
  }, [])

  function submitFile() {
    return (async () => {
      console.log("submitting file async");
      if(files.files[0]) {
        console.log("we have a file");

        const file = new FormData();
        file.append(files.files[0].path, files.files[0])

        try {
          const options = {
            headers: {"Content-Type": "image/jpeg"}
          }

          const response = await axios.post("https://actions-hackathon-backend.herokuapp.com/detect", files.files[0], options);
          console.log(response);

          if(response.data.attributes.anger.confidence > 20) {
            console.log("returning anger");
            //@ts-ignore
            window.location = `https://jacks-hackathon.au.auth0.com/continue?state=${state}&anger=${true}`
          }

           //@ts-ignore
          window.location = `https://jacks-hackathon.au.auth0.com/continue?state=${state}&anger=${false}`
          // history.pushState()
        } catch(e) {
          throw e;
        }
      }
    })();
  };

  return (
  <Container>
     <DropzoneArea
        onChange={handleChange}
        filesLimit={1}
        />
    <h1>Files: {JSON.stringify(files)}</h1>
    <Button variant="contained" color="primary" onClick={()=>submitFile()}>Submit</Button>
  </Container>
  );
}


export default LoginPostForm;