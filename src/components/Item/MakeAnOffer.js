import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: theme.spacing(),
    background: "#efefef",
    textAlign: "center",
    padding: theme.spacing(2),
  },
  textField: { margin: theme.spacing() },
  button: { margin: theme.spacing(), width: 257, height: 56 },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  offers: {
    marginLeft: theme.spacing(),
  },
}));

export default function MakeAnOffer({ price, offers }) {
  const classes = useStyles();
  function onSubmitHandler(event) {
    event.preventDefault();
  }
  return (
    <div className={classes.root}>
      <div >
        <Typography
          className={classes.title}
          component="strong"
        >
          EUR {price}
        </Typography>
        <Typography
          variant="body2"
          className={classes.offers}
          color="textSecondary"
          component="span"
        >
          {offers} offers
        </Typography>
      </div>
      <form onSubmit={onSubmitHandler}>
        <TextField
          className={classes.textField}
          label="inserisci l'offerta massima"
          variant="outlined"
          autoComplete="off"
          size="11"
          maxLength="10"
          color="secondary"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Fai un'offerta
        </Button>
      </form>
    </div>
  );
}
