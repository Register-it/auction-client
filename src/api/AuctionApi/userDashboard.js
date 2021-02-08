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
      bidded(limit: $limit) {
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
    bidded = data.me.bidded;
    awarded = data.me.awarded;
  }
  return { loading, watched, bidded, awarded, error };
}
