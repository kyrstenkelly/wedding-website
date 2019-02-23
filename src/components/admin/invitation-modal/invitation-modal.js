import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  MenuItem,
  Modal,
  Paper,
  TextField
} from '@material-ui/core';
// import Button from '@material-ui/core/Button';

import { actionsBinder } from 'helpers/actions';
import './invitation-modal.scss';

const mapStateToProps = (state) => ({
  events: state.rsvps.events
});

const mapDispatchToProps = actionsBinder(
  'getEvents',
  'createInvitation'
);

export class InvitationModal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    events: PropTypes.array
  }

  defaultProps = {
    events: []
  }

  state = {
    event: '',
    name: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: ''
    },
    guests: []
  }

  componentDidUpdate() {
    if (this.props.open && !this.props.events.length) {
      this.props.getEvents();
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { events } = this.props;

    return (
      <Modal
        aria-labelledby='Create an Invitation'
        aria-describedby='Create an Invitation'
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <Paper className='modal-content'>
          {/* {loading && <div>Loading...</div>} */}

          {/* {(!error && !loading) && */}
            <div>
              <h1>Create an Invitation</h1>

              <TextField
                id='outlined-select-event'
                select
                label='Select'
                className='text-field'
                value={this.state.event}
                onChange={this.handleChange('event')}
                SelectProps={{
                  MenuProps: {
                    className: 'menu',
                  },
                }}
                helperText='Please select an event'
                margin='normal'
                variant='outlined'
              >
                {events.map(option => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
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
