import { Button } from "@material-ui/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import { useGetItem } from "../../api/useAuctionApi";
import HtmlPageMetadata from "../HtmlPageMetadata";
import ItemCarousel from "./ItemCarousel";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useParams, useHistory } from "react-router-dom";

import MakeAnOffer from "./MakeAnOffer";
import ItemLoading from "./ItemLoading";
import Error from "../Error/Error";
import AuctionExpiration from "../AuctionExpiration";

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
  description: {
    padding: theme.spacing(2),
    lineHeight: "1.7rem",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 680px)": {
      flexDirection: "column",
    },
  },
  offers: {
    marginLeft: theme.spacing(),
  },
}));

export default function Item() {
  let { id } = useParams();
  const { item, error, loading } = useGetItem(id);
  const classes = useStyles();

  const {
    title,
    description,
    bidsNumber,
    currentPrice,
    images,
    thumbnails = [],
    auctionExpiration,
  } = item;

  if (loading) {
    return <ItemLoading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <article>
      <HtmlPageMetadata title={title} description={description} />
      <BackToResults />

      <Card className={classes.root}>
        <div className={classes.info}>
          <ItemCarousel thumbnails={thumbnails} images={images} />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Scadenza: <AuctionExpiration date={auctionExpiration} />
              </Typography>

              <MakeAnOffer
                price={currentPrice}
                offers={bidsNumber}
                itemId={id}
              />
            </CardContent>
          </div>
        </div>
        <ReactMarkdown
          className={classes.description}
          source={description}
          linkTarget="_blank"
          escapeHtml={false}
        />
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
