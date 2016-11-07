function setCartData(obj) {
  var Data;
  Data = {
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
      // $('.store .label').click();
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
    } else {
      $(this).addClass('selected');
    }
    $('.select-store-all').click();
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
  $('.label').click();
}

function init() {
  select();
  selectStoreAll();
  selectAll();
  selectGoodsNum();
}
