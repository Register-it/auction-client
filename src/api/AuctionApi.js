import {
  useLazyQuery,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { hasAuthorizationError, parseGraphQLError } from "./ErrorHandler";
import { useLoggedUser } from "./LoginApi";
import { useServerNotification } from "./NotificationApi";

export const GET_ITEMS = gql`
  query getItems($page: Int, $size: Int) {
    items(page: $page, size: $size) {
      totalElements
      current
      isLast
      isFirst
      elements {
        title
        id
        thumbnails(limit: 1)
        auctionExpiration
        currentPrice
        initialPrice
        bidsNumber
      }
    }
  }
`;
export const GET_ITEM = gql`
  query getItem($id: ID!) {
    item(id: $id) {
      title
      description
      id
      thumbnails
      auctionExpiration
      currentPrice
      initialPrice
      bidsNumber
      images
      watched
    }
  }
`;
export const IS_WATCHED = gql`
  query isWatched($id: ID!) {
    item(id: $id) {
      watched
    }
  }
`;
export const GET_BIDS = gql`
  query getBids($itemId: ID!) {
    bids(itemId: $itemId) {
      id
      username
      amount
      dateTime
    }
  }
`;
export const PLACE_BID = gql`
  mutation PlaceBid($itemId: ID!, $amount: Currency!) {
    bid(itemId: $itemId, amount: $amount) {
      id
      amount
    }
  }
`;

export const WATCH_ITEM = gql`
  mutation Watch($itemId: ID!) {
    watch(itemId: $itemId)
  }
`;

export const UNWATCH_ITEM = gql`
  mutation Unatch($itemId: ID!) {
    unwatch(itemId: $itemId)
  }
`;

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
        thumbnails
      }
      type
    }
  }
`;

const DASHBOARD_ITEMS_LIMIT = 4;

export const USER_DASHBOARD = gql`
  query UserDashboard($limit: Int) {
    me {
      watched(limit: $limit) {
        id
        title
        thumbnails(limit: 1)
        currentPrice
        bidsNumber
      }
      bid(limit: $limit) {
        id
        title
        thumbnails(limit: 1)
        currentPrice
        bidsNumber
      }
      awarded(limit: $limit) {
        id
        title
        thumbnails(limit: 1)
        currentPrice
        bidsNumber
      }
    }
  }
`;

const LIMIT = 15;

export function useSearch(page) {
  const { loading, data, error } = useQuery(GET_ITEMS, {
    variables: {
      page,
      size: LIMIT,
    },
  });

  let items = Array(LIMIT).fill({});
  let pagination = { resultPerPage: LIMIT };
  if (data) {
    items = data.items.elements;
    let { isLast, totalElements, isFirst } = data.items;
    pagination = {
      ...pagination,
      isLast,
      totalElements,
      isFirst,
    };
  }
  return { loading, items, error, pagination };
}

export function useGetItem(id) {
  let { loading, data, error } = useQuery(GET_ITEM, {
    variables: {
      id,
    },
  });

  let loaded = false;

  let item = {};
  if (data) {
    if (data.item === null) {
      error = "Oggetto non trovato";
    } else {
      item = data.item;
      loaded = true;
    }
  }
  return { loading, item, error, loaded };
}
export function useIsItemWatched(id) {
  let [getWathedQuery, { loading, data, error }] = useLazyQuery(IS_WATCHED, {
    fetchPolicy: "no-cache",
    variables: {
      id,
    },
  });
  let watched = false;

  if (data) {
    if (data.item === null) {
      error = "Oggetto non trovato";
    } else {
      watched = data.item.watched ? true : false;
    }
  }
  return [getWathedQuery, { loading, watched, error }];
}

export function useGetBids(itemId) {
  let { loading, data, error } = useQuery(GET_BIDS, {
    variables: {
      itemId,
    },
  });
  let loaded = false;
  let bids = [];
  if (data) {
    bids = data.bids;
    loaded = true;
  }
  return { loading, bids, error, loaded };
}

export function useWatchItem(itemId) {
  const [
    checkIfWatched,
    { watched, loading: isWatchedLoading },
  ] = useIsItemWatched(itemId);

  const user = useLoggedUser();

  // useEffect(() => {
  //   checkIfWatched();
  // }, []);

  useEffect(() => {
    checkIfWatched();
  }, [user, checkIfWatched]);

  const [watchMutation, { loading, error }] = useMutation(WATCH_ITEM, {
    fetchPolicy: "no-cache",
    onError: () => {},
    onCompleted: () => {
      checkIfWatched();
    },
  });

  const [
    unwatchMutation,
    { loading: unwatchLoaing, error: unwatchError },
  ] = useMutation(UNWATCH_ITEM, {
    fetchPolicy: "no-cache",
    onError: () => {},
    onCompleted: () => {
      checkIfWatched();
    },
  });

  function toggleWatch() {
    if (watched) {
      unwatchMutation({
        variables: {
          itemId,
        },
      });
    } else {
      watchMutation({
        variables: {
          itemId,
        },
      });
    }
  }

  return {
    watched,
    toggleWatch,
    loading: loading || unwatchLoaing || isWatchedLoading,
    error: hasAuthorizationError(error || unwatchError)
      ? null
      : error || unwatchError,
  };
}

export function usePlaceBid(itemId) {
  const [bidPlaced, setBidPlaced] = useState(false);

  const [placeBidMutation, { loading, error }] = useMutation(PLACE_BID, {
    fetchPolicy: "no-cache",
    onError: () => {},
    onCompleted: () => {
      setBidPlaced(true);
    },
    refetchQueries: [
      {
        query: GET_ITEM,
        variables: {
          id: itemId,
        },
      },
      {
        query: GET_BIDS,
        variables: {
          itemId: itemId,
        },
      },
    ],
  });

  function placeBid(amount) {
    if (amount === "") {
      return;
    }
    setBidPlaced(false);
    placeBidMutation({
      variables: {
        itemId,
        amount: parseAmount(amount),
      },
    });
  }

  return {
    loading,
    error: parseGraphQLError(error),
    placeBid,
    bidPlaced,
  };
}

export function useDashboard() {
  const { loading, data, error } = useQuery(USER_DASHBOARD, {
    variables: {
      limit: DASHBOARD_ITEMS_LIMIT,
    },
  });

  let watched = Array(DASHBOARD_ITEMS_LIMIT).fill({});
  let bidded = Array(DASHBOARD_ITEMS_LIMIT).fill({});
  let awarded = Array(DASHBOARD_ITEMS_LIMIT).fill({});
  if (data) {
    watched = data.me.watched;
    bidded = data.me.bid;
    awarded = data.me.awarded;
  }
  return { loading, watched, bidded, awarded, error };
}

export function useAuctionNotification() {
  const handleServerNotification = useServerNotification();
  function onSubscriptionData({ subscriptionData }) {
    if (subscriptionData && subscriptionData.data) {
      handleServerNotification(subscriptionData.data.auctionEvent);
    }
  }

  useSubscription(NOTIFICATION_SUBSCRIPTION, {
    onSubscriptionData: onSubscriptionData,
  });
}

function parseAmount(amount) {
  amount = amount.replace(",", ".");
  return parseFloat(amount, 2);
}
