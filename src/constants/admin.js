import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';

export default {
  MENU_ITEMS: [{
    key: 'guests',
    label: 'Guests',
    icon: PeopleIcon
  }, {
    key: 'events',
    label: 'Events',
    icon: EventIcon
  }, {
    key: 'rsvps',
    label: 'RSVPs',
    icon: MailIcon
  }],
  TABLE_COLUMNS: {
    guests: [{
      label: 'First Name',
      key: 'first_name'
    }, {
      label: 'Last Name',
      key: 'last_name'
    }, {
      label: 'Email',
      key: 'email'
    }, {
      label: 'Address',
      key: 'address'
    }, {
      label: 'RSVP Code',
      key: 'rsvp_code'
    }],
    events: [{
      label: 'Name',
      key: 'name'
    }, {
      label: 'Address',
      key: 'address'
    }],
    rsvps: [{
      label: 'Guest',
      key: 'guest'
    }, {
      label: 'Event',
      key: 'event'
    }, {
      label: 'Attending',
      key: 'attending'
    }, {
      label: 'Head Count',
      key: 'head_count'
    }]
  }
}
