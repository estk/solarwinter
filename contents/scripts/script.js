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

$(function () {
$("a").click(function (e) {
e.preventDefault();
$("a").addClass("active").not(this).removeClass("active");
});
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({scrollLeft: 0});
  });
});
