import authService from './auth-service';
import config from '../config';

export const RESOURCES = {
  events: 'events',
  guests: 'guests',
  invitations: 'invitations',
  rsvps: 'rsvps'
};

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
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    });
}

const checkResourceType = (type) => {
  if (!Object.values(RESOURCES).includes(type)) {
    throw Error(`${type} is not a known resource`);
  }
};

export default {
  get(type) {
    checkResourceType(type);
    return request({
      path: `/${type}`
    });
  },

  create(type, data) {
    checkResourceType(type);
    return request({
      path: `/${type}`,
      method: 'post',
      body: JSON.stringify(data)
    });
  },

  update(type, data) {
    return request({
      path: `/${type}/${data.id}`,
      method: 'put',
      body: JSON.stringify(data)
    });
  },

  delete(type, id) {
    return request({
      path: `/${type}/${id}`,
      method: 'delete'
    });
  }
}
