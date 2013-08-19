var LIVIGNO_DATE = '2014/04/15 00:00:00';

var photos = 31;
var slides = [];

while (photos--) {
  slides.push({
    image: 'images/' + photos + '.jpg',
    title: 'Is it Livigno yet?',
    url: 'http://isitlivignoyet.com'
  });
}

jQuery(function($) {

  $.supersized({

    // Functionality
    slideshow: 1,
    // Slideshow on/off
    autoplay: 1,
    // Slideshow starts playing automatically
    start_slide: 1,
    // Start slide (0 is random)
    stop_loop: 0,
    // Pauses slideshow on last slide
    random: 1,
    // Randomize slide order (Ignores start slide)
    slide_interval: 3000,
    // Length between transitions
    transition: 6,
    // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
    transition_speed: 1000,
    // Speed of transition
    new_window: 1,
    // Image links open in new window/tab
    pause_hover: 0,
    // Pause slideshow on hover
    keyboard_nav: 1,
    // Keyboard navigation on/off
    performance: 1,
    // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
    image_protect: 1,
    // Disables image dragging and right click with Javascript
    // Size & Position						   
    min_width: 0,
    // Min width allowed (in pixels)
    min_height: 0,
    // Min height allowed (in pixels)
    vertical_center: 1,
    // Vertically center background
    horizontal_center: 1,
    // Horizontally center background
    fit_always: 0,
    // Image will never exceed browser width or height (Ignores min. dimensions)
    fit_portrait: 0,
    // Portrait images will not exceed browser height
    fit_landscape: 1,
    // Landscape images will not exceed browser width
    // Components							
    slide_links: 'blank',
    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
    thumb_links: 0,
    // Individual thumb links for each slide
    thumbnail_navigation: 0,
    // Thumbnail navigation
    slides: slides,
    // Theme Options			   
    progress_bar: 0,
    // Timer for each slide							
    mouse_scrub: 0
  });

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
