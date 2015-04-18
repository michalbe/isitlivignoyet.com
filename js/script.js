var LIVIGNO_DATE = '2016/04/08 00:00:00';

var maxPhotos = 30;
var photos = 30;
var slides = [];

while (photos--) {
  slides.push(
    'images/' + photos + '.jpg'
  );
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
  $("body").backgroundCycle({
      imageUrls: slides,
      fadeSpeed: 500,
      duration: 4000,
      backgroundSize: SCALING_MODE_COVER
  });
});
