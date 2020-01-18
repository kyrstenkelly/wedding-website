import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Paper,
  Radio,
  RadioGroup,
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
    const { invitation } = this.state;
    if (this.props.open && !this.state.eventsFetched) {
      this.props.getEvents();
      this.setState({eventsFetched: true});
    }
    // By default set the event to the first in the list
    if (this.props.events.length && invitation.event === '') {
      this.setState({ invitation: {
        ...invitation,
        event: this.props.events[0].id
      }});
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

            <TextField
              select
              label='Event'
              className='text-field form-field'
              value={invitation.event}
              onChange={this.handleChange('event')}
              SelectProps={{
                MenuProps: { className: 'menu' }
              }}
              margin='normal'
              variant='outlined'
            >
              {events.map(option => (
                <MenuItem
                  className='select-item'
                  key={option.id}
                  value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label='Name'
              className='text-field form-field'
              margin='normal'
              value={invitation.name}
              onChange={this.handleChange('name')}
            />

            <TextField
              label='Email'
              className='text-field form-field'
              margin='normal'
              value={invitation.email}
              onChange={this.handleChange('email')}
            />

            <TextField
              label='Guests'
              className='text-field form-field'
              margin='normal'
              multiline
              rows='2'
              rowsMax='6'
              value={invitation.guests.join('\n')}
              onChange={this.handleChange('guests')}
            />

            <FormControl margin='normal'>
              <FormLabel>Plus One</FormLabel>
              <RadioGroup
                name='plusOne'
                className='plus-one-radio-group'
                value={String(invitation.plusOne)}
                onChange={this.handleChange('plusOne')}
              >
                <FormControlLabel value='true' control={<Radio color='primary'/>} label='Yes' />
                <FormControlLabel value='false' control={<Radio color='primary'/>} label='No' />
              </RadioGroup>
            </FormControl>

            <AddressForm onChange={this.handleAddressChange} />

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
