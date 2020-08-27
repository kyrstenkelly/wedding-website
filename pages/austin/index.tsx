import Link from 'next/link';
import AustinLayout from '../../components/austin-layout';
import Countdown from '../../components/countdown';
import { AUSTIN_WEDDING_DATE } from '../../constants';
import styles from '../index.module.scss';

const Austin: React.FC = (): React.ReactElement => {
  return (
    <AustinLayout
      home
      hero={
        <>
          <Countdown date={AUSTIN_WEDDING_DATE} />

          <div className={styles.date}>
            {AUSTIN_WEDDING_DATE.format('MMM D, YYYY')}
          </div>
        </>
      }
    >
      <div className={styles.center}>
        <h1 className={styles.cursive_font}>The Backyard Wedding</h1>

        <h3 className={styles.print_font}>
          The Kellys<br/>
          9001 Ovalla Drive <br/>
          Austin, TX 78749<br/>
          5:30 PM - Whenever
        </h3>

        <p>
          Ceremony with a reception to follow. <br/>
          Dinner will be served.
        </p>

        <p>
          Due to COVID-19, we have postponed our destination wedding in Saratoga, CA. However, we still really wanted to get married,{' '}
          so we are having a small ceremony in the Kellys' backyard on our original wedding date.
          <br/><br/>
          For more COVID related details, please see the <Link href='/austin/faq'><a>FAQ Page</a></Link>.
          <br/><br/>
          If you were originally invited to the California wedding but we{' '}
          did not invite you to the backyard wedding, please know it was just for everyone's safety and we are still so, so excited about the{' '}
          <Link href='/california'><a>California wedding</a></Link> next fall!
        </p>
      </div>
    </AustinLayout>
  )
}

export default Austin;
