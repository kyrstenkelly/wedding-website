import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '../container';
import Header from 'components/header/header';
import DataTable from 'components/admin/data-table/data-table';
import InvitationModal from 'components/admin/invitation-modal/invitation-modal';
import Menu from 'components/admin/menu/menu';
import constants from 'constants/admin';
import { actionsBinder } from 'helpers/actions';
import './admin.scss';

const menuItems = constants.MENU_ITEMS;

const mapStateToProps = (state) => ({
  events: state.rsvps.events,
  invitations: state.rsvps.invitations,
  rsvps: state.rsvps.rsvps,
  loading: state.rsvps.loading,
  error: state.rsvps.error
});

const mapDispatchToProps = actionsBinder(
  'getEvents',
  'getInvitations',
  'getRSVPs'
);

export class Admin extends Component {
  static propTypes = {
    events: PropTypes.array,
    invitations: PropTypes.array,
    rsvps: PropTypes.array,
    loading: PropTypes.shape({
      events: PropTypes.bool.isRequired,
      invitations: PropTypes.bool.isRequired,
      rsvps: PropTypes.bool.isRequired
    }),
    error: PropTypes.string,
    getEvents: PropTypes.func.isRequired,
    getInvitations: PropTypes.func.isRequired,
    getRSVPs: PropTypes.func.isRequired
  }

  state = {
    isModalOpen: false,
    selectedMenuItem: _.get(menuItems, ['0', 'key'])
  }

  componentDidMount() {
    this.props.getInvitations();
  }

  selectMenuItem(key) {
    this.setState({
      selectedMenuItem: key
    });

    switch (key) {
      case 'events':
        this.props.getEvents();
        break;
      case 'invitations':
        this.props.getInvitations();
        break;
      case 'rsvps':
        this.props.getRSVPs();
        break;
      default:
        throw new Error(`Unknown data type ${key}`);
    }
  }

  getTableData() {
    const {selectedMenuItem} = this.state;
    return {
      columns: constants.TABLE_COLUMNS[selectedMenuItem],
      data: this.props[selectedMenuItem] || []
    }
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  renderModal() {
    switch (this.state.selectedMenuItem) {
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
    const {error, loading} = this.props;
    const tableData = this.getTableData();
    const dataLoading = loading[this.state.selectedMenuItem];

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
              {error ?
                <div className='error'>{error}</div>
                :
                <DataTable
                  tableData={tableData}
                  loading={dataLoading}
                  openModal={() => this.openModal()}
                />
              }
            </div>
          </div>

          {this.renderModal()}
        </div>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
