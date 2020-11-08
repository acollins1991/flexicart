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
