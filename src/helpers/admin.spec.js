import helper from './admin';

describe('helpers/admin', () => {
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
