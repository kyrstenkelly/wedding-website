import CaliforniaLayout from '../../components/california-layout';
import styles from '../index.module.scss';

const Rsvp: React.FC = (): React.ReactElement => {
  return (
    <CaliforniaLayout hero={
      <h1 className={styles.cursive_font}>RSVP</h1>
    }>
      <p>
        Coming soon! <br/>
        Once you receive your formal invitiation, come back here to RSVP.
      </p>
    </CaliforniaLayout>
  )
}

export default Rsvp;
