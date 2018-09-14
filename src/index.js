import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import authHelper from 'helpers/auth';
import Admin from 'views/admin/admin';
import App from 'views/main/app';
import Login from 'views/admin/login';
import './index.scss';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authHelper.isAuthenticated() ? (
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
    <div>
      <Route exact path="/" component={App}/>
      <PrivateRoute path="/admin" component={Admin}/>
      <Route path="/login" render={props =>
        authHelper.isAuthenticated() ? (
          <Redirect
            to={{
              pathname: "/admin",
              state: {from: props.location}
            }}
          />
        ) : (
          <Login />
        )
      }/>
    </div>
  </BrowserRouter>
);

render(
  Routes,
  document.getElementById('root')
);
registerServiceWorker();
