import Link from 'next/link';
import AustinLayout from '../../components/austin-layout';
import styles from '../index.module.scss';

const Faq: React.FC = (): React.ReactElement => {
  return (
    <AustinLayout hero={
      <h1 className={styles.cursive_font}>FAQ</h1>
    }>
      <section className={styles.faq}>
        <p className={styles.faq__question}>
          What should I wear?
        </p>

        <p>
          Something more formal than pajamas, but more casual than a wedding dress. :) <br/>
          Wear whatever you'd like! There's no formal dress code. We invite you to get dressed <br/>
          up if you feel like it.
        </p>

        <p className={styles.faq__question}>
          Will there be food and drinks?
        </p>

        <p>
          We will be serving dinner, and there will also be some wine and beer. However, you are welcome to BYOB!
        </p>

        <p className={styles.faq__question}>
          So what about COVID-19?
        </p>

        <p>
          Our hope is that by October, with a small and cautious group of people, sitting outdoors, we may be able to spend the{' '}
          evening without masks. We're getting enough tables and chairs that people can separate into their "germ pods" 6 ft apart.{' '}
          We may ask people to wear masks when &lt; 6 ft apart (like when dancing), so please do bring a mask.<br/><br/>
          However, we'll assess what we need to do about safety closer to, and will send out more details about that.
        </p>
      </section>
    </AustinLayout>
  )
}

export default Faq;
