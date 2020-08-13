
import Countdown from '../../components/countdown';
import CaliforniaLayout from '../../components/california-layout';
import { CALI_WEDDING_DATE } from '../../constants';
import styles from '../index.module.scss';

const California: React.FC = (): React.ReactElement => {
  return (
    <CaliforniaLayout
      home
      hero={
        <>
          <Countdown date={CALI_WEDDING_DATE} />

          <div className={styles.date}>
            {CALI_WEDDING_DATE.format('MMM D, YYYY')}
          </div>
        </>
      }
    >
      <div className={styles.center}>
        <h1 className={styles.cursive_font}>The Redwood Wedding</h1>

        <h3 className={styles.print_font}>
          Saratoga Springs Events <br/>
          22801 Big Basin Way <br/>
          Saratoga, CA 95070 <br/>
          5pm - 10pm
        </h3>

        <p>
          Ceremony with a reception to follow. <br/>
          Dinner will be served.
        </p>

        <p>
          We are so sad that we had to postpone our California wedding,<br/>
          but we can't wait to see you next fall!
        </p>
      </div>
    </CaliforniaLayout>
  )
}

export default California;
