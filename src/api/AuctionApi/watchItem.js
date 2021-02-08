import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useEffect } from "react";
import { hasAuthorizationError } from "../ErrorHandler";
import { useLoggedUser } from "../LoginApi";

export const IS_WATCHED = gql`
  query isWatched($id: ID!) {
    item(id: $id) {
      watched
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
