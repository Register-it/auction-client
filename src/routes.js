import Home from "./components/Home/Home";
import Item from "./components/Item/Item";
import Login from "./components/Login/Login";
import ViewBids from "./components/ViewBids/ViewBids";
import Me from "./components/Profile/Me";

export const routes = {
  LOGIN: { path: "/login", exact: true, component: Login },
  HOME: { path: "/", exact: true, component: Home },
  ITEM: { path: "/item/:id", exact: true, component: Item },
  BIDS: { path: "/bids/:id", exact: true, component: ViewBids },
  ME: { path: "/me", exact: true, component: Me },
  WATHED_ITEMS: { path: "/me/watched", exact: true, component: Me },
  BIDDED_ITEMS: { path: "/me/bids", exact: true, component: Me },
  AWARDED_ITEMS: { path: "/me/awarded", exact: true, component: Me },
};
