import slick from 'slick-carousel';
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';
import { buildIcon } from '../utils';

// ============== OFFERS SLIDER ====================
DOC.ready(() => {
  const slider = $('.js-slider');

  slider.each((i, el) => {
    let slider = $(el);

    slider.on('init', () => {
      slider.addClass(INIT);
    });

    // slider.on('afterChange', (event, slick, currentSlide) => {
    //   // PAUSE ALL VIDEOS
    //   const videos = $('.offers-slider__slide video');
    //   videos.each((i, el) => {
    //     $(el)[0].pause();
    //   });
    //   // PLAY CURRENT
    //   let slides = $('.offers-slider__slide');
    //   const videoCurrent = $(slides[currentSlide]).find('video')[0];
    //   videoCurrent ? videoCurrent.play() : false;
    // });

    slider.slick({
      dots: false,
      infinite: false,
      speed: 1800,
      //   fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      prevArrow: `<button class="slider__btn slider__btn_prev">${buildIcon(
        'chevron-left'
      )}</button>`,
      nextArrow: `<button class="slider__btn slider__btn_next">${buildIcon(
        'chevron-right'
      )}</button>`,
      customPaging: (slider, pageIndex) => {
        return $(`<button class="offers-slider__dot">
    <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <circle stroke="#000" stroke-width="2" cx="17" cy="17" r="16"></circle>
      </g>
    </svg>
    </button>`);
      }
      //   responsive: [
      //     {
      //       breakpoint: widthMD,
      //       settings: {
      //         arrows: false,
      //         fade: false
      //       }
      //     }
      //   ]
    });
  });
});
