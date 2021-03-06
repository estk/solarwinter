/* Your scripts go here */

$(function() {
  $('#slides').slidesjs({
    width: 1440,
    height: 960,
    navigation: {
      active: false
    },
    play: {
      effect: "fade",
      active: false,
      auto: true,
      interval: 50000,
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
        speed: 2200
      }
    }
  });
});

jQuery(document).ready(function () {
  jQuery('div.photoset a').colorbox({scalePhotos: true, transition:"elastic", maxWidth: "80%"});
});

$(function () {
  $("a").click(function (e) {
    $("a").addClass("active").not(this).removeClass("active");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({scrollLeft: 0});
  });
});


