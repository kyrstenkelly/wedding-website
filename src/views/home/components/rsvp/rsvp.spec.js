import React from 'react';
import { shallow } from 'enzyme';
import RSVP from './rsvp';

describe('<RSVP />', () => {
  it('matches the snapshot', () => {
    expect(shallow(<RSVP />)).toMatchSnapshot();
  });
});
