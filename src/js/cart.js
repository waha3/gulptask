function setCartData(obj) {
  var cartDataInit = {
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

function selectData() {
  var obj = {
    cart_list: [],
    carttype: 'cart',
    count: '',
    coupon_code: '',
    product_list: '',
    skuid: '',
    spuid: ''
  };
  var arr = [];
  $('.wrap .label').each(function(i, v) {
    if ($(v).hasClass('selected')) {
      arr.push($(v).attr('data-id'));
      obj.cart_list = arr;
    }
  });
  setCartData(obj);
}

function iterationWrapLabelSelectd(that) {
  $(that).parents('.store')
    .find('.wrap .label')
    .each(function(i, v) {
      if (!$(v).hasClass('selected')) {
        $(v).parents('.store')
            .find('.top .label')
            .removeClass('selected');
        return false;
      } else {
        $(that).parents('.store')
              .find('.top .label')
              .addClass('selected');
      }
    });
}

function iterationAllLabelSelected() {
  $('.wrap .label').each(function(i, v) {
    if (!$(v).hasClass('selected')) {
      $('.select-all').removeClass('selected');
      return false;
    } else {
      $('.select-all').addClass('selected');
    }
  });
}

function select() {
  $('.wrap .label').on('click', function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      $(this).addClass('selected');
    }
    iterationWrapLabelSelectd(this);
    iterationAllLabelSelected();
  });
}

function selectStoreAll() {
  $('.select-store-all').on('click', function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected')
            .parents('.store')
            .find('.wrap .label')
            .removeClass('selected');
    } else {
      $(this).addClass('selected')
            .parents('.store')
            .find('.wrap .label')
            .addClass('selected');
    }
    iterationAllLabelSelected();
  });
}

function selectAll() {
  $('.select-all').on('click', function() {
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
      $('.label').removeClass('selected');
    } else {
      $(this).addClass('selected');
      $('.label').addClass('selected');
    }
  });
}

function selectGoodsNum() {
  $('.label').on('click', function() {
    var num = 0;
    $('.wrap .label').each(function(i, v) {
      if($(this).hasClass('selected')) {
        num = num + 1;
      }
    });
    $('.totalnums span').html(num);
  });
}

function calculateTotalPrice() {
  var totalPrice = 0;
  var currentPrice = 0;
  $('.label').on('click', function() {
    $('.label').each(function(i, v) {
      if ($(v).hasClass('selected')) {
        currentPrice = $(v).parent('._wrap').find('.price span').text().trim();
        if (currentPrice) {
          totalPrice = parseFloat(currentPrice) + totalPrice;
        }
      }
    });
    $('.footer .price > span').text(totalPrice);
    totalPrice = 0;
  });
}

function init() {
  select();
  selectStoreAll();
  selectAll();
  selectGoodsNum();
  calculateTotalPrice();
}
