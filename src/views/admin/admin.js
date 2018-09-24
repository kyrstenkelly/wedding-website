import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Container from '../container';

import Header from 'components/header/header';
import DataTable from 'components/admin/data-table/data-table';
import Menu from 'components/admin/menu/menu';
import constants from 'constants/admin';
import {actionsBinder} from 'helpers/actions';
import './admin.scss';

const menuItems = constants.MENU_ITEMS;

const mapStateToProps = (state) => ({
  events: state.rsvps.events,
  guests: state.rsvps.guests,
  rsvps: state.rsvps.rsvps,
  loading: state.rsvps.loading,
  error: state.rsvps.error
});

const mapDispatchToProps = actionsBinder(
  'getEvents',
  'getGuests',
  'getRSVPs'
);

class Admin extends Component {
  state = {
    selectedMenuItem: _.get(menuItems, ['0', 'key'])
  }

  componentDidMount() {
    this.props.getGuests();
  }

  selectMenuItem(key) {
    this.setState({
      selectedMenuItem: key
    });

    switch (key) {
      case 'events':
        this.props.getEvents();
        break;
      case 'guests':
        this.props.getGuests();
        break;
      case 'rsvps':
        this.props.getRSVPs();
        break;
      default:
        throw new Error(`Unknown data type ${key}`);
    }
  }

  getMessage() {
    const {error, loading} = this.props;
    if (loading) {
      return 'Loading';
    } else if (error) {
      return error;
    }
    return null;
  }

  getTableData() {
    const {selectedMenuItem} = this.state;
    return {
      columns: constants.TABLE_COLUMNS[selectedMenuItem],
      data: this.props[selectedMenuItem] || []
    }
  }

  render() {
    const message = this.getMessage();
    const tableData = this.getTableData();

    return (
      <Container>
        <div className='admin'>
          <Header
            colorClass='dark'
            logout={true}
          />

          <div className='content'>
            <div className='menu-container'>
              <Menu
                menuItems={menuItems}
                selectedMenuItem={this.state.selectedMenuItem}
                selectMenuItem={this.selectMenuItem.bind(this)}
              />
            </div>
            <div className='table-container'>
              {message ?
                <div>{message}</div>
                :
                <DataTable tableData={tableData}/>
              }
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
