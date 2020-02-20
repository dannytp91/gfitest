import * as React from 'react';
import { connect } from 'react-redux'
import { AppState } from '../../interfaces/rootReducerModel';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IPublicRouteProps extends RouteProps {
    component: React.ComponentType;
    isLogged: boolean,
    path: string
}

const PublicRoute: React.FunctionComponent<IPublicRouteProps> = ({
    component,
    isLogged,
    path
}) => {
    const routePublic = <Route component={component} path={path} />;
    const redirect = <Redirect to="/" />;
    return !isLogged ? routePublic : redirect;
}

const mapStateToProps = (state: AppState) => {
  return {
      isLogged: state.Login.isLogged
  };
}

export default connect(mapStateToProps)(PublicRoute);
