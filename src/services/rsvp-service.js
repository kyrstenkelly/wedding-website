import guests from './mocks/guests';
import rsvps from './mocks/rsvps';
import authService from './auth-service';
import config from 'config';


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
    .then(resp => resp.json())
    .catch(err => {
      console.log(err);
      return err;
    });
}

export default {
  getEvents() {
    return request({
      path: '/events'
    }).then(events => ({events}));
  },

  getGuests() {
    return request({
      path: '/guests'
    }).then(guests => ({guests}));
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
