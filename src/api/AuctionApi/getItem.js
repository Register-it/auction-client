import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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
