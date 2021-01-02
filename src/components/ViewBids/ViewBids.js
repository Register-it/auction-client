import {
  Paper,
  ListItem,
  ListItemText,
  List,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import dayjs from "dayjs";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBids, useGetItem } from "../../api/useAuctionApi";
import AuctionExpiration from "../AuctionExpiration";
import Error from "../Error/Error";
import ItemPreview from "../Home/ItemPreview";
import MakeAnOffer from "../Item/MakeAnOffer";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  bidpart: {
    display: "inline-block",
    width: "33%",
    lineHeight: "2rem",
  },
}));

function byId(a, b) {
  return b.amount - a.amount;
}

function getBidders(bids) {
  const usersAndBids = bids.reduce((result, current) => {
    const stored = result[current.username] || 0;
    result[current.username] = stored + 1;
    return result;
  }, {});
  return Object.keys(usersAndBids).length;
}

export default function ViewBids() {
  let { id } = useParams();
  const classes = useStyles();

  const { loading, error, bids, loaded } = useGetBids(id);
  const {
    loading: itemLoading,
    item,
    loaded: itemLoaded,
    error: itemError,
  } = useGetItem(id);

  if (error || itemError) {
    return <Error />;
  }

  return (
    <div className={classes.root}>
      <Link className="visible-link" to={`/item/${id}`}>
        ← Torna alla descrizione dell'oggetto
      </Link>
      <Typography variant="h4">Cronologia dell'offerta</Typography>
      <Paper className={classes.paper}>
        {loading && <BidListPreview />}
        {loaded && <BidList bids={bids} item={item} />}
      </Paper>
      <Paper className={classes.paper}>
        {itemLoading && "loading..."}
        {itemLoaded && (
          <>
            <MakeAnOffer
              i
              price={item.currentPrice}
              offers={item.bidsNumber}
              itemId={item.id}
            />
            <ItemPreview small item={item} />
          </>
        )}
      </Paper>
    </div>
  );
}

function BidList({ bids, item }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography component="span">Tempo rimasto: </Typography>
        <Typography component="strong">
          {item && <AuctionExpiration date={item.auctionExpiration} />}
          {!item && "loading..."}
        </Typography>
      </div>
      <br></br>
      <div className={classes.bidpart}>
        <Typography component="span">Offerenti: </Typography>
        <Typography component="strong">{getBidders(bids)}</Typography>
      </div>
      <div className={classes.bidpart}>
        <Typography component="span">Offerte: </Typography>
        <Typography component="strong">{bids.length}</Typography>
      </div>
      <List>
        {bids.sort(byId).map((bid) => (
          <React.Fragment key={`${bid.__typename}-${bid.id}`}>
            <ListItem>
              <ListItemText primary={<BidRow bid={bid} />} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}

function BidListPreview() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Typography component="span">Tempo rimasto: </Typography>
        <Typography component="strong">
          <Skeleton animation="wave" width={"100%"} height={22} />
        </Typography>
      </div>
      <br></br>
      <div className={classes.bidpart}>
        <Typography component="span">Offerenti: </Typography>
        <Skeleton animation="wave" width={20} height={22} />
      </div>
      <div className={classes.bidpart}>
        <Typography component="span">Offerte: </Typography>
        <Skeleton animation="wave" width={20} height={22} />
      </div>
      <List>
        {Array(4).fill().map((bid) => (
          <React.Fragment key={Math.random().toString(8)}>
            <ListItem>
            <Skeleton animation="wave" width={"100%"} height={56} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>
  );
}

function BidRow({ bid }) {
  const classes = useStyles();
  return (
    <span>
      <span className={classes.bidpart}>EUR {bid.amount}</span>
      <span className={classes.bidpart}>{bid.username}</span>
      <span className={classes.bidpart}>
        {dayjs(bid.dateTime).format("DD MMM YYYY HH:mm:ss")}
      </span>
    </span>
  );
}
