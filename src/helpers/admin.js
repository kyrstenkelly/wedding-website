import _ from 'lodash';
import React from 'react';
import moment from 'moment';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';


export default {
  formatData(data) {
    const mappedData = _.mapValues(data, (datum, key) => {
      // TODO: Figure out a better way to handle special column formatting cases
      if (key === 'events') {
        return datum.map(e => e.name).join(', ');
      }
      if (key === 'event') {
        return datum.name;
      }
      if (key === 'guests') {
        return datum.map(g => g.name).join(', ');
      }
      if (key === 'attending') {
        return datum ? <CheckIcon/> : <ClearIcon/>;
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
    return mappedData;
  }
}
