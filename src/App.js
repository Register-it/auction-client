import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient";

import Item from "./components/Item/Item";
import ScrollToTop from "./layout/ScrollToTop";
import Home from "./components/Home/Home";
import AppContainer from "./layout/AppContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <BrowserRouter>
          <AppContainer>
            <ScrollToTop />
            <Route path="/" component={Home} exact />
            <Route path="/:slug-:id" component={Item} exact />
          </AppContainer>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
