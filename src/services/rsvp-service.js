import authService from './auth-service';
import config from '../config';
import rsvps from './mocks/rsvps';

const UNAUTHORIZED = 401;

const request = (options) => {
  const JWT = authService.getJWT();
  const request = new Request(`${config.RSVP_API_URL}${options.path}`,
    {
      ...options,
      method: options.method || 'GET',
      headers: new Headers({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${JWT}`
      })
    });
  return fetch(request)
    .then(resp => {
      if (resp.status === UNAUTHORIZED) {
        authService.logout();
        return;
      }
      return resp.json();
    });
}

export default {
  getEvents() {
    return request({
      path: '/events'
    }).then(events => ({events}))
    .catch(error => ({error}));
  },

  getInvitations() {
    return request({
      path: '/invitations'
    }).then(invitations => ({invitations}))
    .catch(error => ({error}));
  },

  createInvitation(invitation) {
    return request({
      path: '/invitations',
      method: 'post',
      body: JSON.stringify(invitation)
    });
  },

  updateInvitation(invitation) {
    return Promise.resolve(invitation);
  },

  deleteInvitation(invitation) {
    return Promise.resolve();
  },

  getRSVPs() {
    return Promise.resolve(rsvps);
  }
}
