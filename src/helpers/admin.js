import _ from 'lodash';
import rsvpService from 'services/rsvp-service';

const tableColumns = {
  guests: [{
    label: 'First Name',
    key: 'firstName'
  }, {
    label: 'Last Name',
    key: 'lastName'
  }, {
    label: 'Email',
    key: 'email'
  }, {
    label: 'Address',
    key: 'address'
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
    label: 'Head Count',
    key: 'headCount'
  }]
}

export default {
  fetchData(key) {
    let dataPromise = Promise.resolve();
    switch (key) {
      case 'events':
        dataPromise = rsvpService.getEvents();
        break;
      case 'guests':
        dataPromise = rsvpService.getGuests();
        break;
      case 'rsvps':
        dataPromise = rsvpService.getRSVPs();
        break;
      default:
        throw new Error(`Unknown data type ${key}`);
    }
    return dataPromise.then(data => {
      return {
        columns: tableColumns[key],
        data
      };
    });
  },

  formatData(data) {
    return _.mapValues(data, (value, key) => {
      if (key === 'address') {
        return `${value.line1} ${value.line2 || ''}\n${value.city}, ${value.state} ${value.zip}`
      } else if (key === 'guest') {
        return `${value.firstName} ${value.lastName}`;
      } else if (key === 'event') {
        return value.name;
      }
      return value;
    });
  }
}
