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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-41067712-1', 'solar-flight.com');
ga('send', 'pageview');


