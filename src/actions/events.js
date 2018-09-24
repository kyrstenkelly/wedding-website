import Types from './types';
import rsvpService from 'services/rsvp-service';

export default {
  getEvents: () => ({
    type: Types.GET_EVENTS,
    async: true,
    httpMethod: rsvpService.getEvents,
    params: []
  }),

  createEvent: event => ({
    type: Types.CREATE_EVENT,
    async: true,
    httpMethod: rsvpService.createEvent,
    params: [event]
  }),

  updateEvent: event => ({
    type: Types.UPDATE_EVENT,
    async: true,
    httpMethod: rsvpService.updateEvent,
    params: [event]
  }),

  deleteEvent: event => ({
    type: Types.DELETE_EVENT,
    async: true,
    httpMethod: rsvpService.deleteEvent,
    params: [event]
  })
};
