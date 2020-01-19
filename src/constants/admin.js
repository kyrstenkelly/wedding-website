import DoneIcon from '@material-ui/icons/Done';
import EventIcon from '@material-ui/icons/Event';
import MailIcon from '@material-ui/icons/Mail';
import PeopleIcon from '@material-ui/icons/People';

export default {
  MENU_ITEMS: [{
    key: 'invitations',
    label: 'Invitations',
    icon: MailIcon
  },{
    key: 'events',
    label: 'Events',
    icon: EventIcon
  }, {
    key: 'guests',
    label: 'Guests',
    icon: PeopleIcon
  }, {
    key: 'rsvps',
    label: 'RSVPs',
    icon: DoneIcon
  }],
  TABLE_COLUMNS: {
    guests: [{
      label: 'Name',
      key: 'name'
    }],
    invitations: [{
      label: 'Guests',
      key: 'guests'
    }, {
      label: 'Address',
      key: 'address'
    }, {
      label: 'Events',
      key: 'events'
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
    }]
  }
}
