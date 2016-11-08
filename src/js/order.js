function selectPayWays() {
  $('.pay .select').on('click', function() {
    $(this).addClass('active')
        .parents('.pay')
        .siblings()
        .find('.select')
        .removeClass('active');
  });
}

function init() {
  selectPayWays();
}
