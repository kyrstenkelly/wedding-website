import CaliforniaLayout from '../../components/california-layout';
import styles from '../index.module.scss';

const SJC_AIRPORT_LINK = 'https://www.google.com/maps/dir/Norman+Y.+Mineta+San+Jose+International+Airport+(SJC),+1701+Airport+Blvd,+San+Jose,+CA+95110/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.298684,-121.9812996,12z/data=!4m8!4m7!1m2!1m1!1s0x808fcbc3fab3c59b:0xbcfa443f6df67e3e!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';
const SFO_AIRPORT_LINK = 'https://www.google.com/maps/dir/San+Francisco+Airport+(SFO),+San+Francisco,+CA/Saratoga+Springs+Events+%26+Weddings,+Big+Basin+Way,+Saratoga,+CA/@37.4355891,-122.2161904,11z/data=!4m8!4m7!1m2!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!1m2!1m1!1s0x808e4b43b6696425:0x5eb7cbd719ad3eea!3e0';

const Travel: React.FC = (): React.ReactElement => {
  return (
    <CaliforniaLayout hero={
      <h1 className={styles.cursive_font}>Travel</h1>
    }>
      <h2 className={styles.print_font}>Hotel</h2>

      <p>
        We have a group block at Wild Palms Hotel.<br/>
        The group rate applies to Friday and Saturday nights.
      </p>

      <p>
        Wild Palms Hotel <br/>
        910 E Fremont Ave <br/>
        Sunnyvale, CA 94087
      </p>

      <p>
        (Check back soon for a group link with the updated wedding dates.)
      </p>

      <h2 className={styles.print_font}>Airports</h2>
      <p>
        <a href={SJC_AIRPORT_LINK}>San Jose Airport (SJC)</a><br/>
        San Jose is the closest airport to the hotel (~15-20 minutes) and to the venue. <br/><br/>
        <a href={SFO_AIRPORT_LINK}>San Fransisco Airport (SFO)</a> <br/>
        San Fransisco may have more flights or better prices, as it's the bigger airport, however it will be 30 - 45 minutes from the hotel (depending on traffic).
      </p>
    </CaliforniaLayout>
  )
}

export default Travel;
