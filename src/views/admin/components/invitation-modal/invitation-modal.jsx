import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  Checkbox,
  Fab,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

import rsvpService from 'services/rsvp-service';
import AddressForm from '../address-form/address-form';
import { actionsBinder } from 'helpers/actions';
import './invitation-modal.scss';

const defaultInvitation = {
  events: [],
  address: {},
  guests: [{ name: '' }]
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

    console.log(this.props.updateInvitation);
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

  handleGuestsChange = (event, index) => {
    const { invitation } = this.state;
    const { guests } = invitation;

    this.setState({ invitation: {
      ...invitation,
      guests: guests.map((g, i) => {
        if (i !== index) return g;
        return {
          ...g,
          name: event.target.value
        };
      })
    }});
  }

  handleRemoveGuest = indexToRemove => {
    const { invitation } = this.state;
    const { guests } = invitation;

    this.setState({ invitation: {
      ...this.state.invitation,
      guests: guests.filter((g, i) => {
        return i !== indexToRemove;
      })
    }})
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

            <h4>Guests</h4>

            <FormGroup>
              {invitation.guests.map((guest, i) => (
                <TextField
                  key={i}
                  className='text-field form-field'
                  margin='dense'
                  value={guest.name}
                  onChange={(e) => this.handleGuestsChange(e, i)}
                  InputProps={{
                    endAdornment:
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='Delete Guest'
                          onClick={() => this.handleRemoveGuest(i)}
                        >
                          <CloseIcon />
                        </IconButton>
                      </InputAdornment>
                  }}
                />
              ))}

              <br/>

              <Fab
                color='primary'
                aria-label='Add Guest'
                onClick={() => this.setState({ invitation: {
                  ...invitation,
                  guests: invitation.guests.concat({ name: '' })
                }})}
                className='add-button'
                size='small'
              >
                <AddIcon />
              </Fab>

            </FormGroup>

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
