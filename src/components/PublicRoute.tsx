import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {RouteProps} from '../types/routeProps';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  to,
  layout: Layout,
  ...rest
}: RouteProps) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (<Redirect to={to || '/'} />) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );

export default PublicRoute;
