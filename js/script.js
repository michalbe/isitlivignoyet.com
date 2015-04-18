var LIVIGNO_DATE = '2016/04/08 00:00:00';

var photos = 30;
var slides = [];

while (photos--) {
  slides.push({
    image: 'images/' + photos + '.jpg',
    title: 'Is it Livigno yet?',
    url: 'http://isitlivignoyet.com'
  });
}

jQuery(function($) {
  if (((new Date(LIVIGNO_DATE)).getTime() - (new Date()).getTime()) < 0) {
    $('#answer').html('YES.');
  }

  $('#count-down').county({
    endDateTime: new Date(LIVIGNO_DATE),
    reflection: false,
    animation: 'scroll',
    theme: 'black'
  });

});
