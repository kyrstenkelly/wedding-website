import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import authService from 'services/auth-service';
import Admin from 'views/admin/admin';
import Home from 'views/home/home';
import Login from 'views/login/login';
import Page from 'views/home/page';
import constants from './constants/home';
import './index.scss';

const allowedPaths = constants.PAGES.map(l => l.key);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/admin" component={Admin}/>

      <Route path="/login" render={props =>
        authService.isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/admin",
              state: {from: props.location}
            }}
          />
        ) : (
          <Login />
        )}
      />

      <Route exact path="/" component={Home}/>

      <Route path="/*" component={
        ({ location }) => {
          const path = location.pathname.replace('/', '');
          if (allowedPaths.includes(path)) {
            return <Page section={path}/>;
          }

          return <Redirect to={{ pathname: '/' }}/>;
        }}
      />
    </Switch>
  </BrowserRouter>
);

render(
  Routes,
  document.getElementById('root')
);
registerServiceWorker();
