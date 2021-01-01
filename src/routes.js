import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import Login from "./components/Login/Login";
import ViewBids from "./components/ViewBids/ViewBids";

export const routes = {
  LOGIN: { path: "/login", exact: true, component: Login },
  HOME: { path: "/", exact: true, component: Home },
  ITEM: { path: "/:slug-:id", exact: true, component: Item },
  BIDS: { path: "/:id/bids", exact: true, component: ViewBids },
};
