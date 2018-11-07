import slick from 'slick-carousel';
import anime from 'animejs';
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

    slider.on('afterChange', (event, slick, currentSlide) => {
      // PAUSE ALL VIDEOS
      let el = slick.$slides.get(currentSlide);
      animateEnter(el);
      console.log(el);
    });

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

    function animateEnter(el) {
      const marks = el.querySelectorAll('[data-mark]');
      const marksArr = [].slice.call(marks);
      marksArr.forEach((mark, index) => {
        setTimeout(() => animateMark(mark), index * 1000);
      });
    }

    function animateMark(el) {
      const innerCircle = el.querySelector('[data-mark-circle-inner]');
      const outerCircle = el.querySelector('[data-mark-circle-outer]');
      const innerIconCircle = el.querySelector('[data-mark-icon-circle-inner]');
      const outerIconCircle = el.querySelector('[data-mark-icon-circle-outer]');
      const icon = el.querySelector('[data-mark-icon]');
      const line = el.querySelector('[data-mark-line]');
      const dashedLine = el.querySelector('[data-mark-dashed-line]');
      const text = el.querySelector('.js-slider-text');

      var tl = anime.timeline({ easing: 'linear' });
      tl.add({
        targets: innerCircle,
        opacity: 1,
        duration: 200
      })
        .add({
          targets: outerCircle,
          opacity: 1,
          duration: 200
        })
        .add({
          targets: dashedLine,
          opacity: 1,
          translateY: ['100%', '0%'],
          duration: 1000
        })
        .add({
          targets: line,
          opacity: 1,
          translateY: ['100%', '0%'],
          duration: 1000
          // delay: '-=200'
        })
        .add({
          targets: innerIconCircle,
          opacity: 1,
          duration: 200
        })
        .add({
          targets: outerIconCircle,
          opacity: 1,
          duration: 200
        })
        .add({
          targets: icon,
          opacity: 1,
          duration: 200
        });
    }
  });
});
