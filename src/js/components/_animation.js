import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';

DOC.ready(() => {
  var scrollers = $('[data-anim-from]');
  var details = $('[data-detail-box]');
  var titles = $('[data-title]');

  $(scrollers).each((index, el) => {
    var el = $(el);
    var elementWatcher = scrollMonitor.create(el);
    elementWatcher.enterViewport(function() {
      setTimeout(() => {
        el.addClass('is-active');
      }, index * 100);
    });
  });

  $(details).each((index, el) => {
    var el = $(el);
    var parent = el.closest('[data-detail]')[0];
    if (!parent) return false;
    console.log(parent);
    var circleInner = parent.querySelector('[data-detail-circle-inner]');
    var circleOuter = parent.querySelector('[data-detail-circle-outer]');
    var line = parent.querySelector('[data-detail-line]');
    var text = parent.querySelector('[data-detail-text]');
    var box = el[0];

    var h = el.outerHeight();

    var elementWatcher = scrollMonitor.create(el, -h / 4);
    elementWatcher.enterViewport(function() {
      if (el.hasClass('is-animated')) return false;
      var tl = anime.timeline({ easing: 'linear' });
      tl.add({
        targets: circleInner,
        opacity: 1,
        duration: 500
      })
        .add({
          targets: circleOuter,
          opacity: 1,
          duration: 500,
          offset: '-=200'
        })
        .add({
          targets: line,
          translateX: ['-105%', '0%'],
          duration: 500
        })
        .add({
          targets: box,
          scaleX: [0, 1],
          duration: 500,
          offset: '-=150'
        })
        .add({
          targets: text,
          opacity: 1,
          duration: 500,
          offset: '+=200',
          complete: function(anim) {
            el.addClass('is-animated');
          }
        });
    });
  });

  // $(titles).each((index, el) => {
  //   var el = $(el);
  //   var parent = el.closest('[data-detail]')[0];
  //   var circleInner = parent.querySelector('[data-detail-circle-inner]');
  //   var circleOuter = parent.querySelector('[data-detail-circle-outer]');
  //   var line = parent.querySelector('[data-detail-line]');
  //   var text = parent.querySelector('[data-detail-text]');
  //   var box = el[0];
  // });
});
