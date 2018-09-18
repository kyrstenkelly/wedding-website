import events from './events';
import guests from './guests';

export default [{
  id: 1,
  guest: guests[0],  // kyrsten
  event: events[0],  // ceremony
  headCount: 1
}, {
  id: 2,
  guest: guests[0],  // kyrsten
  event: events[1],  // party
  headCount: 1
}, {
  id: 3,
  guest: guests[1],  // james
  event: events[0],  // ceremony
  headCount: 1
}, {
  id: 4,
  guest: guests[1],  // james
  event: events[1],  // party
  headCount: 1
}];
