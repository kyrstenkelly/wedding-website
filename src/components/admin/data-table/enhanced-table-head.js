import React, { Component } from 'react';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';

import PropTypes from 'prop-types';

class EnhancedTableHead extends Component {
  static propTypes = {
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })).isRequired
  }

  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  }

  render() {
    const { order, orderBy } = this.props;

    // numeric={column.numeric}
    //             padding={column.disablePadding ? 'none' : 'default'}

    return (
      <TableHead>
        <TableRow>
          {this.props.columns.map(column => {
            return (
              <TableCell
                key={column.key}
                sortDirection={orderBy === column.key ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.key}
                    direction={order}
                    onClick={this.createSortHandler(column.key)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    )
  }
}

export default EnhancedTableHead;
