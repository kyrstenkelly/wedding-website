import BackgroundImage from './background-image';
import Menu from './menu';
import Layout from './layout';
import {
  AUSTIN_MENU_LINKS,
  AUSTIN_URL_BASE
} from '../constants';
import background from '../public/images/engagement-2.jpg';
import backgroundCompressed from '../public/images/engagement-2-compressed.jpg';
import styles from '../pages/index.module.scss';

interface AustinLayoutProps {
  children: React.ReactNode;
  hero: React.ReactNode;
  home?: boolean;
}

const AustinLayout: React.FC<AustinLayoutProps> = ({
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
        <Menu links={AUSTIN_MENU_LINKS} homeUrl={home ? '/' : AUSTIN_URL_BASE} />

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

export default AustinLayout;
