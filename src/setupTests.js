import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });
