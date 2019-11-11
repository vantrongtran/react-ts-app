import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {RouteProps} from '../types/routeProps';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  to,
  layout: Layout,
  ...rest
 }: RouteProps) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={{
          pathname: to,
          state: {redirect: props.location.pathname, isAuthenticated}
        }}/>
      )
    }
  />
);

PrivateRoute.defaultProps = {
  to: '/',
}

export default PrivateRoute;
