import React from 'react';
import { mount } from 'enzyme';

import RSVP from './rsvp';

describe('<RSVP />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RSVP />);
  });

  it('renders', () => {
    expect(wrapper);
  });
});
