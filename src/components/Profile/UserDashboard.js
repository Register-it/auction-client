import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DashboardItems from "./DashboardItems";
import { useDashboard } from "../../api/AuctionApi";
import Error from "../Error/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    minWidth: 600,
  },
}));

export default function UserDashboard() {
  const classes = useStyles();

  const { awarded, bidded, watched, error, loading } = useDashboard();

  return (
    <div className={classes.root}>
      {error && <Error />}
      <h2>Oggetti osservati</h2>
      <DashboardItems items={watched} loading={loading} />
      <h2>Le mie offerte</h2>
      <DashboardItems items={bidded} loading={loading} />
      <h2>Aste aggiudicate</h2>
      <DashboardItems items={awarded} loading={loading} />
    </div>
  );
}
