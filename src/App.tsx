import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

// @components
import PublicRoute from './components/Auth/PublicRoute';
import PrivateRoute from './components/Auth/PrivateRoute';

import Login from "./containers/Login";
import MovieSearch from "./containers/MovieSearch";
import Movie from './containers/Movie';

const App: React.FunctionComponent = () => {

  return (
    <div className="container">
        <BrowserRouter basename="/#">
            <Switch>
                <PublicRoute component={Login} path="/login" />
                <PrivateRoute component={MovieSearch} exact path="/" />
                <PrivateRoute component={Movie} path="/movie/:imdbID" />
            </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;
