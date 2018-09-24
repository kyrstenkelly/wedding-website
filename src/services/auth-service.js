import auth0 from 'auth0-js';
import authConstants from 'constants/auth';

const JWT_KEY = '_jwt';

function _setCookie(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = 'expires=' + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

function _deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export default {
  isAuthenticated() {
    this.parseHash();
    return !!this.getJWT();
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
        this.setJWT(authResult.accessToken);
        window.location = window.location.href.substr(0, window.location.href.indexOf('#'))
      }
    });
  },

  setJWT(jwt) {
    _setCookie(JWT_KEY, jwt, 14);
  },

  removeJWT() {
    _deleteCookie(JWT_KEY);
  },

  getJWT() {
    var match = document.cookie.match(new RegExp('(^| )' + JWT_KEY + '=([^;]+)'));
    if (match) return match[2];
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
    _deleteCookie(JWT_KEY);
    window.location.reload();
  }
}
