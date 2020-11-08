/**
 * If click target is has attribute data-flexicart-product
 * fire addProductToCart method on App.vue component,
 * using data-flexicart-product-* as the product config
 * @param {document#event:click} event
 */
const sendAddProductToCart = (event) => {
  const targetElement = event.target;

  if (!targetElement.hasAttribute('data-flexicart-product')) {
    return;
  }

  const flexiCartProductAttributesObj = {};
  Array.from(targetElement.attributes).filter((attr) => attr.name.includes('data-flexicart-product-')).forEach((attr) => {
    flexiCartProductAttributesObj[attr.name.split('-').pop()] = attr.value;
  });

  window.flexicart.$children[0].addProductToCart(flexiCartProductAttributesObj);
};

export default sendAddProductToCart;
