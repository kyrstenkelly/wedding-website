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
import InvitationModal from '../invitation-modal/invitation-modal';
import adminHelper from 'helpers/admin';
import sortHelper from 'helpers/sort';

import './data-table.scss';

const getFirstTableColumn = (props) => {
  return _.get(props, ['tableData', 'columns', '0', 'key']);
}

class DataTable extends Component {
  static propTypes = {
    dataType: PropTypes.string.isRequired,
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
    orderBy: getFirstTableColumn(this.props),
    isModalOpen: false
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  renderModal() {
    switch (this.props.dataType) {
      case 'invitations':
        return (
          <InvitationModal
            open={this.state.isModalOpen}
            onClose={() => this.closeModal()}
          />
        );
      default:
        return;
    }
  }

  render() {
    const {tableData: {columns, data}} = this.props;
    const {order, orderBy} = this.state;
    const formattedData = data.map(d => adminHelper.formatData(d));
    const sortedData = sortHelper.stableSort(
      formattedData,
      sortHelper.getSorting(order, orderBy)
    );

    return (
      <div className='data-table-container'>
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
                        <TableCell
                          key={column.key}
                          padding='dense'>
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
            <Button
              variant='fab'
              color='primary'
              aria-label='Add'
              onClick={() => this.openModal()}
              className='add-button'>
              <AddIcon />
            </Button>
          </div>
        </Paper>

        {this.renderModal()}
      </div>
    );
  }
}

export default DataTable;
