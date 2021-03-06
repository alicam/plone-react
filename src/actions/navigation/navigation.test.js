import getNavigation from './navigation';
import { GET_NAVIGATION } from '../../constants/ActionTypes';

describe('Navigation action', () => {
  describe('getNavigation', () => {
    it('should create an action to get the navigation', () => {
      const url = 'http://localhost';
      const action = getNavigation(url);

      expect(action.type).toEqual(GET_NAVIGATION);

      const apiMock = {
        get: jest.fn(),
      };
      action.promise(apiMock);

      expect(apiMock.get).toBeCalledWith(`${url}/@components/navigation`);
    });
  });
});
