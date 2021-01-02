import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardHeader } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    margin: theme.spacing(),
    width: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    "@media (max-width: 680px)": {
      padding: theme.spacing(),
    },
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    height: 151,
    "@media (max-width: 680px)": {
      maxHeight: 80,
      margin: theme.spacing(),
    },
  },
}));

export default function ItemPreviewLoader() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Skeleton animation="wave" width={225} height={169} />
      <div className={classes.details}>
        <CardHeader
          title={<Skeleton animation="wave" width={300} height={32} />}
          subheader={<Skeleton animation="wave" width={300} height={24} />}
          className={classes.header}
        />
        <CardContent>
          <Skeleton animation="wave" width={300} height={32} />
          <Skeleton animation="wave" width={300} height={24} />
        </CardContent>
      </div>
    </Card>
  );
}
