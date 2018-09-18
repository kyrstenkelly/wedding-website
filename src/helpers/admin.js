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
        dataPromise = rsvpService.fetchEvents();
        break;
      case 'guests':
        dataPromise = rsvpService.fetchGuests();
        break;
      case 'rsvps':
        dataPromise = rsvpService.fetchRSVPs();
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
    return _.mapValues(data, (datum, key) => {
      if (_.isObject(datum)) {
        const flattenDatum = _.chain(datum).omitBy(_.isObject).omit(['id']).value();
        if (key === 'guest') {
          return `${datum.firstName} ${datum.lastName}`;
        }
        return _.values(flattenDatum).join(' ');
      }
      return datum;
    });
  }
}
