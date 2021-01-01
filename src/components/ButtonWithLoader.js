import React from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
  progress: {
    position: "absolute",
    top: 8,
    left: "45%",
  },
}));

export default function ButtonWithLoader({ loading, children, ...props }) {
  const classes = useStyles();
  return (
    <Button
      disabled={loading}
      {...props}
      className={clsx(props.className, classes.relative)}
    >
      {children}
      {loading && (
        <CircularProgress color="primary" className={classes.progress} />
      )}
    </Button>
  );
}
