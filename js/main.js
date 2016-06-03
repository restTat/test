$(window).load(function() {
  $("#loader").delay(500).fadeOut();
  $(".mask").delay(1000).fadeOut("slow");
});

 var overlay = $('<div/>',  { id : "overlay"});
    overlay.appendTo('body').hide();
var width = $(window).width();
  $(document).on('ready', function() {
    if (width > 540) {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false
      });



$('.slider').find('a').on('click', function(event) {

  var href = $(this).attr('href'),
      image = $('<img>', { src: href, alt: 'obr'});
  overlay.html( image )
        .show();
  event.preventDefault();
});

overlay.on('click', function(){
  overlay.hide();
});

    }
    else{
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        vertical: true,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false
      });
      $('.slider').find('a').on('click', function(event) {
       event.preventDefault();
    });
    }
  });
  function initialize(){
        var mapOptions = {
          center: new google.maps.LatLng(48.853890, 20.938748),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP, 
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: false,
          scaleControl: false,
          draggable: false
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(48.853890, 20.938748),
          map: map
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);


