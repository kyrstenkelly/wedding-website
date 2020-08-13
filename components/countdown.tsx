import React from 'react';
import moment, { Moment } from 'moment';
import styles from './countdown.module.scss';

type CountdownItem = {
  key: string;
  value: number;
}
type Countdown = CountdownItem[];

const countdownKeys = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];

interface CountdownProps {
  date: Moment;
}

const buildTextString = (val: number, unit: string): string => {
  let unitText = unit;
  if (val === 1) {
    unitText = unitText.slice(0, unitText.length - 1);
  }
  return unitText;
}

const Countdown: React.FC<CountdownProps> = ({ date }): React.ReactElement => {
  const duration: moment.Duration = moment.duration(date.diff(moment()));
  let countdown: Countdown = countdownKeys.map(key => ({
    key,
    value: eval(`duration.${key}()`)
  }));
  countdown = countdown.filter((c: CountdownItem) => c.value > 0).slice(0, 3);

  return (
    <div className={styles.countdown}>
      {countdown.map((c) => (
        <div className={styles.unit} key={c.key}>
          <div className={styles.unit__value}>{c.value}</div>
          <div className={styles.unit__label}>{buildTextString(c.value, c.key)}</div>
        </div>
      ))}
    </div>
  )
}

export default Countdown;
