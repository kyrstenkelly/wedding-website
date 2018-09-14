import auth0 from 'auth0-js';
import authConstants from 'constants/auth';

export default {
  isAuthenticated() {
    this.parseHash();
    var idToken = localStorage.getItem('id_token');
    return !!idToken;
  },

  parseHash() {
    const auth = new auth0.WebAuth({
      domain:       authConstants.AUTH0_DOMAIN,
      clientID:     authConstants.AUTH0_CLIENT_ID
    });
    auth.parseHash((err, authResult) => {
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
  },

  login() {
    const webAuth = new auth0.WebAuth({
      domain:       authConstants.AUTH0_DOMAIN,
      clientID:     authConstants.AUTH0_CLIENT_ID,
      scope:        'openid profile',
      audience:     authConstants.AUTH0_API_AUDIENCE,
      responseType: 'token id_token',
      redirectUri : authConstants.AUTH0_CALLBACK_URL
    });
    webAuth.authorize();
  },

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile');
    window.location.reload();
  }
}
