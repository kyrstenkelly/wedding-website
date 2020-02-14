import React from 'react';
import { shallow } from 'enzyme';
import Gifts from './gifts';

describe('<Gifts />', () => {
  it('matches the snapshot', () => {
    expect(shallow(<Gifts />)).toMatchSnapshot();
  });
});
