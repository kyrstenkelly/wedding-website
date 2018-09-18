import addresses from './mocks/addresses';
import events from './mocks/events';
import guests from './mocks/guests';
import rsvps from './mocks/rsvps';

export default {
  getAddresses() {
    return Promise.resolve(addresses);
  },

  getEvents() {
    return Promise.resolve(events);
  },

  getGuests() {
    return Promise.resolve(guests);
  },

  getRSVPs() {
    return Promise.resolve(rsvps);
  }
}
