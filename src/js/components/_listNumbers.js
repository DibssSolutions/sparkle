import anime from 'animejs';
var scrollMonitor = require('scrollmonitor');

const par = document.querySelector('[data-numbers-list]');
var listWatcher = scrollMonitor.create(par, -100);

listWatcher.enterViewport(function() {
  const numsList = $('[data-list-number]');
  // let nums = {};
  // numsList.each((index, el) => {
  //   const number = $(el).data('listNumber');
  //   // // nums[number] = number;
  //   // nums = {...nums, number};
  //   // console.log(nums);
  // });
  numsList.each((index, el) => {
    numUpdate(el);
  });
});

function numUpdate(el) {
  el = $(el)[0];
  const parent = el.closest('[data-numbers-list]');

  const number = $(el).data('listNumber');
  const numsObj = { count: 0 };
	
  const tl = anime.timeline({easing: 'linear'});
	
  tl.add({
    targets: parent,
    opacity: 1,
    duration: 1000
  }).add({
    targets: numsObj,
    count: number,
    easing: 'linear',
    round: 1,
    duration: 1000,
    offset: '-=800',
    update: function() {
      // var el = document.querySelector('#JSobjectProp pre');
      el.innerHTML = numsObj.count;
    }
  });
}
