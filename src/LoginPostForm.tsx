import React, { useState } from "react";
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { Container } from "@material-ui/core";
import axios from "axios";

function LoginPostForm() {
  const [files, setFiles] = useState({files: []});

  const handleChange = (files) => {
    console.log("submitting form");
    setFiles({files});
  }

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