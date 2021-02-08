import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useState } from "react";
import { parseGraphQLError } from "../ErrorHandler";
import { GET_BIDS } from "./getBids";
import { GET_ITEM } from "./getItem";

export const PLACE_BID = gql`
  mutation PlaceBid($itemId: ID!, $amount: Currency!) {
    bid(itemId: $itemId, amount: $amount) {
      id
      amount
    }
  }
`;
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

function parseAmount(amount) {
  amount = amount.replace(",", ".");
  return parseFloat(amount, 2);
}
