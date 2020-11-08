import 'jsdom-global';
import FlexiCart from '../flexiCart';
import sendAddProductToCart from '../utilities/sendAddProductToCart.js';

describe('FlexiCart class', () => {
  describe('FlexiCart.init', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div data-flexicart></div>';
      FlexiCart.init({});
    });
    afterEach(() => {
      window.flexicart.$destroy();
      Reflect.deleteProperty(window, 'flexicart');
      window.localStorage.clear();
      document.removeEventListener('click', sendAddProductToCart);
    });
    it('Creates a Vue instance and attaches to window', () => {
      expect(window.flexicart._isVue).toBe(true);
    });
    it('Adds event listener to all elements with attr data-flexicart-product to add products to the cart', () => {
      document.body.insertAdjacentHTML('afterbegin', '<button data-flexicart-product data-flexicart-product-code="123" data-flexicart-product-image="http://placekitten.com/200/300">Test Product</button>');
      const productButton = document.querySelector('[data-flexicart-product]');
      productButton.click();
      expect(window.flexicart.$children[0]._data.flexiCartData.cart.products).toEqual([{ code: '123', image: 'http://placekitten.com/200/300' }]);
    });
  });
});
