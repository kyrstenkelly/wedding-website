import React, { useEffect, useState } from 'react';

import Container from '../container';
import DataTable from './components/data-table/data-table';
import InvitationModal from './components/invitation-modal/invitation-modal';
import Menu from './components/menu/menu';
import constants from 'constants/admin';
import rsvpService from 'services/rsvp-service';
import './admin.scss';

const menuItems = constants.MENU_ITEMS;

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [data, setData] = useState({
    events: [],
    guests: [],
    invitations: [],
    rsvps: []
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].key);

  const selectMenuItem = (key) => {
    setLoading(true);
    setSelectedMenuItem(key);

    let getData;
    switch (key) {
      case 'events':
        getData = rsvpService.getEvents();
        break;
      case 'guests':
        getData = rsvpService.getGuests();
        break;
      case 'invitations':
        getData = rsvpService.getInvitations();
        break;
      case 'rsvps':
        getData = rsvpService.getRSVPs();
        break;
      default:
        throw new Error(`Unknown data type ${key}`);
    }

    getData.then(newData => {
      setData({
        ...data,
        [key]: newData
      });
      setLoading(false);
    }).catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }

  const getTableData = () => ({
    columns: constants.TABLE_COLUMNS[selectedMenuItem],
    data: data[selectedMenuItem]
  });

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  useEffect(() => {
    selectMenuItem(menuItems[0].key);
  }, []);

  return (
    <Container>
      <div className='admin'>
        <div className='content'>
          <div className='menu-container'>
            <Menu
              menuItems={menuItems}
              selectedMenuItem={selectedMenuItem}
              selectMenuItem={selectMenuItem}
            />
          </div>
          <div className='table-container'>
            {error ?
              <div className='error'>{error}</div>
              :
              <DataTable
                tableData={getTableData()}
                loading={loading}
                addMethod={openModal}
                editMethod={openModal}
              />
            }
          </div>
        </div>

        {selectedMenuItem === 'invitations' &&
          <InvitationModal
            invitation={modalData}
            open={modalOpen}
            onClose={() => setModalOpen(false)}
          />
        }
      </div>
    </Container>
  );
};

export default Admin;
