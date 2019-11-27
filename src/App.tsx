import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './utils/history';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';

import 'semantic-ui-css/semantic.min.css';

import ErrorBoundary from './components/ErrorBoundary';
import store from './configureStore';
import theme from './utils/theme';
import MainLayout from './layouts/MainLayout';
import PublicRoute from './components/PublicRoute';
import * as Page from './pages/index';

const App = () => (
  <Provider store={store as any}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
          </Helmet>
          <ErrorBoundary>
            <MainLayout>
              <PublicRoute isAuthenticated={false} path="/login" component={Page.Login} />
            </MainLayout>
          </ErrorBoundary>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  </Provider>
);

export default App;
