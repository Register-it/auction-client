import {ApolloClient} from "apollo-boost"
// import { WebSocketLink } from "apollo-link-ws"

// import { split } from "apollo-link"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory";
// import { getMainDefinition } from "apollo-utilities"

// Create an http link:
const httpLink = new HttpLink({
  uri: "/graphql"
  // uri: "http://localhost:8080/graphql"
})

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

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default apolloClient
