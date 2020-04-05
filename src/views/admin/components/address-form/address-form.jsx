import _ from 'lodash';
import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  TextField
} from '@material-ui/core';

import PropTypes from 'prop-types';
import './address-form.scss';

export const ADDRESS_FIELDS = [
  { key: 'line1', label: 'Line 1' },
  { key: 'line2', label: 'Line 2' },
  { key: 'city', label: 'City' },
  { key: 'state', label: 'State' },
  { key: 'zip', label: 'Zip' },
];

let defaultAddress = {};
let errors = {};
let addressPropTypes = {};
ADDRESS_FIELDS.forEach(field => {
  defaultAddress[field.key] = '';
  errors[field.key] = null;
  addressPropTypes[field.key] = PropTypes.string;
});

class AddressForm extends Component {
  static propTypes = {
    address: PropTypes.shape(addressPropTypes),
    onChange: PropTypes.func.isRequired
  }

  state = {
    address: {
      ...defaultAddress,
      ...this.props.address
    },
    errors
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.address, this.props.address)) {
      this.setState({
        address: this.props.address
      });
    }
  }

  onChange = name => event => {
    this.setState({
      address: {
        ...this.state.address,
        [name]: event.target.value
      }
    }, () => this.props.onChange(this.state.address));
  }

  renderField = field => {
    return (
      <TextField
        key={field.key}
        label={field.label}
        className='text-field form-field'
        margin='dense'
        value={this.state.address[field.key]}
        onChange={this.onChange(field.key)}
      />
    );
  }

  render() {
    return (
      <FormControl component='fieldset' className='address-fields'>
        <h4 className='address-fields--title'>Address</h4>

        <FormGroup row>
          {ADDRESS_FIELDS.slice(0, 2).map(field => this.renderField(field))}
        </FormGroup>

        <FormGroup row>
          {ADDRESS_FIELDS.slice(2).map(field => this.renderField(field))}
        </FormGroup>
      </FormControl>
    )
  }
}

export default AddressForm;
