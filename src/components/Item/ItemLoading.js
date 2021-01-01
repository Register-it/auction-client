import { Button } from "@material-ui/core";
import React from "react";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  title: {
    fontWeight: "strong",
  },
  info: {
    display: "flex",
    flexDirection: "row",
  },
  description: {
    padding: theme.spacing(2),
    lineHeight: "1.7rem",
  },
  offers: {
    marginLeft: theme.spacing(),
  },
}));

export default function ItemLoading() {
  const classes = useStyles();

  return (
    <article>
      <BackToResults />

      <Card className={classes.root}>
        <div className={classes.info}>
          <Skeleton animation="wave" width={235} height={350} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Skeleton animation="wave" width={375} height={42} />
              <Skeleton animation="wave" width={350} height={38} />
              <div className={classes.info}>
                <Skeleton animation="wave" width={359} height={300} />
              </div>
              {/* <MakeAnOffer /> */}
            </CardContent>
          </div>
        </div>
        <Skeleton animation="wave" width={600} height={100} />
      </Card>
    </article>
  );
}

function BackToResults() {
  const history = useHistory();
  function backToResults() {
    history.goBack();
  }
  return (
    <Button onClick={backToResults}>
      <BackIcon /> Back
    </Button>
  );
}
