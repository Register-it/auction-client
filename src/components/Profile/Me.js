import { Avatar, CardHeader, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useLoggedUser, useRequireLoggedUser } from "../../api/LoginApi";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#ccc",
  },
}));

export default function Me() {
  const classes = useStyles();
  const requireLoggedUSer = useRequireLoggedUser();
  const user = useLoggedUser();
  useEffect(() => {
    requireLoggedUSer();
  }, [user, requireLoggedUSer]);
  requireLoggedUSer();
  console.log(user);
  if (!user) {
    return null;
  }
  const { firstName, lastName, image, email } = user;
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
        subheader={email}
      />
        <Navigation />
    </section>
  );
}
