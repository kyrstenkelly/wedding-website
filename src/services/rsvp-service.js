import authService from './auth-service';
import config from 'config';
import guests from './mocks/guests';
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

  getGuests() {
    return request({
      path: '/guests'
    }).then(guests => ({guests}))
    .catch(error => ({error}));
  },

  createGuest(guest) {
    guests.push(guest);
    return Promise.resolve(guest);
  },

  updateGuest(guest) {
    return Promise.resolve(guest);
  },

  deleteGuest(guest) {
    return Promise.resolve();
  },

  getRSVPs() {
    return Promise.resolve(rsvps);
  }
}
