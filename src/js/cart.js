function setCartData(obj) {
  let cartDataInit = {
    cart_list: [],
    carttype: 'cart',
    count: '',
    coupon_code: '',
    product_list: '',
    skuid: '',
    spuid: ''
  };
  return Object.assign({}, cartDataInit, obj);
}

function select() {
  $('.wrap label').on('click', function() {

  })
}
