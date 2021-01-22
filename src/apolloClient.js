import { ApolloClient } from "apollo-boost";
import { WebSocketLink } from "@apollo/client/link/ws";
import gql from "graphql-tag";
// import { split } from "apollo-link"
import { defaultDataIdFromObject, from, split, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { checkIfShouldShowLogin } from "./api/ErrorHandler";
import { getMainDefinition } from "@apollo/client/utilities";

const isDev = process.env.NODE_ENV === "development";
const apiHost = isDev ? "localhost:8080" : "java-auction-server.herokuapp.com";
const secure = isDev ? "" : "s";

const wsLink = new WebSocketLink({
  uri: `ws${secure}://${apiHost}/subscriptions`,
  options: {
    reconnect: true,
  },
});

// Create an http link:
const httpLink = new HttpLink({
  uri: `/graphql`,
  credentials: "include",
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const erroLink = onError(({ graphQLErrors, operation }) => {
  checkIfShouldShowLogin(graphQLErrors, operation);
});

const link = from([erroLink, splitLink]);

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true,
    dataIdFromObject: function (responseObject) {
      // console.log(responseObject.__typename, responseObject.id);
      return defaultDataIdFromObject(responseObject);
    },
  }),
  connectToDevTools: process.env.NODE_ENV === "development",
  typeDefs: gql`
    type Currency
  `,
});

export default apolloClient;
