import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
var Draggabilly = require('draggabilly');

const mask = document.querySelector('[data-concept-mask]');
const image = document.querySelector('[data-concept-image]');
const dragContainer = document.querySelector('[data-concept-drag-container]');
const trigger = document.querySelector('[data-concept-trigger]');

var imgAnim = anime({
  targets: image,
  translateY: ['102%', 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'linear',
  autoplay: false
  // delay: 200
});

var elementWatcher = scrollMonitor.create(trigger);
elementWatcher.enterViewport(function() {
  monitorAnim();
});

function monitorAnim() {
  anime({
    targets: mask,
    opacity: 1,
    duration: 2000,
    easing: 'linear',
    complete: function() {
      imgAnim.play();
    }
  });
}

let dr = false;
image.addEventListener('mouseenter', e => {
  imgAnim.pause();
  const el = $(image);
  // el.css('transform', 'none');
  var draggie = new Draggabilly(image, {
    axis: 'y'
  });

  draggie.on('pointerDown', function(event, pointer) {
    dr = true;
  });
});

dragContainer.addEventListener('mouseleave', e => {
  console.log('mouseleaver');
  if (!dr) {
    imgAnim.play();
  } else {
    // const el = $(image);
    // const offsetTop = el.css('top');
    image.style.top = 0;
    // anime({
    //   targets: image,
    //   top: 0,
    //   duration: 500,
    //   complete: function() {
    //     // imgAnim.reverse();
    imgAnim.play();

    // }
  }
});

