import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient";

import ScrollToTop from "./layout/ScrollToTop";
import AppContainer from "./layout/AppContainer";
import { withStore } from "react-context-hook";
import { routes } from "./routes";
import AppNotification from "./components/Notification/AppNotification";
import LoginModal from "./components/Login/LoginModal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <BrowserRouter>
          <AppContainer>
            <ScrollToTop />
            {Object.keys(routes).map((key) => (
              <Route
                path={routes[key].path}
                component={routes[key].component}
                exact={routes[key].exact}
                key={routes[key].path}
              />
            ))}
            <AppNotification />
            <LoginModal />
          </AppContainer>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default withStore(
  App,
  {},
  { logging: process.env.NODE_ENV === "development" }
);
