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
  loading: false,
  error: null
};

export default function rsvpsReducer(state = initialState, action) {
  switch (action.type) {
    case inProgressTypeName(types.GET_EVENTS):
      return {
        ...state,
        loading: true
      };
    case successTypeName(types.GET_EVENTS):
      const {events} = action;
      return {
        ...state,
        loading: false,
        events
      };
    case errorTypeName(types.GET_EVENTS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case inProgressTypeName(types.GET_INVITATIONS):
      return {
        ...state,
        loading: true
      };
    case successTypeName(types.GET_INVITATIONS):
      const {invitations} = action;
      return {
        ...state,
        loading: false,
        invitations
      };
    case errorTypeName(types.GET_INVITATIONS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case inProgressTypeName(types.GET_RSVPS):
      return {
        ...state,
        loading: true
      };
    case successTypeName(types.GET_RSVPS):
      const {rsvps} = action;
      return {
        ...state,
        loading: false,
        rsvps
      };
    case errorTypeName(types.GET_RSVPS):
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
