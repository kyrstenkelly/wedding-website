import _ from 'lodash';

export default {
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
