import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Paper } from '@material-ui/core';

import rsvpService, { RESOURCES } from 'services/rsvp-service';
import AddressForm from '../address-form/address-form';
import EventsForm from '../events-form/events-form';
import GuestsForm from '../guests-form/guests-form';
import './invitation-modal.scss';

const defaultInvitation = {
  events: [],
  address: {},
  guests: []
};

export class InvitationModal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    invitation: PropTypes.object
  }

  state = {
    invitation: {
      ...defaultInvitation,
      ...this.props.invitation,
    },
    update: !_.isEmpty(this.props.invitation),
  }

  componentDidUpdate(prevProps) {
    const { invitation } = this.props;
    if (invitation && !_.isEqual(prevProps.invitation, invitation)) {
      this.setState({
        invitation: invitation,
        update: !_.isEmpty(invitation)
      });
    }
  }

  invitationIncludes(property, name) {
    if (_.isEqual(this.state.invitation, defaultInvitation)) return false;
    return this.state.invitation[property].some(e => e.name === name);
  }

  handleChange = key => value => {
    this.setState({ invitation: {
      ...this.state.invitation,
      [key]: value
    }});
  }

  saveInvitation() {
    const { invitation, update } = this.state;

    if (update) {
      rsvpService.update(RESOURCES.invitations, invitation).then(() => {
        this.props.onClose();
      });
    } else {
      rsvpService.create(RESOURCES.invitations, invitation).then(() => {
        this.props.onClose();
      });
    }
  }

  render() {
    const { invitation } = this.state;
    const title = `${!_.isEqual(invitation, defaultInvitation) ? 'Update' : 'Create an'} Invitation`;

    return (
      <Modal
        aria-labelledby={title}
        aria-describedby={title}
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Paper className='modal-content'>
          <form className='form'>
            <h1 className='form-title'>{title}</h1>

            <br/>

            <GuestsForm guests={invitation.guests} onChange={this.handleChange('guests')} />

            <AddressForm address={invitation.address} onChange={this.handleChange('address')} />

            <EventsForm events={invitation.events} onChange={this.handleChange('events')} />

            <Button
              className='save-button'
              variant='contained'
              color='primary'
              onClick={() => this.saveInvitation()}
            >
              Save
            </Button>
          </form>
        </Paper>
      </Modal>
    );
  }
}


export default InvitationModal;
