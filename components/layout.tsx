import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import classNames from 'classnames';
import styles from './layout.module.scss';

const theme = createMuiTheme({
  typography: {
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

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title
}): React.ReactElement => {
  const pageTitle = 'J & K' + (title ? ` | ${title}` : '');

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>{pageTitle}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="James &amp; Kyrsten's Wedding Website"
          />
        </Head>

        <main className={styles.layout}>
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
