import {
  inProgressTypeName,
  successTypeName,
  errorTypeName
} from 'helpers/actions';
import types from 'actions/types';

const initialState = {
  events: [],
  invitations: [],
  rsvps: [],
  loading: {
    events: false,
    guests: false,
    invitations: false,
    rsvps: false
  },
  error: null
};

export default function rsvpsReducer(state = initialState, action) {
  switch (action.type) {
    case inProgressTypeName(types.GET_EVENTS):
      return {
        ...state,
        loading: {
          ...state.loading,
          events: true
        }
      };
    case successTypeName(types.GET_EVENTS):
      const {events} = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          events: false
        },
        events
      };
    case errorTypeName(types.GET_EVENTS):
      return {
        ...state,
        loading: {
          ...state.loading,
          events: false
        },
        error: action.error
      };
    case inProgressTypeName(types.GET_GUESTS):
      return {
        ...state,
        loading: {
          ...state.loading,
          guests: true
        }
      };
    case successTypeName(types.GET_GUESTS):
      const {guests} = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          guests: false
        },
        guests
      };
    case errorTypeName(types.GET_GUESTS):
      return {
        ...state,
        loading: {
          ...state.loading,
          guests: false
        },
        error: action.error
      };
    case inProgressTypeName(types.GET_INVITATIONS):
      return {
        ...state,
        loading: {
          ...state.loading,
          invitations: true
        }
      };
    case successTypeName(types.GET_INVITATIONS):
      const {invitations} = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          invitations: false
        },
        invitations
      };
    case errorTypeName(types.GET_INVITATIONS):
      return {
        ...state,
        loading: {
          ...state.loading,
          invitations: false
        },
        error: action.error
      };
    case inProgressTypeName(types.GET_RSVPS):
      return {
        ...state,
        loading: {
          ...state.loading,
          rsvps: true
        }
      };
    case successTypeName(types.GET_RSVPS):
      const {rsvps} = action;
      return {
        ...state,
        loading: {
          ...state.loading,
          rsvps: false
        },
        rsvps
      };
    case errorTypeName(types.GET_RSVPS):
      return {
        ...state,
        loading: {
          ...state.loading,
          rsvps: false
        },
        error: action.error
      };
    default:
      return state;
  }
}