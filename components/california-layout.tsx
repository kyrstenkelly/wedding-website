import BackgroundImage from './background-image';
import Menu from './menu';
import Layout from './layout';
import {
  CALI_MENU_LINKS,
  CALI_URL_BASE
} from '../constants';
import background from '../public/images/engagement-3.jpg';
import backgroundCompressed from '../public/images/engagement-3-compressed.jpg';
import styles from '../pages/index.module.scss';

interface CaliforniaLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  home?: boolean;
}

const CaliforniaLayout: React.FC<CaliforniaLayoutProps> = ({
  children,
  hero,
  home
}): React.ReactElement => {
  return (
    <Layout>
      <BackgroundImage
        className={styles.hero}
        url={background}
        placeholderUrl={backgroundCompressed}
      >
        <Menu links={CALI_MENU_LINKS} homeUrl={home ? '/' : CALI_URL_BASE} />

        <section className={styles.hero__content}>
          {hero}
        </section>
      </BackgroundImage>

      <section className={styles.content}>
        {children}
      </section>
    </Layout>
  )
}

export default CaliforniaLayout;
