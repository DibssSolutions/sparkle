import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');
import { BODY, DOC, WIN, INIT, widthMD, widthSM } from '../constants';

DOC.ready(() => {
  var scrollTriggers = $('[data-anim-parent]');
  var details = $('[data-detail-box]');
  var titles = $('[data-title]');

  $(scrollTriggers).each((index, el) => {
    var el = $(el);
    var elementWatcher = scrollMonitor.create(el);
    elementWatcher.enterViewport(function() {
      var scrollers = el.find('[data-anim-from]');
      $(scrollers).each((index, el) => {
        var el = $(el);
        setTimeout(() => {
          el.addClass('is-active');
        }, index * 100);
      });
    });
  });

  $(details).each((index, el) => {
    var el = $(el);
    var parent = el.closest('[data-detail]')[0];
    if (!parent) return false;

    var circleInner = parent.querySelector('[data-circle-inner]');
    var circleOuter = parent.querySelector('[data-circle-outer]');
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

  $(titles).each((index, el) => {
    var elJS = $(el)[0];
    var titleLine = elJS.querySelector('[data-title-line]');
    var titleRotated = elJS.querySelector('[data-title-rotated]');
    var titleNumbers = elJS.querySelectorAll('[data-title-number]');

    var titleWatcher = scrollMonitor.create(el, -100);
    titleWatcher.enterViewport(function() {
      if ($(el).hasClass('is-animated')) return false;
      var tl = anime.timeline({ easing: 'linear' });
      tl.add({
        targets: titleLine,
        scaleX: [0, 1],
        rotate: '-22.3deg',
        opacity: { value: [0, 1], duration: 10 },
        duration: 500
      })
        .add({
          targets: titleNumbers,
          opacity: [0, 1],
          translateY: [100, 0],
          duration: 500,
          delay: function(el, i, l) {
            return i * 200;
          },
          offset: '-=200'
        })
        .add({
          targets: titleRotated,

          opacity: [0, 1],
          complete: function(anim) {
            $(el).addClass('is-animated');
          }
        });
    });
  });
});
