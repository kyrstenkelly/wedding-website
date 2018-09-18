import _ from 'lodash';
import React, { Component } from 'react';
import Container from '../container';
import {
  ListItemIcon,
  ListItemText,
  MenuList,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

import Header from 'components/header/header';
import constants from 'constants/admin';
import adminHelper from 'helpers/admin';
import './admin.scss';

const menuItems = constants.MENU_ITEMS;

class Admin extends Component {
  state = {
    selectedMenuItem: null,
    tableData: {}
  }

  componentDidMount() {
    this.selectMenuItem(menuItems[0].key);
  }

  selectMenuItem(key) {
    adminHelper.fetchData(key).then(data => {
      this.setState({
        selectedMenuItem: key,
        tableData: data
      });
    });
  }

  renderMenu() {
    const {selectedMenuItem} = this.state;

    return (
      <Paper>
        <MenuList>
          {menuItems.map(item => {
            return (
              <MenuItem
                selected={selectedMenuItem === item.key}
                onClick={() => this.selectMenuItem(item.key)}
                key={item.key}>
                <ListItemIcon className='menu-icon'>
                  <item.icon/>
                </ListItemIcon>
                <ListItemText classes={{ primary: 'primary' }} inset primary={item.label} />
              </MenuItem>
            );
          })}
        </MenuList>
      </Paper>
    );
  }

  renderTable() {
    const {tableData: {columns, data}} = this.state;
    const formattedData = data.map(d => adminHelper.formatData(d));
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => <TableCell>{column.label}</TableCell>)}
            </TableRow>
          </TableHead>

          <TableBody>
            {formattedData.map(d => {
              return (
                <TableRow key={d.id}>
                  {columns.map(column => <TableCell>{d[column.key]}</TableCell>)}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

  render() {
    return (
      <Container>
        <div className='admin'>
          <Header
            colorClass='dark'
            logout={true}
          />

          <div className='content'>
            <div className='menu-container'>
              {this.renderMenu()}
            </div>
            <div className='table-container'>
              {!_.isEmpty(this.state.tableData) && this.renderTable()}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Admin;
