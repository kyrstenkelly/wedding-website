import _ from 'lodash';
import React, { Component } from 'react';
import {
  CircularProgress,
  Fab,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@material-ui/core';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';
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
    tableData: PropTypes.shape({
      columns: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })).isRequired,
      data: PropTypes.shape.isRequired,
      addMethod: PropTypes.func,
      editMethod: PropTypes.func,
      deleteMethod: PropTypes.func
    })
  }

  state = {
    order: 'asc',
    orderBy: getFirstTableColumn(this.props)
  }

  sort = (property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  render() {
    const {
      addMethod,
      deleteMethod,
      editMethod,
      loading,
      tableData: {columns, data}
    } = this.props;
    const {order, orderBy} = this.state;

    const formattedData = data.map(d => {
      const fd = adminHelper.formatData(d);
      if (editMethod) {
        fd.edit = (
          <Link component='button' onClick={() => editMethod(d)}>
            <EditIcon />
          </Link>
        );
      }
      if (deleteMethod) {
        fd.delete = (
          <Link component='button' onClick={() => deleteMethod(d)}>
            <DeleteIcon />
          </Link>
        )
      }
      return fd;
    });

    const sortedData = sortHelper.stableSort(
      formattedData,
      sortHelper.getSorting(order, orderBy)
    );

    return (
      <div className='data-table-container'>
        {loading ?
          <CircularProgress/>
          :
          <Paper>
            <Table className='data-table'>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                columns={columns}
                onSort={this.sort}
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
                onClick={addMethod}
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
