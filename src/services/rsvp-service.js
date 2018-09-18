import events from './mocks/events';
import guests from './mocks/guests';
import rsvps from './mocks/rsvps';

export default {
  fetchEvents() {
    return Promise.resolve(events);
  },

  fetchGuests() {
    return Promise.resolve(guests);
  },

  fetchRSVPs() {
    return Promise.resolve(rsvps);
  }
}
