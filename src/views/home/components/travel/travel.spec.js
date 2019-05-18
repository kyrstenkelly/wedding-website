import React from 'react';
import { mount } from 'enzyme';

import Travel from './travel';

describe('<Travel />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Travel />);
  });

  it('renders', () => {
    expect(wrapper);
  });
});
