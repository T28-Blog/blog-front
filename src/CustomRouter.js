import { Redirect, Route } from 'react-router';

function CustomRouter({ component: Component, user, ...rest }) {
  return user ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
}

export default CustomRouter;
