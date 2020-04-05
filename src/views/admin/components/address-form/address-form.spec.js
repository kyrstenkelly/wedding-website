import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import AddressForm, { ADDRESS_FIELDS } from './address-form';

const onChange = jest.fn();
let wrapper;

describe('<AddressForm />', () => {

  beforeEach(() => {
    onChange.mockReset();
  });

  describe('When there is not an existing address', () => {
    beforeEach(() => {
      wrapper = shallow(<AddressForm onChange={onChange} />);
    });

    it('renders each of the address fields', () => {
      const textFields = wrapper.find(TextField);
      expect(textFields).toHaveLength(5);
      textFields.forEach((field, i) => {
        const fieldProps = field.props();
        expect(fieldProps.label).toEqual(ADDRESS_FIELDS[i].label);
      });
    });
  });

  describe('When there is an existing address', () => {
    const existingAddress = {
      line1: '123 Cherry Lane',
      line2: '',
      city: 'Austin',
      state: 'TX',
      zip: '12345'
    };

    beforeEach(() => {
      wrapper = shallow(<AddressForm address={existingAddress} onChange={onChange} />);
    });

    it('renders each of the address fields with populated data', () => {
      const textFields = wrapper.find(TextField);
      expect(textFields).toHaveLength(5);
      textFields.forEach((field, i) => {
        const fieldProps = field.props();
        const key = ADDRESS_FIELDS[i].key;
        expect(fieldProps.label).toEqual(ADDRESS_FIELDS[i].label);
        expect(fieldProps.value).toEqual(existingAddress[key]);
      });
    });
  });

  describe('when a change is made', () => {
    beforeEach(() => {
      wrapper = shallow(<AddressForm onChange={onChange} />);
    });

    it('calls the onChange property', () => {
      const line1 = '123 Test';
      const line1Field = wrapper.find(TextField).first();
      const event = {target: {value: line1 }};

      line1Field.simulate('change', event);

      expect(onChange).toHaveBeenCalledWith({
        line1,
        line2: '',
        city: '',
        state: '',
        zip: ''
      });
    });
  });
});
