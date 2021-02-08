import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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

export const GET_WATCHED_ITEMS = gql`
  query getWatchedItems($page: Int, $size: Int) {
    watchedItems(page: $page, size: $size) {
      totalElements
      current
      isLast
      isFirst
      elements {
        title
        id
        thumbnails(limit: 1)
        currentPrice
      }
    }
  }
`;

export const GET_BID_ITEMS = gql`
  query getBidItems($page: Int, $size: Int) {
    bidItems(page: $page, size: $size) {
      totalElements
      current
      isLast
      isFirst
      elements {
        title
        id
        thumbnails(limit: 1)
        currentPrice
      }
    }
  }
`;

export const GET_AWARDED_ITEMS = gql`
  query getAwardedItems($page: Int, $size: Int) {
    awardedItems(page: $page, size: $size) {
      totalElements
      current
      isLast
      isFirst
      elements {
        title
        id
        thumbnails(limit: 1)
        currentPrice
      }
    }
  }
`;

const LIMIT = 15;

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

export const WatchedItemType = {
  WATCHED_ITEMS: "watchedItems",
  BID_ITEMS: "bidItems",
  AWARDED_ITEMS: "awardedItems",
};

export function useWatchedItems(type, page) {
  const query = {
    [WatchedItemType.WATCHED_ITEMS]: GET_WATCHED_ITEMS,
    [WatchedItemType.BID_ITEMS]: GET_BID_ITEMS,
    [WatchedItemType.AWARDED_ITEMS]: GET_AWARDED_ITEMS,
  };

  const { loading, data, error, fetchMore } = useQuery(query[type], {
    variables: {
      page,
      size: LIMIT,
    },
  });

  let items = Array(LIMIT).fill({});
  let pagination = {};
  if (data) {
    items = data[type].elements;
    let { isLast, current } = data[type];
    pagination = {
      ...pagination,
      isLast,
      current,
    };
  }
  return {
    loading,
    items,
    error,
    pagination,
    fetchMore: (page) => {
      fetchMore({
        variables: {
          page,
          size: LIMIT,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          const elements = prev[type].elements.concat(
            fetchMoreResult[type].elements
          );
          const merged = Object.assign({}, fetchMoreResult[type], { elements });
          return {
            [type]: merged,
          };
        },
      });
    },
  };
}
