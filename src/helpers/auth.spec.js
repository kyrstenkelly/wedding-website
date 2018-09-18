import auth0 from 'auth0-js';
import helper from './auth';


describe('helpers/auth', () => {
  describe('#isAuthenticated', () => {
    const originalParseHash = helper.parseHash;

    beforeEach(() => {
      helper.parseHash = jest.fn();
    });

    afterEach(() => {
      helper.parseHash = originalParseHash;
    })

    it('returns true if the id_token has been set in local storage', () => {
      localStorage.setItem('id_token', 'fake-id-token');
      expect(helper.isAuthenticated()).toBeTruthy();

      localStorage.clear();
    });

    it('returns false if the id_token has not been set in local storage', () => {
      expect(helper.isAuthenticated()).toBeFalsy();
    });
  });

  describe('#parseHash', () => {
    it('creates a new WebAuth client and calls parseHash', () => {
      const parseHashSpy = jest.fn();
      const mockWebAuth = jest.fn(() => {
        return {
          parseHash: parseHashSpy
        }
      });
      auth0.WebAuth = mockWebAuth;

      helper.parseHash();
      expect(mockWebAuth).toHaveBeenCalled();
      expect(parseHashSpy).toHaveBeenCalled();
    });
  });

  describe('#login', () => {
    it('creates a new WebAuth client and calls authorize', () => {
      const authorizeSpy = jest.fn();
      const mockWebAuth = jest.fn(() => {
        return {
          authorize: authorizeSpy
        }
      });
      auth0.WebAuth = mockWebAuth;

      helper.login();
      expect(mockWebAuth).toHaveBeenCalled();
      expect(authorizeSpy).toHaveBeenCalled();
    });
  });

  describe('#logout', () => {
    let reloadSpy;
    beforeEach(() => {
      reloadSpy = jest.spyOn(window.location, 'reload');
    });

    it('removes login info from local storage and reloads the window', () => {
      localStorage.setItem('id_token', 'fake-id-token');
      localStorage.setItem('access_token', 'fake-access-token');
      localStorage.setItem('profile', 'fake-profile');

      helper.logout();

      expect(localStorage.getItem('id_token')).toBeFalsy();
      expect(localStorage.getItem('access_token')).toBeFalsy();
      expect(localStorage.getItem('profile')).toBeFalsy();
      expect(reloadSpy).toHaveBeenCalled();
    });
  });
});
