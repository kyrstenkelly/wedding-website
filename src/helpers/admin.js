import _ from 'lodash';
import moment from 'moment';

export default {
  formatData(data) {
    return _.mapValues(data, (datum, key) => {
      // TODO: Figure out a better way to handle special column formatting cases
      if (key === 'event') {
        return datum.name;
      }
      if (key === 'guests') {
        return datum.map(g => g.name).join(', ');
      }
      if (key === 'date') {
        return moment(datum).format('MM-DD-YYYY');
      }
      if (_.isObject(datum)) {
        const flattenDatum = _.chain(datum).omitBy(_.isObject).omit(['id']).value();
        return _.values(flattenDatum).join(' ');
      }
      return datum;
    });
  }
}
