import {
  Paper,
  ListItem,
  ListItemText,
  List,
  Divider,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemPreview from "../Home/ItemPreview";
import MakeAnOffer from "../Item/MakeAnOffer";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));
export default function ViewBids() {
  let { id } = useParams();
  const classes = useStyles();

  return (
    <div>
      <Link className="visible-link" to={`/item/${id}`}>
        ← Torna alla descrizione dell'oggetto
      </Link>
      <Typography variant="h4">Cronologia dell'offerta</Typography>
      <Paper className={classes.paper}>
        <div>
          <Typography component="span">Offerenti: </Typography>
          <Typography component="strong">2</Typography>
        </div>
        <div>
          <Typography component="span">Offerte: </Typography>
          <Typography component="strong">10</Typography>
        </div>
        <div>
          <Typography component="span">Tempo rimasto: </Typography>
          <Typography component="strong">4 giorni 3 ore 8 minuti</Typography>
        </div>

        <List>
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="EUR 55,50 - 30 dic 2020, alle 11:25:08 CET" />
          </ListItem>
          <Divider />
        </List>
      </Paper>
      <Paper className={classes.paper}>
        <MakeAnOffer itemId={id} offers={10} price={56} />
        <ItemPreview
          small
          item={{
            title: "test",
            thumbnails: [""],
            id: "12",
            currentPrice: 56,
            auctionExpiration: new Date(),
            bidsNumber: 6,
          }}
        />
      </Paper>
    </div>
  );
}
