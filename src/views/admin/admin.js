import React, { Component } from 'react';
import auth0 from 'auth0-js';
import Login from './login';
import authConstants from 'constants/auth';
import './admin.scss';

class Admin extends Component {
  state = {
    authenticated: false
  }

  componentDidMount() {
    this.parseHash();
    this.getToken();
  }

  parseHash() {
    this.auth0 = new auth0.WebAuth({
      domain:       authConstants.AUTH0_DOMAIN,
      clientID:     authConstants.AUTH0_CLIENT_ID
    });
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        return console.log(err);
      }
      if (authResult !== null && authResult.accessToken !== null && authResult.idToken !== null) {
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
        window.location = window.location.href.substr(0, window.location.href.indexOf('#'))
      }
    });
  }

  getToken() {
    var idToken = localStorage.getItem('id_token');
    this.setState({authenticated: idToken})
  }

  render() {
    return (
      <div className='admin'>
        {!this.state.authenticated ?
          <Login />
          :
          <div>Admin Page</div>
        }
      </div>
    );
  }
}

export default Admin;
