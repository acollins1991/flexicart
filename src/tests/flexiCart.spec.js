import 'jsdom-global';
import FlexiCart from '../flexiCart';

describe('FlexiCart class', () => {
  describe('FlexiCart.init', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div data-flexicart></div>';
      FlexiCart.init({});
    });
    afterEach(() => {
      Reflect.deleteProperty(window, 'flexicart');
    });
    it('Creates a Vue instance and attaches to window', () => {
      expect(window.flexicart._isVue).toBe(true);
    });
  });
});
