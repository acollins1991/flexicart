import Vue from 'vue';
import App from './App.vue';

export default class FlexiCart {
  static init(config) {
    window.flexicart = new Vue({
      render: (h) => h(App),
    }).$mount('div[data-flexicart]');
  }
}
