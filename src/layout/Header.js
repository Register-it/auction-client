import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "../components/Search/Search";
import { makeStyles } from "@material-ui/core";

import UserInfo from "./UserInfo";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          component={Link}
          to="/"
        >
          Auctions
        </Typography>
        <Search />
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
}
