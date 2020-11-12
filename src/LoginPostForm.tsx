import React, { useState } from "react";
import {DropzoneArea} from 'material-ui-dropzone'

function LoginPostForm() {
  const [files, setFiles] = useState({files: []});

  const handleChange = (files) => {
    console.log("submitting form");
    setFiles({files});
  }

  return (<div>
     <DropzoneArea
        onChange={handleChange}
        />
    <h1>Files: {JSON.stringify(files)}</h1>
  </div>);
}


export default LoginPostForm;