import _ from 'lodash';
import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';
import PropTypes from 'prop-types';

import EnhancedTableHead from './enhanced-table-head';
import adminHelper from 'helpers/admin';
import sortHelper from 'helpers/sort';

const getFirstTableColumn = (props) => {
  return _.get(props, ['tableData', 'columns', '0', 'key']);
}

class DataTable extends Component {
  static propTypes = {
    tableData: PropTypes.shape({
      columns: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })).isRequired,
      data: PropTypes.shape.isRequired
    })
  }

  state = {
    order: 'asc',
    orderBy: getFirstTableColumn(this.props)
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  render() {
    const {tableData: {columns, data}} = this.props;
    const {order, orderBy} = this.state;
    const formattedData = data.map(d => adminHelper.formatData(d));

    return (
      <Paper>
        <Table>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            columns={columns}
            onRequestSort={this.handleRequestSort}
          />

          <TableBody>
            {sortHelper.stableSort(formattedData, sortHelper.getSorting(order, orderBy))
              .map(d => {
                return (
                  <TableRow key={d.id}>
                    {columns.map(column => <TableCell>{d[column.key]}</TableCell>)}
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default DataTable;
