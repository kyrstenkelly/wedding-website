import rsvpService from 'services/rsvp-service';
import helper from './admin';

const mockData = [{mock: 'data'}];

describe('helpers/admin', () => {
  describe('#fetchData', () => {
    it('fetches event data', () => {
      const mock = jest.fn();
      mock.mockReturnValue(Promise.resolve(mockData));
      rsvpService.fetchEvents = mock;

      return helper.fetchData('events').then((result) => {
        expect(mock).toHaveBeenCalled();
        expect(result.columns);
        expect(result.data).toBe(mockData);
      });
    });

    it('fetches guest data', () => {
      const mock = jest.fn();
      mock.mockReturnValue(Promise.resolve(mockData));
      rsvpService.fetchGuests = mock;

      return helper.fetchData('guests').then((result) => {
        expect(mock).toHaveBeenCalled();
        expect(result.columns);
        expect(result.data).toBe(mockData);
      });
    });

    it('fetches rsvp data', () => {
      const mock = jest.fn();
      mock.mockReturnValue(Promise.resolve(mockData));
      rsvpService.fetchRSVPs = mock;

      return helper.fetchData('rsvps').then((result) => {
        expect(mock).toHaveBeenCalled();
        expect(result.columns);
        expect(result.data).toBe(mockData);
      });
    });

    it('throws an error for unknown data types', () => {
      const badDataCall = () => {
        return helper.fetchData('not-real');
      };
      expect(badDataCall).toThrowError();
    });
  });

  describe('#formatData', () => {
    it('doesnt format anything if there are no nested objects', () => {
      const data = {
        key1: 'test',
        key2: 'test2'
      };
      const formattedData = helper.formatData(data);
      expect(formattedData).toEqual(data);
    });

    it('flattens nested objects at one level deep', () => {
      const data = {
        key1: 'test',
        key2: {
          subkey1: 'hello',
          subkey2: 'world'
        }
      };
      const expectedData = {
        key1: 'test',
        key2: 'hello world'
      };
      const formattedData = helper.formatData(data);
      expect(formattedData).toEqual(expectedData);
    });

    it('omits objects nested two levels deep', () => {
      const data = {
        key1: 'test',
        key2: {
          subkey1: 'hello',
          subkey2: 'world'
        },
        key3: {
          subkey1: 'hey',
          subkey2: {
            toomany: 'damn keys',
            seriously: 'its too many'
          }
        }
      };
      const expectedData = {
        key1: 'test',
        key2: 'hello world',
        key3: 'hey'
      };
      const formattedData = helper.formatData(data);
      expect(formattedData).toEqual(expectedData);
    });
  });
});