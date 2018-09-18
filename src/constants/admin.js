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
  }]
}
