import CaliforniaLayout from '../../components/california-layout';
import styles from '../index.module.scss';

const Faq: React.FC = (): React.ReactElement => {
  return (
    <CaliforniaLayout hero={
      <h1 className={styles.cursive_font}>FAQ</h1>
    }>
      <p>
        Coming soon!
      </p>
    </CaliforniaLayout>
  )
}

export default Faq;
