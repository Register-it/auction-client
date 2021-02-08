import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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