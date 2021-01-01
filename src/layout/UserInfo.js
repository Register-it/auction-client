import {
  Button,
  Divider,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { useLoggedUser, useLogout } from "../api/useLoginApi";
import { routes } from "../routes";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(),
  },
}));

export default function UserInfo() {
  const classes = useStyles();
  const user = useLoggedUser();
  if (user) {
    return <UserPanel user={user} />;
  } else {
    return (
      <Link to={routes.LOGIN.path} className={classes.link}>
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
    );
  }
}

function UserPanel({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const logout = useLogout();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogout() {
    logout();
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
