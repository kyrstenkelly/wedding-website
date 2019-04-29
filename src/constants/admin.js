import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';

export default {
  MENU_ITEMS: [{
    key: 'invitations',
    label: 'Invitations',
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
    invitations: [{
      label: 'Event',
      key: 'event'
    },{
      label: 'Name',
      key: 'name'
    }, {
      label: 'Email',
      key: 'email'
    }, {
      label: 'Address',
      key: 'address'
    }, {
      label: 'Guests',
      key: 'guests'
    }, {
      label: 'Plus One',
      key: 'plus_one'
    }],
    events: [{
      label: 'Name',
      key: 'name'
    }, {
      label: 'Location',
      key: 'location'
    },{
      label: 'Date',
      key: 'date'
    },{
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
