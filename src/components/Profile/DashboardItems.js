import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { Skeleton } from "@material-ui/lab";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    minWidth: 450,
  },
  gridList: {
    minWidth: "100%",
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function DashboardItems({ items, loading }) {
  const classes = useStyles();

  if (loading) {
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {items.map((item) => (
            <div style={{ padding: 16 }}>
              <Skeleton animation="wave" width={265} height={180} />
            </div>
          ))}
        </GridList>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {items.length === 0 && (
        <p>
          <Link to={routes.HOME.path}>
            Nothing here... <br></br>
            <Button variant="contained" color="primary">
              Start shopping
            </Button>
          </Link>{" "}
        </p>
      )}
      <GridList className={classes.gridList} cols={2.5}>
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
      </GridList>
    </div>
  );
}
