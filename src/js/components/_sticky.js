// import { OPEN, ACTIVE, BODY, WIN } from '../constants';
// import { debounce } from '../utils';

// const sticky = $('.js-sticky');
// const parentSection = $('.js-sticky-parent');
// const stickyH1 = sticky.outerHeight();
// const stickyH2 = $('.block-title__rotated').innerWidth();
// let stickyTop = sticky.offset().top;

// const makeSticky = () => {
//   console.log(stickyH1, stickyH2);
//   if (window.pageYOffset >= stickyTop - 150) {
//     sticky.addClass('is-sticky');
//   } else {
//     sticky.removeClass('is-sticky');
//   }
//   let parentBottom = parentSection[0].getBoundingClientRect().bottom;
//   if (parentBottom - stickyH1 - stickyH2 < 40) {
//     sticky.removeClass('is-sticky');
//   }
//   console.log(parentBottom, 40 + stickyH1 + stickyH2);
// };

// WIN.on('scroll', makeSticky);

import 'sticky-sidebar';

$(document).ready(function() {

  const sticky = document.querySelector('.js-sticky');

  if (sticky) {
    var sidebar = new StickySidebar(sticky, {
      containerSelector: '.js-sticky-parent',
      innerWrapperSelector: '.functional__sticky',
      topSpacing: 150
      // bottomSpacing: 800
    });
  }
});
