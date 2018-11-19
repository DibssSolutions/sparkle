import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';

/* 
    Triggering animation
*/
const parent = $('.js-processes');
var elementWatcher = scrollMonitor.create(parent, -200);

const processes = document.querySelectorAll('[data-process]');
const processesArr = [].slice.call(processes);

elementWatcher.enterViewport(function() {
  processesArr.forEach((el, index) => {
    setTimeout(() => {
      drawProcess(el, index);
    }, index * 1000);
  });
});

function drawProcess(el, index) {
  const innerCircle = el.querySelector('[data-icon-circle-inner]');
  const outerCircle = el.querySelector('[data-icon-circle-outer]');
  const icon = el.querySelector('[data-icon]');
  const title = el.querySelector('[data-title]');
  const descr = el.querySelector('[data-descr]');
  const motionEl = el.querySelector('[data-motion-el]');
  const path = el.querySelector('path');
  console.log(path);
  const animePath = anime.path(path);

  var tl = anime.timeline({ easing: 'linear' });
  tl.add({
    targets: innerCircle,
    opacity: 1,
    duration: 1000
  })
    .add({
      targets: outerCircle,
      opacity: 1,
      duration: 500
    })
    .add({
      targets: icon,
      opacity: 1,
      duration: 2000
    })
    .add({
      targets: motionEl,
      translateX: animePath('x'),
      translateY: animePath('y'),
      //   rotate: path('angle'),
      easing: 'linear',
      duration: 1000
      // loop: true
    });
}
