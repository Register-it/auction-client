import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import { Button } from "@material-ui/core";
import { useWatchedItems, WatchedItemType } from "../../api/AuctionApi";
import ItemPreviewLoader from "../Home/ItemPreviewLoader";
import { Skeleton } from "@material-ui/lab";
import Error from "../Error/Error";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 680,
    height: "calc(100vh - 30%)",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function WathedItems({ title }) {
  const classes = useStyles();

  const type = {
    [routes.WATHED_ITEMS.path]: WatchedItemType.WATCHED_ITEMS,
    [routes.BIDDED_ITEMS.path]: WatchedItemType.BID_ITEMS,
    [routes.AWARDED_ITEMS.path]: WatchedItemType.AWARDED_ITEMS,
  }

  const path = useLocation().pathname;
  const { loading, items, error, pagination, fetchMore } = useWatchedItems(type[path], 0);
  const { isLast, current } = pagination;

  function loadMoreItems() {
    fetchMore(current + 1);
  }

  if (loading) {
    return (
      <section>
        <Skeleton animation="wave" width={`100%`} height={60} />
        {items.map((_) => (
          <ItemPreviewLoader key={Math.random().toString(8)} />
        ))}
      </section>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={classes.root}>
      <h3>{title}</h3>
      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        {items.map((item) => (
          <GridListTile key={item.id} cols={1}>
            <img src={item.thumbnails} alt={item.title} />
            <Link to={routes.ITEM.path.replace(":id", item.id)}>
              <GridListTileBar
                title={item.title}
                subtitle={<span>EUR {item.currentPrice}</span>}
              />
            </Link>
          </GridListTile>
        ))}
        {!isLast && (
          <GridListTile cols={1}>
            <Button variant="contained" color="primary" onClick={loadMoreItems}>
              More...
            </Button>
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}
