var LIVIGNO_DATE = '2016/04/08';

var maxPhotos = 31;
var photos = 31;
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


  $('#count-down').html(LIVIGNO_DATE).countDown();

  $("body").backgroundCycle({
      imageUrls: slides,
      fadeSpeed: 500,
      duration: 4000,
      backgroundSize: SCALING_MODE_COVER
  });
});
