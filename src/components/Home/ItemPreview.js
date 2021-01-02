import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuctionExpiration from "../AuctionExpiration";
import { routes } from "../../routes";

export default function ItemPreview({ item, small = false }) {
  const classes = useStyles();
  const {
    title,
    thumbnails,
    id,
    currentPrice,
    auctionExpiration,
    bidsNumber,
  } = item;
  return (
    <Card className={classes.root}>
      <Link to={`/item/${id}`} className="link-normal">
        <CardMedia
          className={classes.cover}
          image={
            thumbnails[0] ? thumbnails[0] : `https://via.placeholder.com/225`
          }
          title={title}
        />
      </Link>
      <div className={small ? classes.detailsSmall : classes.details}>
        <Link to={`/item/${id}`} className="link-normal">
          <CardHeader
            title={title}
            subheader={
              <>
                Scadenza: <AuctionExpiration date={auctionExpiration} />
              </>
            }
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
          >
            <Link
              className="visible-link"
              to={routes.BIDS.path.replace(":id", id)}
            >
              {bidsNumber} offers
            </Link>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    margin: theme.spacing(),
    "@media (max-width: 680px)": {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "480",
    minWidth: 480,
    "@media (max-width: 680px)": {
      minWidth: "50%",
      maxWidth: "100%",
    },
  },
  detailsSmall: {
    display: "flex",
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
      width: 352,
      margin: theme.spacing(),
    },
  },
}));
