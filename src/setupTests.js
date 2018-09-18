import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
};
global.localStorage = new LocalStorageMock();
