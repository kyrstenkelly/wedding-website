import AustinLayout from '../../components/austin-layout';
import styles from '../index.module.scss';

const Gifts: React.FC = (): React.ReactElement => {
  return (
    <AustinLayout hero={
      <h1 className={styles.cursive_font}>Gifts</h1>
    }>
      <p>
        For gifts, we often give each other experiences rather than items. On top of that, we are already blessed
        {' '}with a house full of stuff. So, we have chosen to set up just one non-traditional registry.
        {' '}We would be eternally greatful if you helped contribute to our grand Honeymoon adventure.
      </p>

      <p>
        <a href='http://www.zola.com/registry/kyrstenandjames' target='_blank' rel='noopen noreferrer'>Contribute to the Honeymoon Fund</a>
      </p>
    </AustinLayout>
  )
}

export default Gifts;
