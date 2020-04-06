import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import GuestsForm from './guests-form';

const onChange = jest.fn();
const existingGuests = [
  { name: 'John Doe' },
  { name: 'Jane Doe' }
];
let wrapper;

describe('<GuestsForm />', () => {

  beforeEach(() => {
    onChange.mockReset();
  });

  describe('When there are not existing guests', () => {
    beforeEach(() => {
      wrapper = shallow(<GuestsForm onChange={onChange} />);
    });

    it('renders each of the guests in text fields', () => {
      const textFields = wrapper.find(TextField);
      expect(textFields).toHaveLength(1);
      expect(textFields.at(0).props().value).toEqual('');
    });
  });

  describe('When there are existing guests', () => {
    beforeEach(() => {
      wrapper = shallow(<GuestsForm guests={existingGuests} onChange={onChange} />);
    });

    it('renders each of the address fields with populated data', () => {
      const textFields = wrapper.find(TextField);
      expect(textFields).toHaveLength(existingGuests.length);
      textFields.forEach((field, i) => {
        const fieldProps = field.props();
        expect(fieldProps.value).toEqual(existingGuests[i].name);
      });
    });
  });

  describe('when a change is made', () => {
    beforeEach(() => {
      wrapper = shallow(<GuestsForm guests={existingGuests} onChange={onChange} />);
    });

    it('calls the onChange property', () => {
      jest.spyOn(React, 'useEffect').mockImplementation(f => f());
      const newName = 'Johnathan Doe';
      const firstGuestField = wrapper.find(TextField).first();
      const event = {target: {value: newName }};

      firstGuestField.simulate('change', event);

      expect(onChange).toHaveBeenCalledWith([{ name: newName }, ...existingGuests.slice(1)]);
    });
  });
});
