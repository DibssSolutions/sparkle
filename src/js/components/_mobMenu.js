import { ACTIVE } from '../constants';

$('.js-toggle').click(function() {
  $('.js-header').toggleClass(ACTIVE);
  $(this).toggleClass('on');
});
