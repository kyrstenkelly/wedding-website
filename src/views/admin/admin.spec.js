import React from 'react';
import { shallow } from 'enzyme';

import { Admin } from './admin';
import DataTable from './components/data-table/data-table';
import Menu from './components/menu/menu';

const getEvents = jest.fn();
const getGuests = jest.fn();
const getInvitations = jest.fn();
const getRSVPs = jest.fn();

const defaultProps = {
  getEvents,
  getGuests,
  getInvitations,
  getRSVPs,
  loading: {
    events: false,
    guests: false,
    invitations: false,
    rsvps: false
  }
}

describe('<Admin />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Admin {...defaultProps} />);
  });

  it('renders a menu', () => {
    expect(wrapper.find(Menu)).toHaveLength(1);
  });

  describe('if loading is true', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        loading: {
          ...defaultProps.loading,
          invitations: true
        }
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('passes that along to the data table', () => {
      const dataTable = wrapper.find(DataTable);
      expect(dataTable.prop('loading')).toBe(true);
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
    const invitations = [{
      first_name: 'James',
      last_name: 'Sherbert'
    }];

    beforeEach(() => {
      const props = {
        ...defaultProps,
        invitations
      };
      wrapper = shallow(<Admin {...props} />);
    });

    it('should render a datatable', () => {
      expect(wrapper.find(DataTable)).toHaveLength(1);
    });

    it('passes table data to the table', () => {
      const table = wrapper.find(DataTable);
      const tableData = table.prop('tableData');
      expect(tableData.data).toEqual(invitations);
    });
  });
});
