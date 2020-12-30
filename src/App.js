import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./theme"
import { ThemeProvider } from "@material-ui/core"
import { BrowserRouter, Route } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import client from "./apolloClient"
// import { MockedProvider } from "@apollo/react-testing"
// import mocks from "./mocks/mocks"

import Item from "./components/Item/Item"
import ScrollToTop from "./layout/ScrollToTop"
import Home from "./components/Home/Home"
import AppContainer from "./layout/AppContainer"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        {/* <MockedProvider mocks={mocks} addTypename={false}> */}
        <BrowserRouter>
          <AppContainer>
            <ScrollToTop />
            <Route path="/" component={Home} />
            <Route path="/:slug-:id" component={Item} exact/>
          </AppContainer>
        </BrowserRouter>
        {/* </MockedProvider> */}
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
