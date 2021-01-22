import { Avatar, CardHeader, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import {
  useLoggedUser,
  useLogout,
  useRequireLoggedUser,
} from "../../api/LoginApi";
import ButtonWithLoader from "../ButtonWithLoader";
import ProfilePage from "./ProfilePage";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#ccc",
  },
}));

export default function Me() {
  const classes = useStyles();
  const requireLoggedUSer = useRequireLoggedUser();
  const user = useLoggedUser();
  const { logout, loading } = useLogout();
  useEffect(() => {
    requireLoggedUSer();
  }, [user, requireLoggedUSer]);
  requireLoggedUSer();
  if (!user) {
    return null;
  }
  function handleLogout() {
    logout();
  }

  const { firstName, lastName, image } = user;
  return (
    <section>
      <CardHeader
        avatar={
          <Avatar
            aria-label={`${firstName} ${lastName}`}
            className={classes.avatar}
            src={image}
          ></Avatar>
        }
        title={`${firstName} ${lastName}`}
        subheader={
          <ButtonWithLoader
            color="secondary"
            variant="outlined"
            onClick={handleLogout}
            loading={loading}
            size="small"
          >
            Logout
          </ButtonWithLoader>
        }
      />
      <ProfilePage />
    </section>
  );
}
