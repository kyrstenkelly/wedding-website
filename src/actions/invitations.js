import Types from './types';
import rsvpService from 'services/rsvp-service';

export default {
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
  })
};
