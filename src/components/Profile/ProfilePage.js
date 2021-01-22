import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WatchedIcon from "@material-ui/icons/Visibility";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BiddedIcon from "@material-ui/icons/LocalOffer";
import AwardedIcon from "@material-ui/icons/Check";

import WatchedItems from "./WatchedItems";
import { Route, NavLink as Link } from "react-router-dom";
import { routes } from "../../routes";
import UserDashboard from "./UserDashboard";

function TabPanel(props) {
  const { children, route, exact = false,...other } = props;

  return (
    <Route path={route} exact={exact}>
      <div {...other}>{children}</div>
    </Route>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 250,
    marginRight: theme.spacing()
  },
  activeLink: {
    borderRight: `3px solid ${theme.palette.divider}`,
  }
}));

export default function ProfilePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.tabs}
      >
        <ListItem button component={Link} exact to={routes.ME.path} activeClassName={classes.activeLink}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to={routes.WATHED_ITEMS.path} activeClassName={classes.activeLink}>
          <ListItemIcon>
            <WatchedIcon />
          </ListItemIcon>
          <ListItemText primary="Oggetti osservati" />
        </ListItem>
        <ListItem button component={Link} to={routes.BIDDED_ITEMS.path} activeClassName={classes.activeLink}>
          <ListItemIcon>
            <BiddedIcon />
          </ListItemIcon>
          <ListItemText primary="Le mie offerte" />
        </ListItem>
        <ListItem button component={Link} to={routes.AWARDED_ITEMS.path} activeClassName={classes.activeLink}>
          <ListItemIcon>
            <AwardedIcon />
          </ListItemIcon>
          <ListItemText primary="Oggetti aggiudicati" />
        </ListItem>
      </List>
      <TabPanel route={routes.ME.path} exact>
       <UserDashboard />
      </TabPanel>
      <TabPanel route={routes.WATHED_ITEMS.path}>
        <WatchedItems title="Oggetti osservati" />
      </TabPanel>
      <TabPanel route={routes.BIDDED_ITEMS.path}>
        <WatchedItems title="Offerte" />
      </TabPanel>
      <TabPanel route={routes.AWARDED_ITEMS.path}>
        <WatchedItems title="Oggetti aggiudicati" />
      </TabPanel>
    </div>
  );
}
