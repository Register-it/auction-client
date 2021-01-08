import { ApolloClient } from "apollo-boost";
// import { WebSocketLink } from "apollo-link-ws"
import gql from "graphql-tag";
// import { split } from "apollo-link"
import { from, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { hasAuthenticationError } from "./api/ErrorHandler";
// import { getMainDefinition } from "apollo-utilities"

// Create an http link:
const httpLink = new HttpLink({
  uri: "/graphql",
  // uri: "http://localhost:8080/graphql"
});

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   // uri: `wss://java-auction-server.herokuapp.com/graphql`,
//   uri: `ws://localhost:8080/graphql`,
//   options: {
//     reconnect: true
//   }
// })

// // using the ability to split links, you can send data to each link
// // depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     )
//   },
//   wsLink,
//   httpLink
// )

const erroLink = onError(({ graphQLErrors, operation }) => {
  hasAuthenticationError(graphQLErrors, operation);
});

const link = from([erroLink, httpLink]);

const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === "development",
  typeDefs: gql`
    type Currency
  `,
});

export default apolloClient;
