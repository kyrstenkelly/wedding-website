import React, { Component } from 'react';
import auth0 from 'auth0-js';
import authConstants from 'constants/auth';
import './login.scss';

class Login extends Component {
  authenticate() {
    this.webAuth = new auth0.WebAuth({
      domain:       authConstants.AUTH0_DOMAIN,
      clientID:     authConstants.AUTH0_CLIENT_ID,
      scope:        'openid profile',
      audience:     authConstants.AUTH0_API_AUDIENCE,
      responseType: 'token id_token',
      redirectUri : authConstants.AUTH0_CALLBACK_URL
    });
    this.webAuth.authorize();
  }

  render() {
    return (
      <div className='login'>
        <a onClick={this.authenticate.bind(this)} className="btn">Log In</a>
      </div>
    );
  }
}

export default Login;
