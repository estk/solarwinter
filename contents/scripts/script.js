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
      interval: 8000,
      swap: true
    },
    effect: {
      slide: {
        speed: 800
        }
    }
  });
});

jQuery(document).ready(function () {
  jQuery('div.photoset a').colorbox({rel:'nofollow'});
});
