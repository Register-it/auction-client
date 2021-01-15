import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { Button } from "@material-ui/core";

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

  const { items } = data;

  const { totalPages, current } = items;

  return (
    <div className={classes.root}>
      <h3>{title}</h3>
      <GridList cols={3} cellHeight={180} className={classes.gridList}>
        {items.elements.map((item) => (
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
        {totalPages > current && (
          <GridListTile cols={1}>
            <Button variant="contained" color="primary">
              More...
            </Button>
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}

const data = {
  items: {
    totalElements: 113,
    totalPages: 2,
    current: 0,
    isLast: false,
    isFirst: true,
    elements: [
      {
        title: "Schermo",
        id: "2",
        thumbnails: [
          "https://images.unsplash.com/photo-1587251029040-f5a10e9d281b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxtb25pdG9yLXBjfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1587251029040-f5a10e9d281b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxtb25pdG9yLXBjfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1555940280-66bf87aa823d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxtb25pdG9yLXBjfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxtb25pdG9yLXBjfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxtb25pdG9yLXBjfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1580628848100-23832926d76d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxBbHBpbmUtUmVuYXVsdC0xMzAwfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1596215305177-79a8f732636e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxBbHBpbmUtUmVuYXVsdC0xMzAwfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1596215516573-fdeebc0b6070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxBbHBpbmUtUmVuYXVsdC0xMzAwfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1596923758458-e9266e40e8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxBbHBpbmUtUmVuYXVsdC0xMzAwfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-27T18:00:00",
        currentPrice: 1000.5,
        initialPrice: 1000.5,
        bidsNumber: 5,
        __typename: "Item",
      },
      {
        title: "1972 Alfa Romeo GTA",
        id: "5",
        thumbnails: [
          "https://images.unsplash.com/photo-1598946808350-f220c89155f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxBbGZhLVJvbWVvLUdUQXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1598946808350-f220c89155f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxBbGZhLVJvbWVvLUdUQXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1559302966-2615e1bfe075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxBbGZhLVJvbWVvLUdUQXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1559302966-9d53337e8775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxBbGZhLVJvbWVvLUdUQXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1589389296615-a837694436a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxBbGZhLVJvbWVvLUdUQXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-10T06:22:26",
        currentPrice: 85.75,
        initialPrice: 85.68,
        bidsNumber: 7,
        __typename: "Item",
      },
      {
        title: "1962 LanciaA Delta 16V",
        id: "6",
        thumbnails: [
          "https://images.unsplash.com/photo-1593981211728-41e4e796ec96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxMYW5jaWFBLURlbHRhLTE2VnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1593981211728-41e4e796ec96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxMYW5jaWFBLURlbHRhLTE2VnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1598985830764-81bdbf6cd566?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxMYW5jaWFBLURlbHRhLTE2VnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1603373078379-f9d299949658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxMYW5jaWFBLURlbHRhLTE2VnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1543411789-1a67a2ac05c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxMYW5jaWFBLURlbHRhLTE2VnxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-13T17:06:20",
        currentPrice: 104.0,
        initialPrice: 103.42,
        bidsNumber: 1,
        __typename: "Item",
      },
      {
        title: "1968 Ford Mustang",
        id: "7",
        thumbnails: [
          "https://images.unsplash.com/photo-1522683524546-0c20a8d704a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxGb3JkLU11c3Rhbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1522683524546-0c20a8d704a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxGb3JkLU11c3Rhbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1533788122296-adc237562388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxGb3JkLU11c3Rhbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1560801877-7bda6dd63e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxGb3JkLU11c3Rhbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1601291892109-ea0ab5e549b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxGb3JkLU11c3Rhbmd8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-14T18:24:23",
        currentPrice: 95.34,
        initialPrice: 95.34,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1958 Setra Bus",
        id: "9",
        thumbnails: [
          "https://images.unsplash.com/photo-1581358707323-cd7494568e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxTZXRyYS1CdXN8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1581358707323-cd7494568e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxTZXRyYS1CdXN8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1590951360207-317cb18098b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxTZXRyYS1CdXN8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1593621283277-1c3a5cc1daf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxTZXRyYS1CdXN8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1564694202883-46e7448c1b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxTZXRyYS1CdXN8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-13T04:21:31",
        currentPrice: 77.9,
        initialPrice: 77.9,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "Corsair F4U ( Bird Cage)",
        id: "79",
        thumbnails: [
          "https://images.unsplash.com/photo-1563278689-3519903a3e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDb3JzYWlyLUY0VS0oLUJpcmQtQ2FnZSl8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1563278689-3519903a3e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDb3JzYWlyLUY0VS0oLUJpcmQtQ2FnZSl8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1581161462738-125e3c17e44b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxDb3JzYWlyLUY0VS0oLUJpcmQtQ2FnZSl8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1573823746996-4d1aa4426beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxDb3JzYWlyLUY0VS0oLUJpcmQtQ2FnZSl8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1562168883-a2c1dc9cf7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxDb3JzYWlyLUY0VS0oLUJpcmQtQ2FnZSl8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-11T08:41:28",
        currentPrice: 29.34,
        initialPrice: 29.34,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1957 Vespa GS150",
        id: "47",
        thumbnails: [
          "https://images.unsplash.com/photo-1561386944-117e1e6a8b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxWZXNwYS1HUzE1MHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1561386944-117e1e6a8b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxWZXNwYS1HUzE1MHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1589559145880-777c9137daac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxWZXNwYS1HUzE1MHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1572838955527-d004a55a98cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxWZXNwYS1HUzE1MHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1603546787633-33815389080e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxWZXNwYS1HUzE1MHxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-11T22:46:17",
        currentPrice: 32.95,
        initialPrice: 32.95,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1941 Chevrolet Special Deluxe Cabriolet",
        id: "48",
        thumbnails: [
          "https://images.unsplash.com/photo-1512631708416-5f69fa31769d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDaGV2cm9sZXQtU3BlY2lhbC1EZWx1eGUtQ2FicmlvbGV0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1512631708416-5f69fa31769d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDaGV2cm9sZXQtU3BlY2lhbC1EZWx1eGUtQ2FicmlvbGV0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1477439913201-bd7ec30f7745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxDaGV2cm9sZXQtU3BlY2lhbC1EZWx1eGUtQ2FicmlvbGV0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1597795178677-dd878873a94a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxDaGV2cm9sZXQtU3BlY2lhbC1EZWx1eGUtQ2FicmlvbGV0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1599486349027-77fd046baf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxDaGV2cm9sZXQtU3BlY2lhbC1EZWx1eGUtQ2FicmlvbGV0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-12T15:32:57",
        currentPrice: 64.58,
        initialPrice: 64.58,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1970 Triumph Spitfire",
        id: "49",
        thumbnails: [
          "https://images.unsplash.com/photo-1545084242-4a7800829385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxUcml1bXBoLVNwaXRmaXJlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1545084242-4a7800829385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxUcml1bXBoLVNwaXRmaXJlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1566074563147-bfca4bd58cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxUcml1bXBoLVNwaXRmaXJlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1564838024325-70d3f4a2b384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxUcml1bXBoLVNwaXRmaXJlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1584295712784-88c84809a654?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxUcml1bXBoLVNwaXRmaXJlfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-12T09:25:53",
        currentPrice: 91.92,
        initialPrice: 91.92,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1932 Alfa Romeo 8C2300 Spider Sport",
        id: "50",
        thumbnails: [
          "https://images.unsplash.com/photo-1557747407-5ef5ff3114e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxBbGZhLVJvbWVvLThDU3BpZGVyLVNwb3J0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1557747407-5ef5ff3114e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxBbGZhLVJvbWVvLThDU3BpZGVyLVNwb3J0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1583025684166-c0a2a2102451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxBbGZhLVJvbWVvLThDU3BpZGVyLVNwb3J0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1595057602304-8b54f16dc1b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxBbGZhLVJvbWVvLThDU3BpZGVyLVNwb3J0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1595803471186-8816059f097a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxBbGZhLVJvbWVvLThDU3BpZGVyLVNwb3J0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-09T00:30:36",
        currentPrice: 43.26,
        initialPrice: 43.26,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1940s Ford truck",
        id: "52",
        thumbnails: [
          "https://images.unsplash.com/photo-1574788517201-edbbaacce376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHwxOTQwcy1Gb3JkLXRydWNrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1574788517201-edbbaacce376?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHwxOTQwcy1Gb3JkLXRydWNrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1602875935230-0733de0547b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHwxOTQwcy1Gb3JkLXRydWNrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1588368671323-dcc2a7872e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHwxOTQwcy1Gb3JkLXRydWNrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1588194550132-27ef7ed7e32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHwxOTQwcy1Gb3JkLXRydWNrfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-10T13:45:01",
        currentPrice: 84.76,
        initialPrice: 84.76,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1939 Cadillac Limousine",
        id: "53",
        thumbnails: [
          "https://images.unsplash.com/photo-1472573973708-b55521f3bdc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDYWRpbGxhYy1MaW1vdXNpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1472573973708-b55521f3bdc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDYWRpbGxhYy1MaW1vdXNpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1604235733588-e71d1b67359b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxDYWRpbGxhYy1MaW1vdXNpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1539050920372-4bf85b92df55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxDYWRpbGxhYy1MaW1vdXNpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1534982277563-1a412863791f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxDYWRpbGxhYy1MaW1vdXNpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-11T01:58:59",
        currentPrice: 23.14,
        initialPrice: 23.14,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1957 Corvette Convertible",
        id: "54",
        thumbnails: [
          "https://images.unsplash.com/photo-1602731898609-9e36367f0680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDb3J2ZXR0ZS1Db252ZXJ0aWJsZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1602731898609-9e36367f0680?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDb3J2ZXR0ZS1Db252ZXJ0aWJsZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1572994262363-7d2fcb454216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxDb3J2ZXR0ZS1Db252ZXJ0aWJsZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1577854037936-fa62555a4765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxDb3J2ZXR0ZS1Db252ZXJ0aWJsZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1601466151938-27dbb179f418?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxDb3J2ZXR0ZS1Db252ZXJ0aWJsZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-08T16:39:55",
        currentPrice: 69.93,
        initialPrice: 69.93,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1957 Ford Thunderbird",
        id: "55",
        thumbnails: [
          "https://images.unsplash.com/photo-1525878880878-b5c9dd615de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxGb3JkLVRodW5kZXJiaXJkfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1525878880878-b5c9dd615de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxGb3JkLVRodW5kZXJiaXJkfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1563915496162-bede335d4462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxGb3JkLVRodW5kZXJiaXJkfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1563915498212-79428341a3d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxGb3JkLVRodW5kZXJiaXJkfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1563915499421-49c63eaf4eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxGb3JkLVRodW5kZXJiaXJkfGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-11T05:22:38",
        currentPrice: 34.21,
        initialPrice: 34.21,
        bidsNumber: 0,
        __typename: "Item",
      },
      {
        title: "1970 Chevy Chevelle SS 454",
        id: "56",
        thumbnails: [
          "https://images.unsplash.com/photo-1584343292021-f2d13cb7711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDaGV2eS1DaGV2ZWxsZS1TUy00NTR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=200",
        ],
        images: [
          "https://images.unsplash.com/photo-1584343292021-f2d13cb7711a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwxfHxDaGV2eS1DaGV2ZWxsZS1TUy00NTR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/29/stairway.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwyfHxDaGV2eS1DaGV2ZWxsZS1TUy00NTR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1563144007-dd142388ad4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHwzfHxDaGV2eS1DaGV2ZWxsZS1TUy00NTR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
          "https://images.unsplash.com/photo-1563144007-1c1a4e7cc3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMTc0OTB8MHwxfHNlYXJjaHw0fHxDaGV2eS1DaGV2ZWxsZS1TUy00NTR8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        auctionExpiration: "2021-02-07T00:53:26",
        currentPrice: 49.24,
        initialPrice: 49.24,
        bidsNumber: 0,
        __typename: "Item",
      },
    ],
    __typename: "Page",
  },
};
