import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function ItemPreview({ item }) {
  const classes = useStyles();
  const { title, thumbnails, id, currentPrice, auctionExpiration, bidsNumber } = item;
  return (
   
      <Card className={classes.root}>
         <Link to={`/${toSlug(title)}-${id}`} className="link-normal">
        <CardMedia
          className={classes.cover}
          image={thumbnails[0] ? thumbnails[0] : `https://via.placeholder.com/225`}
          title={title}
        />
        </Link>
        <div className={classes.details}>
        <Link to={`/${toSlug(title)}-${id}`} className="link-normal">
          <CardHeader
            title={title}
            subheader={`scade il ${dayjs(auctionExpiration).format(
              "DD MMM YYYY HH:mm:ss"
            )}`}
            className={classes.header}
          />
          </Link>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              component="strong"
              display="block"
            >
              EUR {currentPrice}
            </Typography>
            <Typography
              variant="body2"
              className={classes.subheader}
              color="textSecondary"
              component="span"
              display="block"
            >{bidsNumber} offers
            </Typography>
          </CardContent>
        </div>
      </Card>
  );
}

function toSlug(title) {
  return title.replace(/[\W_]+/g, "_");
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    margin: theme.spacing(),
  },
  details: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 480,
    minWidth: 480,
    "@media (max-width: 680px)": {
      minWidth: "50%",
    },
  },
  header: {
    "@media (max-width: 680px)": {
      padding: theme.spacing(),
    },
  },
  content: {
    flex: "1 0 auto",
    paddingLeft: theme.spacing(2),
  },
  cover: {
    width: 225,
    height: 169,
    "@media (max-width: 680px)": {
      maxHeight: 80,
      margin: theme.spacing(),
    },
  },
}));
