import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import Container from '../container';
import authService from 'services/auth-service';
import './login.scss';

class Login extends Component {
  render() {
    return (
      <Container>
        <div className='login'>
          <Button
            color='primary'
            onClick={authService.login}
            size='large'
            variant='contained'>Log In</Button>
        </div>
      </Container>
    );
  }
}

export default Login;
