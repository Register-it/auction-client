import { useGetAndSet } from "react-context-hook";
import { Store } from "../../api/Store";

export function useNotifications() {
  const [notifications, setNotifications] = useGetAndSet(
    Store.NOTIFICATIONS,
    []
  );

  function addNotification(text) {
    notifications.push({ text, id: notifications.length });
    setNotifications([...notifications]);
  }

  function removeNotification(notification) {
    const index = notifications.findIndex((n) => n.id === notification.id);
    notifications.splice(index, 1);
    setNotifications([...notifications]);
  }

  return { addNotification, removeNotification };
}
