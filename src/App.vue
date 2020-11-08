<template>
    <div>test</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flexiCartData: window.localStorage.getItem('flexiCartData') ? JSON.parse(window.localStorage.getItem('flexiCartData')) : {},
    };
  },
  watch: {
    flexiCartData(val) {
      console.log(val);
    },
  },
  methods: {
    addProductToCart(productObject) {
      if (productObject !== null && typeof productObject !== 'object') {
        console.error('Product object invalid: ', productObject);
        return;
      }
      if (!this.flexiCartData.cart) {
        this.flexiCartData.cart = {
          products: [],
        };
      }

      this.flexiCartData.cart.products.push(productObject);

      console.log(this.flexiCartData);
    },
  },
};
</script>
