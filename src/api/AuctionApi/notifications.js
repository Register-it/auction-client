import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useServerNotification } from "../NotificationApi";

export const NOTIFICATION_SUBSCRIPTION = gql`
  subscription GetNotification {
    auctionEvent {
      bid {
        id
        username
        amount
        dateTime
      }
      item {
        title
        id
        currentPrice
        bidsNumber
        watched
        thumbnails(limit: 1)
        auctionExpiration
      }
      type
    }
  }
`;

export function useAuctionNotification() {
  const handleServerNotification = useServerNotification();
  function onSubscriptionData({ subscriptionData }) {
    if (subscriptionData && subscriptionData.data) {
      handleServerNotification(subscriptionData.data.auctionEvent);
    }
  }

  useSubscription(NOTIFICATION_SUBSCRIPTION, {
    onSubscriptionData: onSubscriptionData,
    shouldResubscribe: true,
  });
}
