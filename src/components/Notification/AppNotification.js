import React from "react";
import { useStore } from "react-context-hook";
import { Store } from "../../api/Store";

import Notification from "./Notification";
import { useNotifications } from "../../api/NotificationApi";

export default function AppNotification() {
  const [notifications] = useStore(Store.NOTIFICATIONS, []);
  const { removeNotification } = useNotifications();

  function onNotificationClosed(notification) {
    removeNotification(notification);
  }

  return notifications.map(
    (notification) =>
      notification && (
        <Notification
          key={`${notification.id}-${notification.text}`}
          notification={notification}
          isOpen
          onClose={onNotificationClosed}
        />
      )
  );
}
