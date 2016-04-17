var LIVIGNO_DATE = '2017/04/08';

var maxPhotos = 30;
var photos = 30;
var slides = [];

while (photos--) {
  slides.push(
    'images/' + photos + '.jpg'
  );
}

slides.sort(function(){
  return 0.5 - Math.random();
});

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
