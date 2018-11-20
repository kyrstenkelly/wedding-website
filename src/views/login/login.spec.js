import Button from '@material-ui/core/Button';
import React from 'react';
import { shallow } from 'enzyme';

import authService from 'services/auth-service';
import Login from './login';

jest.mock('services/auth-service.js');

describe('<Login />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders a login button', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('calls the authService on click', () => {
    wrapper.find(Button).simulate('click');
    expect(authService.login).toHaveBeenCalled();
  });
});
