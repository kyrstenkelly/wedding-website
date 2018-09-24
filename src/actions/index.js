import events from './events';
import guests from './guests';
import rsvps from './rsvps';

export default {
  ...events,
  ...guests,
  ...rsvps
};

