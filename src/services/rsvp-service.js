import authService from './auth-service';
import config from '../config';

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
  getAddresses() {
    return request({
      path: '/addresses'
    }).then(addresses => ({addresses}))
    .catch(error => ({error}));
  },

  createAddress(address) {
    return request({
      path: '/addresses',
      method: 'post',
      body: JSON.stringify(address)
    });
  },

  updateAddress(address) {
    return request({
      path: `/addresses/${address.id}`,
      method: 'put',
      body: JSON.stringify(address)
    });
  },

  deleteAddress(id) {
    return request({
      path: `/addresses/${id}`,
      method: 'delete'
    });
  },

  getGuests() {
    return request({
      path: '/guests'
    }).then(guests => ({guests}))
    .catch(error => ({error}));
  },

  createGuest(guest) {
    return request({
      path: '/guests',
      method: 'post',
      body: JSON.stringify(guest)
    });
  },

  updateGuest(guest) {
    return request({
      path: `/guests/${guest.id}`,
      method: 'put',
      body: JSON.stringify(guest)
    });
  },

  deleteGuest(id) {
    return request({
      path: `/guests/${id}`,
      method: 'delete'
    });
  },

  getEvents() {
    return request({
      path: '/events'
    }).then(events => ({events}))
    .catch(error => ({error}));
  },

  createEvent(event) {
    return request({
      path: '/events',
      method: 'post',
      body: JSON.stringify(event)
    });
  },

  updateEvent(event) {
    return request({
      path: `/events/${event.id}`,
      method: 'put',
      body: JSON.stringify(event)
    });
  },

  deleteEvent(id) {
    return request({
      path: `/events/${id}`,
      method: 'delete'
    });
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
    return request({
      path: `/invitations/${invitation.id}`,
      method: 'put',
      body: JSON.stringify(invitation)
    });
  },

  deleteInvitation(id) {
    return request({
      path: `/invitations/${id}`,
      method: 'delete'
    });
  },

  getRSVPs() {
    return request({
      path: '/rsvps'
    }).then(rsvps => ({rsvps}))
    .catch(error => ({error}));
  },

  createRSVP(rsvp) {
    return request({
      path: '/rsvps',
      method: 'post',
      body: JSON.stringify(rsvp)
    });
  },

  updateRSVP(rsvp) {
    return request({
      path: `/rsvps/${rsvp.id}`,
      method: 'put',
      body: JSON.stringify(rsvp)
    });
  },

  deleteRSVP(id) {
    return request({
      path: `/rsvps/${id}`,
      method: 'delete'
    });
  }
}
