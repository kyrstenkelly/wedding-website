import _ from 'lodash';
import React, { Component } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import EnhancedTableHead from './enhanced-table-head';
import adminHelper from 'helpers/admin';
import sortHelper from 'helpers/sort';

import './data-table.scss';

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

  static defaultProps = {
    tableData: {
      columns: [],
      data: []
    }
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
  }

  render() {
    const {tableData: {columns, data}} = this.props;
    const {order, orderBy} = this.state;
    const formattedData = data.map(d => adminHelper.formatData(d));
    const sortedData = sortHelper.stableSort(formattedData, sortHelper.getSorting(order, orderBy));

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
            {sortedData.map(d => {
                return (
                  <TableRow key={d.id}>
                    {columns.map(column =>
                      <TableCell key={column.key}>{d[column.key]}</TableCell>)}
                  </TableRow>
                );
              })
            }
          </TableBody>
        </Table>

        <div className='footer'>
          <Button
            variant='fab'
            color='primary'
            aria-label='Add'
            className='add-button'>
            <AddIcon />
          </Button>
        </div>
      </Paper>
    );
  }
}

export default DataTable;
