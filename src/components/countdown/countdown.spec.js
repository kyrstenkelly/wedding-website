import React from 'react';
import { shallow } from 'enzyme';

import Countdown from './countdown';

describe('<Countdown />', () => {
  it('renders a countdown', () => {
    const wrapper = shallow(<Countdown />);
    expect(wrapper.find('.countdown')).toHaveLength(1);
  });
});
