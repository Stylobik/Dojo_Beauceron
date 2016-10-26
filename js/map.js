$(function () {

    function initMap() {

        var location = new google.maps.LatLng(48.44385399999999, 1.4890120000000024);
        var loc1 = new google.maps.LatLng(48.44453069999999, 1.4623942000000625);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 13,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = '../../img/marker.png';


        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage,
            maxWidth: 400
        });

        var marker1 = new google.maps.Marker({
            position: loc1,
            map: map,
            icon: markerImage
        });

        var contentString =
        '<div class="info-window">' +
        '<h3>Dojo Chartres</h3>' +
        '</div>';

        var contentString1 =
        '<div class="info-window">' +
        '<h3>Dojo Mainvilliers</h3>' +
        '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var infowindow1 = new google.maps.InfoWindow({
            content: contentString1,
            maxWidth: 200
        });

        google.maps.event.addListener(marker1, 'click', function() {
          $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass('animated ' + animationName);
                    });
                }
            });


          $(marker1).ready(function(){
            $('.dojoCH').css('display','none');
              $('.dojoMV').css('display', 'block').animateCss('fadeIn');
          });
        });

        google.maps.event.addListener(marker, 'click', function() {

          $.fn.extend({
                animateCss: function (animationName) {
                    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                    this.addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass('animated ' + animationName);
                    });
                }
            });

            $(marker).ready(function(){
              $('.dojoMV').css('display','none');
                $('.dojoCH').css('display', 'block').animateCss('fadeIn');
            });
        });


        marker.addListener('click', function () {
          infowindow1.close(map, marker1);
            infowindow.open(map, marker);
        });

        marker1.addListener('click', function () {
          infowindow.close(map, marker);
            infowindow1.open(map, marker1);
        });

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        map.set('styles', styles);


    }
    $('#map').click(function(){
      $(this).popover('hide');
    });

    google.maps.event.addDomListener(window,'load', initMap);
});
