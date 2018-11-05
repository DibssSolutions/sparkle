import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');

var scrollers = $('[data-anim-from]');

$(scrollers).each((index, el) => {
  // var el = $(el);
  var elementWatcher = scrollMonitor.create(el);
  elementWatcher.enterViewport(function() {
    anime({
      targets: el,
      translateX: {
        value: 200,
        duration: 2000
      },
      opacity: 0.3,
      duration: 10000
      // duration: 10000,
      // complete: function(anim) {
      //   console.log(el);
      // }
    });
  });
  elementWatcher.exitViewport(function() {
    console.log('I have left the viewport');
  });
});
