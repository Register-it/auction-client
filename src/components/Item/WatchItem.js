import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core";
import { useWatchItem } from "../../api/AuctionApi";
import { Skeleton } from "@material-ui/lab";
import Error from "../Error/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "blue",
    textDecoration: "underline",
    margin: theme.spacing(),
    padding: 0,
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(),
  },
}));

export default function WatchItem({ itemId }) {
  const classes = useStyles();
  const { watched, loading, error, toggleWatch } = useWatchItem(itemId);

  function onClickHandler() {
    toggleWatch();
  }

  if (loading) {
    return <Skeleton animation="wave" width={265} height={30} />;
  }

  return (
    <>
      <p className={classes.root} onClick={onClickHandler}>
        {watched && (
          <>
            <CheckIcon className={classes.icon} /> Osservato
          </>
        )}
        {!watched && (
          <>
            <VisibilityIcon className={classes.icon} />{" "}
            <span>Aggiungi agli oggetti che osservi</span>
          </>
        )}
      </p>
      {error && (
        <>
          {JSON.stringify(error)}
          <Error small />
        </>
      )}
    </>
  );
}
