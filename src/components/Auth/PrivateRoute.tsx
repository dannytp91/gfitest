import * as React from 'react';
import { connect, ConnectedComponent } from 'react-redux'
import { AppState } from '../../interfaces/rootReducerModel';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Header from '../Header/Header';

interface IPrivateRouteProps extends RouteProps {
    component: ConnectedComponent<any, {}>;
    isLogged: boolean,
    path: string
}

const PrivateRoute: React.FunctionComponent<IPrivateRouteProps> = ({
    component,
    isLogged,
    path
}) => {
    const routeProtected = (
        <>
            <Header/>
            <Route component={component} path={path} />
        </>
    );
    const redirect = <Redirect to="/login" />;
    return isLogged ? routeProtected : redirect;
}

const mapStateToProps = (state: AppState) => {
  return {
      isLogged: state.Login.isLogged
  };
}

export default connect(mapStateToProps)(PrivateRoute);
