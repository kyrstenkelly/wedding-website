import React, { Component } from 'react';
import Container from '../container';
import Header from 'components/header/header';
import './admin.scss';

class Admin extends Component {
  render() {
    return (
      <Container>
        <div className='admin'>
          <Header
            colorClass='dark'
            logout={true}
          />

          <div className='content'>
            <div>Admin Page</div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Admin;
