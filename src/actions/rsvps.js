import Types from './types';
import rsvpService from 'services/rsvp-service';

export default {
  getRSVPs: () => ({
    type: Types.GET_RSVPS,
    async: true,
    httpMethod: rsvpService.getRSVPs,
    params: []
  }),

  createRSVP: rsvp => ({
    type: Types.CREATE_RSVP,
    async: true,
    httpMethod: rsvpService.createRSVP,
    params: [rsvp]
  }),

  updateRSVP: rsvp => ({
    type: Types.UPDATE_RSVP,
    async: true,
    httpMethod: rsvpService.updateRSVP,
    params: [rsvp]
  }),

  deleteRSVP: rsvp => ({
    type: Types.DELETE_RSVP,
    async: true,
    httpMethod: rsvpService.deleteRSVP,
    params: [rsvp]
  })
};
