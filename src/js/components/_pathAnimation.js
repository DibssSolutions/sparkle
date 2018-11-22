import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';

/* 
    Triggering animation
*/
const parent = $('.js-processes');
var elementWatcher = scrollMonitor.create(parent, -200);

const processes = document.querySelectorAll('[data-process]');
const process = document.querySelector('[data-process]');
const processesArr = [].slice.call(processes);

elementWatcher.enterViewport(function() {
  drawProcess(process);
});

function drawProcess(el) {
  const innerCircle = el.querySelector('[data-icon-circle-inner]');
  const outerCircle = el.querySelector('[data-icon-circle-outer]');
  const icon = el.querySelector('[data-icon]');
  const title = el.querySelector('[data-title]');
  const descr = el.querySelector('[data-descr]');
  const motionEl = el.querySelector('[data-motion-el]');
  const path = el.querySelector('path');
  const motionPath = el.querySelector('[data-motion-path]');
  const animePath = anime.path(motionPath);

  var tl = anime.timeline({ easing: 'linear' });
  tl.add({
    targets: innerCircle,
    opacity: 1,
    duration: 400
  })
    .add({
      targets: outerCircle,
      opacity: 1,
      duration: 300,
      offset: '-=200'
    })
    .add({
      targets: icon,
      opacity: 1,
      duration: 300
    })
    .add({
      targets: path,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 800
    })
    .add({
      targets: motionEl,
      opacity: 1,
      translateX: animePath('x'),
      translateY: animePath('y'),
      // scale: [
      //   {
      //     value: 1.2,
      //     duration: 400
      //   },
      //   {
      //     value: 1,
      //     duration: 400
      //   }
      // ],
      easing: 'linear',
      duration: 800,
      offset: '-=800',
      complete: function() {
        const next = el.nextElementSibling;
        if (!next) return false;
        drawProcess(next);
      }
    });
}
