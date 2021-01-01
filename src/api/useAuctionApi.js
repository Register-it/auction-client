import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";
import { useLoggedUser } from "./useLoginApi";

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
        images
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
  const { loading, data, error } = useQuery(GET_ITEM, {
    variables: {
      id,
    },
  });

  let item = {};
  if (data) {
    item = data.item;
  }
  return { loading, item, error };
}

export function usePlaceBid(itemId) {
  const user = useLoggedUser();
  const history = useHistory();

  function placeBid(amount) {
    if (!user) {
      history.push(routes.LOGIN.path);
      return;
    }
    if (amount === "") {
      return;
    }
    //TODO perform the mutation
  }

  return {
    loading: false,
    placeBid,
  };
}
