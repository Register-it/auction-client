import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const GET_items = gql`
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

const LIMIT = 15;

export default function useSearch(page) {
  const { loading, data, error } = useQuery(GET_items, {
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
