import Button from '@material-ui/core/Button';
import React from 'react';
import { shallow } from 'enzyme';

import { Admin } from './admin';
import Header from 'components/header/header';
import DataTable from 'components/admin/data-table/data-table';
import Menu from 'components/admin/menu/menu';

const getEvents = jest.fn();
const getGuests = jest.fn();
const getRSVPs = jest.fn();

const defaultProps = {
  getEvents,
  getGuests,
  getRSVPs
}

describe('<Admin />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Admin {...defaultProps} />);
  });

  it('renders a header and menu', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Menu)).toHaveLength(1);
  });

  describe('if loading is true', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        loading: true
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('shows a loading message', () => {
      expect(wrapper.find('.table-container').text()).toBe('Loading...');
    });
  });

  describe('if there is an error', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        error: 'Error Message'
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('renders the error', () => {
      expect(wrapper.find('.error')).toHaveLength(1);
      expect(wrapper.find('.error').text()).toBe('Error Message');
    });
  });

  describe('if the data loaded properly', () => {
    const guests = [{
      first_name: 'James',
      last_name: 'Sherbert'
    }];

    beforeEach(() => {
      const props = {
        ...defaultProps,
        guests
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('should render a datatable', () => {
      expect(wrapper.find(DataTable)).toHaveLength(1);
    });

    it('passes table data to the table', () => {
      const table = wrapper.find(DataTable);
      const tableData = table.prop('tableData');
      expect(tableData.data).toEqual(guests);
    });
  });
});
