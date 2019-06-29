import React from 'react';
import { mount } from 'enzyme';

import Stars from './stars';

describe('<Stars />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Stars height={100} width={100} />);
  });

  it('renders stars', () => {
    expect(wrapper.find('.star').length).toBeGreaterThan(0);
  });
});
