var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: 'Open Popup',
      callback: onBtnClick
    }, {
      // but of course, you could also just kick off to a url if that's your thing
      icon: GRAY_ICON,
      text: 'JS-DT-7 Repo',
      url: 'https://github.com/dafabulousteach/js-dt-7',
      target: 'Trello Developer Site' // optional target for above url
    }];
  },

  'card-badges': function (t, opts) {
    return t.card('name')
    .get('name')
    .then(function(cardName){
      console.log('We just loaded the card name for fun: ' + cardName);
      return [{
        // dynamic badges can have their function rerun
        // after a set number of seconds defined by refresh.
        // Minimum of 10 seconds.
        dynamic: function(){
          // we could also return a Promise that resolves to
          // this as well if we needed to do something async first
          return {
            text: 'Dynamic ' + (Math.random() * 100).toFixed(0).toString(),
            icon: './images/icon.svg',
            color: 'green',
            refresh: 10 // in seconds
          };
        }
      }, {
        // its best to use static badges unless you need your
        // badges to refresh you can mix and match between
        // static and dynamic
        text: 'Static',
        icon: HYPERDEV_ICON, // for card front badges only
        color: null
      }];
    });
  }
});