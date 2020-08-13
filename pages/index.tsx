import classNames from 'classnames';
import Link from 'next/link';
import BackgroundImage from '../components/background-image';
import Countdown from '../components/countdown';
import Menu from '../components/menu';
import Layout from '../components/layout';
import {
  AUSTIN_WEDDING_DATE,
  CALI_WEDDING_DATE
} from '../constants';
import background from '../public/images/engagement-1.jpg';
import backgroundCompressed from '../public/images/engagement-1-compressed.jpg';
import styles from './index.module.scss';

const MENU_LINKS = [{
  key: 'austin',
  title: 'Austin',
  url: '/austin'
}, {
  key: 'california',
  title: 'California',
  url: '/california'
}]

export default function Home() {
  return (
    <Layout>
      <BackgroundImage
        url={background}
        placeholderUrl={backgroundCompressed}
      >
        <Menu homeUrl='/' />

        <section className={styles.hero}>
          <div className={classNames(styles.hero__content, styles.hero__column)}>
            <Link href='/austin'><a>Austin</a></Link>

            <Countdown date={AUSTIN_WEDDING_DATE} />

            <div className={styles.date}>
              {AUSTIN_WEDDING_DATE.format('MMM D, YYYY')}
            </div>
          </div>

          <div className={classNames(styles.hero__content, styles.hero__column)}>
            <Link href='/california'><a>California</a></Link>

            <Countdown date={CALI_WEDDING_DATE} />

            <div className={styles.date}>
              {CALI_WEDDING_DATE.format('MMM D, YYYY')}
            </div>
          </div>
        </section>
      </BackgroundImage>
    </Layout>
  )
}
