import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormGroup,
  TextField
} from '@material-ui/core';

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

const AddressForm = ({ address: initialAddress, onChange }) => {
  const [address, setAddress] = useState({
    ...defaultAddress,
    ...initialAddress
  });

  useEffect(() => {
    onChange(address);
  }, [address]);

  const updateAddressField = field => event => {
    setAddress({
      ...address,
      [field]: event.target.value
    });
  }

  const renderField = field => {
    return (
      <TextField
        key={field.key}
        label={field.label}
        className='text-field form-field'
        margin='dense'
        value={address[field.key]}
        onChange={updateAddressField(field.key)}
      />
    );
  };

  return (
    <FormControl component='fieldset' className='address-fields'>
      <h4 className='address-fields--title'>Address</h4>

      <FormGroup row>
        {ADDRESS_FIELDS.slice(0, 2).map(f => renderField(f))}
      </FormGroup>

      <FormGroup row>
        {ADDRESS_FIELDS.slice(2).map(f => renderField(f))}
      </FormGroup>
    </FormControl>
  );
};

AddressForm.propTypes = {
  address: PropTypes.shape(addressPropTypes),
  onChange: PropTypes.func.isRequired
};

export default AddressForm;
