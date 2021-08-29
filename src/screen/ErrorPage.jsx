import React from "react";
import { Button } from "@material-ui/core";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Oops...</h1>
      <h3>Something went wrong</h3>
      <h3>
        Please
        <Button onClick={() => window.location.reload(false)}>Reload</Button>
        the app
      </h3>
    </div>
  );
};

export default ErrorPage;
