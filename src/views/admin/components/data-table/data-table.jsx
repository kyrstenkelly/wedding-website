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
import Fab from '@material-ui/core/Fab';
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
    loading: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
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
  }

  render() {
    const {loading, tableData: {columns, data}} = this.props;
    const {order, orderBy} = this.state;
    const formattedData = data.map(d => adminHelper.formatData(d));
    const sortedData = sortHelper.stableSort(
      formattedData,
      sortHelper.getSorting(order, orderBy)
    );

    return (
      <div className='data-table-container'>
        {loading ?
          <div className='loading'>Loading...</div>
          :
          <Paper>
            <Table className='data-table'>
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
                          <TableCell key={column.key}>
                            {d[column.key]}
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>

            <div className='footer'>
              <Fab
                color='primary'
                aria-label='Add'
                onClick={() => this.props.openModal()}
                className='add-button'>
                <AddIcon />
              </Fab>
            </div>
          </Paper>
        }
      </div>
    );
  }
}

export default DataTable;
