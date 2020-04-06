import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Paper,
} from '@material-ui/core';

import rsvpService from 'services/rsvp-service';
import AddressForm from '../address-form/address-form';
import GuestsForm from '../guests-form/guests-form';
import { actionsBinder } from 'helpers/actions';
import './invitation-modal.scss';

const defaultInvitation = {
  events: [],
  address: {},
  guests: []
};

const mapStateToProps = (state) => ({
  eventList: state.rsvps.events,
  loading: state.rsvps.loading.events
});

const mapDispatchToProps = actionsBinder('getEvents');

export class InvitationModal extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    eventList: PropTypes.array,
    invitation: PropTypes.object
  }

  static defaultProps = {
    eventList: [],
    loading: false
  }

  state = {
    invitation: {
      ...defaultInvitation,
      ...this.props.invitation,
    },
    update: !_.isEmpty(this.props.invitation),
  }

  componentDidMount() {
    this.props.getEvents();
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

  handleEventsChange = event => {
    const { invitation } = this.state;
    const value = event.target.value;
    const checked = event.target.checked;
    let events = invitation.events;

    if (checked && !this.invitationIncludes('events', value)) {
      events.push({ name: value });
    } else {
      events = events.filter(e => e.name !== value);
    }

    this.setState({ invitation: {
      ...invitation,
      events
    }});
  }

  handleAddressChange = address => {
    this.setState({invitation: {
      ...this.state.invitation,
      address
    }});
  }

  handleGuestsChange = (guests) => {
    this.setState({invitation: {
      ...this.state.invitation,
      guests
    }});
  }

  saveInvitation() {
    const { invitation, update } = this.state;

    if (update) {
      rsvpService.updateInvitation(invitation).then(() => {
        this.props.onClose();
      });
    } else {
      rsvpService.createInvitation(invitation).then(() => {
        this.props.onClose();
      });
    }
  }

  render() {
    const { eventList } = this.props;
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

            <GuestsForm guests={invitation.guests} onChange={this.handleGuestsChange} />

            <AddressForm address={invitation.address} onChange={this.handleAddressChange} />

            <h4>Events</h4>

            <FormGroup>
              {eventList
                .map(event => ({
                  ...event,
                  checked: this.invitationIncludes('events', event.name)
                }))
                .map(event =>
                  <FormControlLabel
                    key={event.id}
                    control={
                      <Checkbox
                        checked={event.checked}
                        onChange={this.handleEventsChange}
                        value={event.name}
                      />
                    }
                    label={event.name}
                  />
                )
              }
            </FormGroup>

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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationModal);
