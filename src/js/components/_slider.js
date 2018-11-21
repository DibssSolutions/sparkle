import slick from 'slick-carousel';
import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
import { BODY, DOC, WIN, INIT, widthMD, widthSM, ACTIVE } from '../constants';
import { buildIcon } from '../utils';

// ============== OFFERS SLIDER ====================
DOC.ready(() => {
  const slider = $('.js-slider');

  slider.each((i, el) => {
    let slider = $(el);

    slider.on('init', function(event, slick) {
      slider.addClass(INIT);
      // setTimeout(() => {
      //   var firstSlide = slick.$slides.get(0);
      //   animateEnter(firstSlide);
      // }, 400);
    });

    var elementWatcher = scrollMonitor.create(slider, -200);
    elementWatcher.enterViewport(function() {
      // animateEnter(firstSlide);
    });

    slider.on('afterChange', (event, slick, currentSlide) => {
      let el = slick.$slides.get(currentSlide);
      animateEnter(el);
    });

    slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
      let el = slick.$slides.get(currentSlide);
      animateExit(el);
    });

    slider.slick({
      dots: false,
      infinite: false,
      speed: 1800,
      fade: true,
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
      const text = el.querySelector('.js-slider-text');
      text.classList.add(ACTIVE);
      const marks = el.querySelectorAll('[data-mark]');
      const marksArr = [].slice.call(marks);
      marksArr.forEach((mark, index) => {
        setTimeout(() => animateMark(mark), index * 1000);
      });
    }

    function animateExit(el) {
      const text = el.querySelector('.js-slider-text');
      text.classList.remove(ACTIVE);
      const marks = el.querySelectorAll('[data-mark]');
      const marksArr = [].slice.call(marks);
      marksArr.forEach((mark, index) => {
        // setTimeout(() => animateExitMark(mark), index * 1000);
      });
    }

    // class Mark {
    //   constructor()
    // }
    function selectors(el) {
      innerCircle = el.querySelector('[data-circle-inner]');
      outerCircle = el.querySelector('[data-circle-outer]');
      innerIconCircle = el.querySelector('[data-icon-circle-inner]');
      outerIconCircle = el.querySelector('[data-icon-circle-outer]');
      icon = el.querySelector('[data-icon]');
      line = el.querySelector('[data-mark-solid-line]');
      dashedLine = el.querySelector('[data-mark-dashed-line]');
      text = el.querySelector('.js-slider-text');
      return {
        innerCircle,
        outerCircle,
        innerIconCircle,
        outerIconCircle,
        icon,
        line,
        dashedLine,
        text
      };
    }

    function animateMark(el) {
      // const innerCircle = el.querySelector('[data-circle-inner]');
      // const outerCircle = el.querySelector('[data-circle-outer]');
      // const innerIconCircle = el.querySelector('[data-icon-circle-inner]');
      // const outerIconCircle = el.querySelector('[data-icon-circle-outer]');
      // const icon = el.querySelector('[data-icon]');
      // const line = el.querySelector('[data-mark-solid-line]');
      // const dashedLine = el.querySelector('[data-mark-dashed-line]');
      // const text = el.querySelector('.js-slider-text');
      selectors(el);
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
          duration: 1000,
          offset: '-=200'
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
