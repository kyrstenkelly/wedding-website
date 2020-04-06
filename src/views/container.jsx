import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  typography: {
    // Use the system font.
    useNextVariants: true,
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
      main: '#061831',
    },
    secondary: {
      main: '#D4AF37',
    },
  },
});

const Container = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Container;
