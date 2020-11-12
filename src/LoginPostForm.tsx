import React from "react";

function LoginPostForm() {

  const submitForm = () => {
    console.log("submitting form");
  }

  return (<div>
    <form onSubmit={()=>submitForm()}>

    </form>
  </div>);
}


export default LoginPostForm;