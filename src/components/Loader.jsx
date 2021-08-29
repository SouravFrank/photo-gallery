import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "../styles/styles";

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.Loader_container}>
      <CircularProgress />
    </div>
  );
}
