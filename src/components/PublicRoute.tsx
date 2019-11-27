import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from './types';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  path,
  ...rest
}: RouteProps) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to={path || '/'} /> : <Component {...props} />
      }
    />
  );

export default PublicRoute;
