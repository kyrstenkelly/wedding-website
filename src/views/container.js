import React, {Component} from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Rochester"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontFamily: '"Poiret One", cursive',
      fontWeight: 'bold'
    }
  },
  palette: {
    primary: {
      main: '#2D6856',
    },
    secondary: {
      main: '#EACF64',
    },
  },
});

class Container extends Component {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    )
  }
}

export default Container;
