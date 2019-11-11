import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './utils/history';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import ErrorBoundary from './components/ErrorBoundary';
import store from './store/configureStore';
import theme from './utils/theme';
import MainLayout from './layouts/MainLayout';
import PublicRoute from './components/PublicRoute';
import * as Page from './pages/index';
// import Login from './pages/Login';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
          </Helmet>
          <ErrorBoundary>
            <MainLayout>
              <PublicRoute
                path="/"
                isAuthenticated={false}
                component={Page.Login}
              />
            </MainLayout>
          </ErrorBoundary>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  </Provider>
)

export default App;
