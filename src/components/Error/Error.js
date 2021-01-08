import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const message = "Ops, an unexcpected error occurred, try again later.";

export default function Error({ small = false }) {
  const classes = useStyles();
  return (
    <Paper className={small ? classes.small : classes.root}>
      {small && message}
      {!small && <h2>{message}</h2>}
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: `rgb(255,165,0, .2)`,
    padding: 32,
    margin: 32,
  },
  small: {
    minWidth: 275,
    backgroundColor: `rgb(255,165,0, .2)`,
    padding: 8,
    margin: 8,
    fontSize: "14px",
  },
});
