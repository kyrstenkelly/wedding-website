import Types from './types';
import rsvpService from 'services/rsvp-service';

export default {
  /** ADDRESSES */

  getAddresses: () => ({
    type: Types.GET_ADDRESSES,
    async: true,
    httpMethod: rsvpService.getAddresses,
    params: []
  }),

  createAddress: address => ({
    type: Types.CREATE_EVENT,
    async: true,
    httpMethod: rsvpService.createAddress,
    params: [address]
  }),

  updateAddress: address => ({
    type: Types.UPDATE_ADDRESS,
    async: true,
    httpMethod: rsvpService.updateAddress,
    params: [address]
  }),

  deleteAddress: address => ({
    type: Types.DELETE_ADDRESS,
    async: true,
    httpMethod: rsvpService.deleteAddress,
    params: [address]
  }),

  /** EVENTS */

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
  }),

  /** GUESTS */

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
  }),

  /** INVITATIONS */

  getInvitations: () => ({
    type: Types.GET_INVITATIONS,
    async: true,
    httpMethod: rsvpService.getInvitations,
    params: []
  }),

  createInvitation: invitation => ({
    type: Types.CREATE_INVITATION,
    async: true,
    httpMethod: rsvpService.createInvitation,
    params: [invitation]
  }),

  updateInvitation: invitation => ({
    type: Types.UPDATE_INVITATION,
    async: true,
    httpMethod: rsvpService.updateInvitation,
    params: [invitation]
  }),

  deleteInvitation: invitation => ({
    type: Types.DELETE_INVITATION,
    async: true,
    httpMethod: rsvpService.deleteInvitation,
    params: [invitation]
  }),

  /** RSVPS */

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
