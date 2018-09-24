import auth0 from 'auth0-js';
import service from './auth-service';


describe('services/auth-service', () => {
  describe('#isAuthenticated', () => {
    const originalParseHash = service.parseHash;

    beforeEach(() => {
      service.parseHash = jest.fn();
    });

    afterEach(() => {
      service.parseHash = originalParseHash;
    })

    it('returns true if the jwt cookie has been set', () => {
      service.setJWT('fake-jwt');
      expect(service.isAuthenticated()).toBeTruthy();

      service.removeJWT();
    });

    it('returns false if the id_token has not been set in local storage', () => {
      expect(service.isAuthenticated()).toBeFalsy();
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

      service.parseHash();
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

      service.login();
      expect(mockWebAuth).toHaveBeenCalled();
      expect(authorizeSpy).toHaveBeenCalled();
    });
  });

  describe('#logout', () => {
    let reloadSpy;
    beforeEach(() => {
      reloadSpy = jest.spyOn(window.location, 'reload');
    });

    it('removes the jwt cookie and reloads the window', () => {
      service.setJWT('fake-jwt');
      service.logout();

      expect(service.getJWT()).toBeFalsy();
      expect(reloadSpy).toHaveBeenCalled();
    });
  });
});
