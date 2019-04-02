import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  TextField
} from '@material-ui/core';

import PropTypes from 'prop-types';
import './address-form.scss';

const ADDRESS_FIELDS = ['line1', 'line2', 'city', 'state', 'zip'];
const createAddressObject = (val) => {
  const obj = {};
  ADDRESS_FIELDS.forEach(k => obj[k] = val);
  return obj;
}

class AddressForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  state = {
    address: createAddressObject(''),
    errors: createAddressObject(null)
  }

  onChange = name => event => {
    this.setState({
      address: {
        ...this.state.address,
        [name]: event.target.value
      }
    }, () => this.props.onChange(this.state.address));
  }

  render() {
    return (
      <FormControl component='fieldset' className='address-fields'>
        <h4 className='address-fields--title'>Address</h4>

        <FormGroup row>
          <TextField
            label='Line 1'
            className='text-field form-field'
            margin='normal'
            value={this.state.line1}
            onChange={this.onChange('line1')}
          />
          <TextField
            label='Line 2'
            className='text-field form-field'
            margin='normal'
            value={this.state.line2}
            onChange={this.onChange('line2')}
          />
        </FormGroup>

        <FormGroup row>
          <TextField
            label='City'
            className='text-field form-field'
            margin='normal'
            value={this.state.city}
            onChange={this.onChange('city')}
          />
          <TextField
            label='State'
            className='text-field form-field'
            margin='normal'
            value={this.state.state}
            onChange={this.onChange('state')}
          />
          <TextField
            label='Zip'
            className='text-field form-field'
            margin='normal'
            value={this.state.zip}
            onChange={this.onChange('zip')}
          />
        </FormGroup>
      </FormControl>
    )
  }
}

export default AddressForm;
