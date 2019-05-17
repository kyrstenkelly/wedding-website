import React from 'react';
import { mount } from 'enzyme';

import Stars from './stars';

describe('<Stars />', () => {
  const numStars = 13;
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Stars height={100} width={100} numStars={numStars} />);
  });

  it('renders the given number of stars', () => {
    expect(wrapper.find('.star')).toHaveLength(numStars);
  });
});
