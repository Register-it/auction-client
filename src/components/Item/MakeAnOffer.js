import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import { usePlaceBid } from "../../api/useAuctionApi";
import ButtonWithLoader from "../ButtonWithLoader";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

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
  button: {
    margin: theme.spacing(),
    width: 257,
    height: 56,
    position: "relative",
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  offers: {
    marginLeft: theme.spacing(),
  },
  progress: {
    position: "absolute",
    top: 8,
    left: "45%",
  },
}));

export default function MakeAnOffer({ price, offers, itemId }) {
  const classes = useStyles();
  const [amount, setAmount] = useState("");

  const { placeBid, loading } = usePlaceBid(itemId);

  function onAmountChangeHandler(event) {
    setAmount(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    placeBid(amount);
  }
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.title} component="strong">
          EUR {price}
        </Typography>
        <Typography
          variant="body2"
          className={classes.offers}
          color="textSecondary"
          component="span"
        >
          <Link
            className="visible-link"
            to={routes.BIDS.path.replace(":id", itemId)}
          >
            {offers} offers
          </Link>
        </Typography>
      </div>
      <form onSubmit={onSubmitHandler}>
        <TextField
          className={classes.textField}
          label="inserisci l'offerta massima"
          variant="outlined"
          autoComplete="off"
          maxLength="10"
          color="primary"
          value={amount}
          onChange={onAmountChangeHandler}
          disabled={loading}
        />
        <ButtonWithLoader
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
          loading={loading}
        >
          Fai un'offerta
        </ButtonWithLoader>
      </form>
    </div>
  );
}
