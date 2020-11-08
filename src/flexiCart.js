import Vue from 'vue';
import App from './App.vue';
import sendAddProductToCart from './utilities/sendAddProductToCart.js';

export default class FlexiCart {
  static init(config = {}) {
    window.flexicart = new Vue({
      render: (h) => h(App),
    }).$mount('div[data-flexicart]');

    document.addEventListener('click', sendAddProductToCart);
  }
}
