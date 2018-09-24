import Types from './types';
import rsvpService from 'services/rsvp-service';

export default {
  getGuests: () => ({
    type: Types.GET_GUESTS,
    async: true,
    httpMethod: rsvpService.getGuests,
    params: []
  }),

  createGuest: guest => ({
    type: Types.CREATE_GUEST,
    async: true,
    httpMethod: rsvpService.createGuest,
    params: [guest]
  }),

  updateGuest: guest => ({
    type: Types.UPDATE_GUEST,
    async: true,
    httpMethod: rsvpService.updateGuest,
    params: [guest]
  }),

  deleteGuest: guest => ({
    type: Types.DELETE_GUEST,
    async: true,
    httpMethod: rsvpService.deleteGuest,
    params: [guest]
  })
};
