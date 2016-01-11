/*!
 * The map! /map
 */
(function() {

  if ($('#map').length) {
    $('.map__logo').hover(
      function() {
        TweenMax.to($('.map__logo'), 1, { scale: 1.2, repeat: -1, yoyo: true, ease:Power1.easeInOut });
      }, function() {
        TweenMax.to($('.map__logo'), .5, { scale: 1, ease: Back.easeOut.config(1.7) });
      }
    );

    L.mapbox.accessToken = 'pk.eyJ1Ijoia29sbGVnb3JuYSIsImEiOiJvWk5VR3FjIn0.1zlsFncPm_sHrDcmmpzudg';
    var map = L.mapbox.map('map', 'kollegorna.map-rbr6h31m')
      .setView([40, -74.50], 5);

    var myLayer = L.mapbox.featureLayer().addTo(map);

    var geoJson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [18.0360443, 59.3427392]
        },
        properties: {
          title: 'Kollegorna HQ',
          description: 'This is a description.',
          location: 'Stockholm, Sweden',
          profileID: 'kollegorna-hq',
          twitterUrl: 'https://twitter.com'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-69.85965728759766, 18.48937737263002]
        },
        properties: {
          title: 'Raymall Pérez',
          description: 'This is a description.',
          location: 'Santo Domingo, Dominican Republic',
          profileID: 'raymall',
          twitterUrl: 'https://twitter.com'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [126.9779692, 37.566535]
        },
        properties: {
          title: 'Samuel Carlsson',
          description: 'This is a description.',
          location: 'Seoul, South Korea',
          profileID: 'samuel',
          twitterUrl: 'https://twitter.com'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-8.410257, 40.203314]
        },
        properties: {
          title: 'Eduardo Nunes',
          description: 'This is a description.',
          location: 'Coimbra, Portugal',
          profileID: 'eduardo',
          twitterUrl: 'https://twitter.com'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [12.701701, 56.038150]
        },
        properties: {
          title: 'Dennis Carlsson',
          description: 'This is a description.',
          location: 'Helsingborg, Sweden',
          profileID: 'dennis',
          twitterUrl: 'https://twitter.com'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [17.5961403, 48.395168]
        },
        properties: {
          title: 'Ivan Novosad',
          description: 'This is a description.',
          location: 'Trnava, Slovakia',
          profileID: 'ivan',
          twitterUrl: 'https://twitter.com'
        }
      }]
    };

    // Set a custom icon on each marker based on feature properties.
    myLayer.on('layeradd', function(e) {
      var marker = e.layer,
          feature = marker.feature;

    // This is where the magic happens...
      marker.setIcon(L.divIcon({
        className: 'map__marker', // Make sure you set an icon class here, otherwise default styles will be set by Mapbox's CSS
        html: '<div class="marker__pulse">'+
              '<div class="marker__pulse--expand"></div'+
              '</div>', // The content of your HTML marker, you can build a string based on the marker properties by using 'feature.properties.your_property'
        iconSize: [20, 20] // The bounds for your icon
      }));

      // Create custom popup content
      var popupContent = '<div class="popup map__popup">' +
                           '<div class="map__popup--image" id="'+feature.properties.profileID+'"></div>' +
                           '<h2>'+feature.properties.title+'</h2>' +
                           '<p><span class="map__popup--pin"></span> '+feature.properties.location+'</p>' +
                         '</div>';

      // http://leafletjs.com/reference.html#popup
      marker.bindPopup(popupContent, {
          closeButton: true,
          minWidth: 150
      });
    });

    // Add features to the map.
    myLayer.setGeoJSON(geoJson);
    // featureLayer.getBounds() returns the corners of the furthest-out markers,
    // and map.fitBounds() makes sure that the map contains these.
    map.fitBounds(myLayer.getBounds());

    myLayer.on('click', function(e) {
      e.layer.openPopup();
    });

    $('.map__profile').hover(
      function() {
        TweenMax.to($(this), .25, { scale: 1.1, ease: Power0.easeInOut });
      }, function() {
        TweenMax.to($(this), .25, { scale: 1, ease: Power0.easeInOut });
      }
    );

    $('.map__profile').on('click', function(e) {
      var profile = $(this);
      TweenMax.to($(this), .2, { scale: .8, repeat: 1, yoyo: true, ease: Power0.easeInOut });
      setTimeout(function() {
        map.setView([profile.attr('data-latitude'), profile.attr('data-longitude')], 9);
      }, 400);
    });

    var pulseAni = new TimelineMax({repeat: -1, repeatDelay: 1 });
    pulseAni.to($('.marker__pulse'), .5, { opacity: .8, scale: 1.5, ease: Power0.easeNone });
    pulseAni.to($('.marker__pulse'), .5, { opacity: 0, scale: 2, ease: Power0.easeNone });
  }

}());
