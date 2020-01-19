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
  TextField
} from '@material-ui/core';

import AddressForm from '../address-form/address-form';
import { actionsBinder } from 'helpers/actions';
import './invitation-modal.scss';

const mapStateToProps = (state) => ({
  events: state.rsvps.events,
  loading: state.rsvps.loading.events
});

const mapDispatchToProps = actionsBinder(
  'getEvents',
  'createInvitation'
);

export class InvitationModal extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    events: PropTypes.array
  }

  static defaultProps = {
    events: [],
    loading: false
  }

  state = {
    invitation: {
      events: [],
      address: {},
      guests: []
    },
    eventsFetched: false
  }

  componentDidUpdate() {
    if (this.props.open && !this.state.eventsFetched) {
      this.props.getEvents();
      this.setState({eventsFetched: true});
    }
  }

  handleChange = name => event => {
    let value = event.target.value;
    if (name === 'guests') {
      value = value.split(/[\r?\n,]/);
    }
    if (name === 'plusOne') {
      value = value === 'true';
    }
    this.setState({ invitation: {
      ...this.state.invitation,
      [name]: value
    }});
  }

  handleAddressChange = address => {
    this.setState({invitation: {
      ...this.state.invitation,
      address
    }});
  }

  saveInvitation() {
    this.props.createInvitation({
      ...this.state.invitation,
      event: { id: this.state.event }
    });
  }

  updateEvents(val) {
    console.log(val);
  }

  render() {
    const { events } = this.props;
    const { invitation } = this.state;

    return (
      <Modal
        aria-labelledby='Create an Invitation'
        aria-describedby='Create an Invitation'
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Paper className='modal-content'>
          <div className='form'>
            <h1 className='form-title'>Create an Invitation</h1>

            <br/>

            <h4>Guests</h4>

            <FormGroup>
              <TextField
                className='text-field form-field'
                margin='dense'
                value={invitation.guests.join('\n')}
                onChange={this.handleChange('guests')}
              />
            </FormGroup>

            <AddressForm onChange={this.handleAddressChange} />

            <h4>Events</h4>

            <FormGroup>
              {events.map(event =>
                <FormControlLabel
                  key={event.id}
                  control={
                    <Checkbox
                      checked={invitation.events.includes(event)}
                      onChange={this.updateEvents}
                      value={`${event.id}`}
                    />
                  }
                  label={event.name}
                />
              )}
            </FormGroup>

            <Button
              className='save-button'
              variant='contained'
              color='primary'
              onClick={() => this.saveInvitation()}
            >
              Save
            </Button>
          </div>
        </Paper>
      </Modal>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvitationModal);
