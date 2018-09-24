import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import registerServiceWorker from './registerServiceWorker';
import reducers from 'reducers';
import {asyncMiddleware} from 'helpers/actions';
import authService from 'services/auth-service';
import Admin from 'views/admin/admin';
import App from 'views/main/app';
import Login from 'views/login/login';
import './index.scss';


const store = createStore(reducers, applyMiddleware(asyncMiddleware));


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
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App}/>
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
          )
        }/>
      </div>
    </BrowserRouter>
  </Provider>
);

render(
  Routes,
  document.getElementById('root')
);
registerServiceWorker();
