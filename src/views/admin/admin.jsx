import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '../container';
import DataTable from './components/data-table/data-table';
import InvitationModal from './components/invitation-modal/invitation-modal';
import Menu from './components/menu/menu';
import constants from 'constants/admin';
import { actionsBinder } from 'helpers/actions';
import './admin.scss';

const menuItems = constants.MENU_ITEMS;

const mapStateToProps = (state) => ({
  events: state.rsvps.events,
  guests: state.rsvps.guests,
  invitations: state.rsvps.invitations,
  rsvps: state.rsvps.rsvps,
  loading: state.rsvps.loading,
  error: state.rsvps.error
});

const mapDispatchToProps = actionsBinder(
  'getEvents',
  'getGuests',
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
      guests: PropTypes.bool.isRequired,
      invitations: PropTypes.bool.isRequired,
      rsvps: PropTypes.bool.isRequired
    }),
    error: PropTypes.string,
    getEvents: PropTypes.func.isRequired,
    getGuests: PropTypes.func.isRequired,
    getInvitations: PropTypes.func.isRequired,
    getRSVPs: PropTypes.func.isRequired
  }

  state = {
    isModalOpen: false,
    modalData: {},
    selectedMenuItem: _.get(menuItems, ['0', 'key'])
  }

  componentDidMount() {
    this.selectMenuItem(_.get(menuItems, ['0', 'key']));
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

  openModal(data) {
    this.setState({
      isModalOpen: true,
      modalData: data
    });
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  render() {
    const {error, loading} = this.props;
    const tableData = this.getTableData();
    const dataLoading = loading[this.state.selectedMenuItem];

    return (
      <Container>
        <div className='admin'>
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
                  openModal={(data) => this.openModal(data)}
                />
              }
            </div>
          </div>

          {this.state.selectedMenuItem === 'invitations' &&
            <InvitationModal
              invitation={this.state.modalData}
              open={this.state.isModalOpen}
              onClose={() => this.closeModal()}
            />
          }
        </div>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
