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
          There will only be ~20 people at the wedding, and it will be outdoors. We’re hoping to be able to relax and not wear masks, if possible.{' '}
          We’re asking people to be extra cautious with their social interactions in the two weeks leading up to the wedding.{' '}
          If you’re unable to do so for whatever reason, we will ask that you wear a mask and/or keep 6 feet away from other guests for everyone’s safety.
          <br/><br/>
          However, in the event that cases spike again in Austin, we will likely ask everyone to wear a mask during most of the wedding, except when eating.
          <br/><br/>
          The only vendors there will be a waiter to help serve food (wearing a mask and gloves), and a photographer (wearing a mask).{' '}
          There will be hand sanitizer readily available. We have enough space that we can space everyone's "germ pods" 6 feet apart during the ceremony and dinner.{' '}
          <br/><br/>
          If you have any other questions or concerns about safety, please reach out to James &amp; Kyrsten.
        </p>
      </section>
    </AustinLayout>
  )
}

export default Faq;
