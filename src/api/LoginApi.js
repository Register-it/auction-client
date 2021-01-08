import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  useStoreValue,
  useDeleteStoreValue,
  useGetAndSet,
  useSetStoreValue,
} from "react-context-hook";
import { Store } from "./Store";
import { parseGraphQLError } from "./ErrorHandler";
import { useEffect } from "react";
import { routes } from "../routes";
import { useHistory, useLocation } from "react-router-dom";
import { useNotifications } from "../components/Notification/NotificationApi";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

export const OPERATIONS = {
  ME: "Me",
};

export const ME = gql`
  query ${OPERATIONS.ME} {
    me {
      firstName
      lastName
      image
    }
  }
`;

export function useLoggedUser() {
  return useStoreValue(Store.LOGGED_USER);
}

export function useLogout() {
  const deleteUser = useDeleteStoreValue(Store.LOGGED_USER);
  const { addNotification } = useNotifications();

  const [doLogout, { loading }] = useMutation(LOGOUT, {
    fetchPolicy: "no-cache",
    onError: () => {
      console.warn("cannot logout on server");
      addNotification("Cannot logout on the server!");
      deleteUser();
    },
    onCompleted: () => {
      deleteUser();
    },
  });

  function logout() {
    doLogout();
  }
  return { logout, loading };
}

export function useLoadUser(lazy = false) {
  const [user, setUser] = useGetAndSet(Store.LOGGED_USER);
  const setAuthenticated = useDeleteStoreValue(Store.NOT_AUTHENTICATED);
  const [getUser, { loading, error, called }] = useLazyQuery(ME, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setAuthenticated();
      setUser(data.me);
    },
  });

  useEffect(() => {
    if (!called && !user && !lazy) {
      getUser();
    }
  }, [called, user, getUser, lazy]);

  return { loading, error, user, getUser: lazy ? getUser : undefined };
}

export function useRequireLoggedUser() {
  const user = useLoggedUser();
  const history = useHistory();
  const location = useLocation();
  const setPreviewsPage = useSetStoreValue(Store.PREVIOUS_PAGE);

  return function () {
    if (!user) {
      setPreviewsPage(location.pathname + location.search + location.hash);
      history.push(routes.LOGIN.path);
    }
  };
}

export function useLoginApi(redirectAfterLogin = true) {
  const {
    getUser,
    loading: getUserLoading,
    error: getUserError,
    user,
  } = useLoadUser(true);

  const [doLogin, { loading, error }] = useMutation(LOGIN, {
    fetchPolicy: "no-cache",
    onError: () => {},
    onCompleted: () => {
      getUser();
    },
  });

  function performLogin(username, password) {
    if (username === "" || password === "") {
      return;
    }
    doLogin({
      variables: {
        username,
        password,
      },
    });
  }

  const history = useHistory();
  const previousPage = useStoreValue(Store.PREVIOUS_PAGE) || routes.HOME.path;
  useEffect(() => {
    if (user && redirectAfterLogin) {
      history.push(previousPage);
    }
  });

  return {
    loading: loading || getUserLoading,
    errors: parseGraphQLError(error || getUserError),
    user,
    performLogin,
  };
}
