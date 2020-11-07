import 'jsdom-global';
import { mount, shallowMount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('Gets flexicart data from localstorage if available and sets flexiCartData to value', () => {
    const fakeDataString = { test: true };
    // localstorage only accepts strings
    window.localStorage.setItem('flexiCartData', JSON.stringify(fakeDataString));
    const wrapper = shallowMount(App);
    expect(wrapper.vm.$data.flexiCartData).toEqual(fakeDataString);
  });
  it('Set flexiCartData to empty object if no local storage available', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.$data.flexiCartData).toEqual({});
  });
});
