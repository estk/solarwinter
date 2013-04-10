/* Your scripts go here */

$(function() {
  $('#slides').slidesjs({
    navigation: {
      active: false
    },
    //width: 940,
    //height: 528,
    play: {
      active: false,
      auto: true,
      interval: 30000,
      swap: true
    },
    pagination: {
      effect: "fade"
    },
    navaigation: {
      effect: "fade"
    },
    effect: {
      slide: {
        speed: 800
      }
    },
    effect: {
      fade: {
        speed: 800
      }
    }
  });
});

jQuery(document).ready(function () {
  jQuery('div.photoset a').colorbox({scalePhotos: true, transition:"elastic", maxWidth: "80%"});
});

