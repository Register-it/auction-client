import dayjs from "dayjs";
import { useGetAndSet } from "react-context-hook";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";
import { Store } from "./Store";

export function useNotifications() {
  const [notifications, setNotifications] = useGetAndSet(
    Store.NOTIFICATIONS,
    []
  );

  function addNotification(content) {
    notifications.push({
      ...content,
      id: notifications.length,
      type: content.type || "info",
    });
    setNotifications([...notifications]);
  }

  function removeNotification(notification) {
    const index = notifications.findIndex((n) => n.id === notification.id);
    notifications.splice(index, 1);
    setNotifications([...notifications]);
  }

  return { addNotification, removeNotification };
}

export function useServerNotification() {
  const { addNotification } = useNotifications();
  const history = useHistory();

  return function (auctionEvent) {
    const {
      type,
      item: { title, thumbnails, currentPrice, auctionExpiration, id },
    } = auctionEvent;

    const notification = {
      action: {
        label: "Vai all'oggetto",
        onClick: () => {
          history.push(routes.ITEM.path.replace(":id", id));
        },
      },
      content: {
        image: thumbnails[0],
        primaryText: title,
        secondaryText: `EUR ${currentPrice}`,
        description: dayjs(auctionExpiration).format("DD MMM YYYY HH:mm:ss"),
      },
    };

    switch (type) {
      case "NEW_BID":
        notification.type = "info";
        notification.title = "Un'offerta su un oggetto che segui";
        break;
      case "BID_EXCEEDED":
        notification.type = "warning";
        notification.title = "La tua offerta è stata superata";
        break;
      case "AUCTION_EXPIRED":
        notification.type = "info";
        notification.title = "L'asta è terminata";
        break;
      case "ITEM_AWARDED":
        notification.type = "success";
        notification.title = "Ti sei aggiudicato l'oggetto";
        break;
      default:
        notification.type = "info";
        notification.title = "Forse potrebbe interessarti";
        break;
    }

    addNotification(notification);
  };
}
