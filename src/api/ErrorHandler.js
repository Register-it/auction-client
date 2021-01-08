import { store } from "react-context-hook";
import { OPERATIONS } from "./LoginApi";
import { Store } from "./Store";

const ERROR_CODE_EXTENSION = "ERROR_CODE";

const ERROR_CODES = {
  UNAUTHORIZED: "UNAUTHORIZED",
  AUCTION_EXPIRED: "AUCTION_EXPIRED",
  HIGHER_BID_EXISTS: "HIGHER_BID_EXISTS",
  INVALID_BID: "INVALID_BID",
};

const ERROR_CODES_MESSAGES = {
  UNAUTHORIZED: "Username o password non validi",
  AUCTION_EXPIRED: "L'asta è scaduta",
  HIGHER_BID_EXISTS: "La tua offerta è stat superata",
  INVALID_BID: "Offerta non valida",
};

function getHumanReadableError(error) {
  const { graphQLErrors, message: defaultMessage } = error;
  return graphQLErrors.map((err) => {
    if (err.extensions && err.extensions[ERROR_CODE_EXTENSION]) {
      const errorCode = err.extensions[ERROR_CODE_EXTENSION];
      return ERROR_CODES_MESSAGES[errorCode] || defaultMessage;
    } else {
      return defaultMessage;
    }
  });
}

export function hasAuthenticationError(graphQLErrors, operation) {
  if (graphQLErrors) {
    const hasAuthError = graphQLErrors.some(
      (error) =>
        error.extensions &&
        error.extensions[ERROR_CODE_EXTENSION] === ERROR_CODES.UNAUTHORIZED
    );

    const shouldPopupLogin = operationShouldPopupLogin(operation);

    if (hasAuthError && shouldPopupLogin) {
      store.set(
        Store.NOT_AUTHENTICATED,
        (store.getState()[Store.NOT_AUTHENTICATED] || 0) + 1
      );
    }
  }
}

const DONT_SHOW_LOGIN_OPERATIONS = [OPERATIONS.ME];

function operationShouldPopupLogin(operation) {
  if (operation && operation.operationName) {
    const found =
      DONT_SHOW_LOGIN_OPERATIONS.indexOf(operation.operationName) > -1;
    return !found;
  }
  return true;
}

export function parseGraphQLError(error /*ApolloError*/) {
  if (!error) {
    return null;
  }

  const { graphQLErrors } = error;
  if (graphQLErrors) {
    return getHumanReadableError(error);
  } else {
    return "Unexpected error";
  }
}
