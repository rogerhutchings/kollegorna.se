//= require "jquery"
//= require "fitvids"
//= require "waitForImages/dist/jquery.waitforimages.min.js"
//= require "pretty-embed/jquery.prettyembed.min.js"
//= require "gsap"
//= require "mapbox.js/mapbox.js"
//= require "packery/dist/packery.pkgd.min.js"
//= require "imagesloaded/imagesloaded.pkgd.min.js"

/*!
 * kollegorna.se js
 */
(function() {

    'use strict';

    TweenMax.set($('.home__language'), { opacity: 0, rotationX: -60, marginTop: '-50px', transformOrigin: 'center 0', transformPerspective: 800 });

    var Kollegorna = {

      init: function() {
        // get labs RSS feed
        this.labsRssFeed();

        this.video();

        this.caseMedia();
      },

      labsRssFeed: function () {
        if ($('.home__labs').length) {
          $.ajax({
            url      : document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('https://labs.kollegorna.se/feed.xml'),
            dataType : 'json',
            success  : function (data) {
              if (data.responseData.feed && data.responseData.feed.entries) {
                $('.home__labs p').after('<ul></ul>');

                $.each(data.responseData.feed.entries, function (i, e) {
                  if (i < 5) {
                    var press_date = new Date(e.publishedDate);
                    $('.home__labs ul').append('<li><a href="' + e.link + '">' + e.title + '</a><time class="t-meta t-meta--small">' + Kollegorna.formatRssDate(press_date) + '</time></li>');
                  }
                });
              }
            }
          });
        }
      },

      formatRssDate: function (d) {
        var curr_date = d.getDate();
        var curr_month = d.getMonth();
        var curr_year = d.getFullYear();

        if ($('html').attr('lang') == 'sv') {
          var month_names = new Array("januari", "februari", "mars",
          "april", "maj", "juni", "juli", "augusti", "september",
          "oktober", "november", "december");

          return curr_date + ' ' + month_names[curr_month] + ' ' + curr_year;
        } else {
          return d.toISOString().substring(0, 10);
        }
      },

      video: function () {
        $('.article__body').fitVids();
      },

      caseMedia: function() {
        if ($('.case__media').length) {
          $('.case__media').fitVids();
          $().prettyEmbed({ useFitVids: true });

          $('.case__media__tweet').each(function(i) {
            var tweet = $(this);
            $.ajax({
              url: "https://api.twitter.com/1/statuses/oembed.json?url="+tweet.attr('data-tweet'),
              dataType: "jsonp",
              success: function(data){
                tweet.html(Kollegorna.caseMediaTweet(data));
              }
            });
          });

          setTimeout(function () {
              $('.case__media').fadeIn('medium');

              var $case_media = $('.case__media').imagesLoaded( function() {
                $case_media.packery({
                  itemSelector: '.case__media__item',
                  gutter: 0
                });
              });

          }, 1300);


        }
      },

      // Make tweets look nice. Remove Twitter widget script and add profile
      // image from avatars.io.
      caseMediaTweet: function(data) {
        var html = $(data.html.bold());
        html.find('script').remove();

        var twitter_handle = (data.author_url.match(/https?:\/\/(www\.)?twitter\.com\/(#!\/)?@?([^\/]*)/)[3]);

        var twitter_profile_image = '<figure class="case__media__tweet__image polaroid polaroid--circle"><img src="//avatars.io/twitter/' + twitter_handle + '?size=large"></figure>';

        html = '<div class="case__media__tweet__content">' + html.html() + '</div>';
        html = twitter_profile_image + html;

        return html;
      },
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        Kollegorna.init();
    });

  //Language Message
  var DEFAULT_VALUE = 'en';
  var PREFERRED_LANGUAGE = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || DEFAULT_VALUE;
  console.log(PREFERRED_LANGUAGE);
  if (PREFERRED_LANGUAGE != 'sv' || PREFERRED_LANGUAGE != 'sv-fi') {
    console.log('Language Not Swedish');
  }

  TweenMax.to($('.home__language'), .25, { opacity: 1, marginTop: 0, rotationX: 30, delay: .5, ease:Power1.easeInOut });
  TweenMax.to($('.home__language'), .25, { opacity: 1, marginTop: 0, rotationX: -15, delay: .75, ease:Power1.easeInOut });
  TweenMax.to($('.home__language'), .25, { opacity: 1, marginTop: 0, rotationX: 7, delay: 1, ease:Power1.easeInOut });
  TweenMax.to($('.home__language'), .25, { opacity: 1, marginTop: 0, rotationX: -3, delay: 1.25, ease:Power1.easeInOut });
  TweenMax.to($('.home__language'), .25, { opacity: 1, marginTop: 0, rotationX: 0, delay: 1.5, ease:Power1.easeInOut });
  
  //Colleagues Map
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
        coordinates: [18.071309, 59.340776]
      },
      properties: {
        title: 'Kollegorna HQ',
        description: 'This is a description.',
        profileImage: 'http://www.myfreewallpapers.net/comics/wallpapers/superfriends-hall-of-justice.jpg',
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
        profileImage: 'http://static.comicvine.com/uploads/original/11118/111183530/4164391-8467850456-JL_Ba.jpg',
        twitterUrl: 'https://twitter.com'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [127.634045, 36.062109]
      },
      properties: {
        title: 'Samuel Carlsson',
        description: 'This is a description.',
        profileImage: 'http://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/char_111.jpg',
        twitterUrl: 'https://twitter.com'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-9.141324, 38.719770]
      },
      properties: {
        title: 'Eduardo Nunes',
        description: 'This is a description.',
        profileImage: 'http://img1.wikia.nocookie.net/__cb20080218205841/marvel_dc/images/8/86/Robin_-_Super_Friends_01.jpg',
        twitterUrl: 'https://twitter.com'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [17.588915, 48.380779]
      },
      properties: {
        title: 'Ivan Novosad',
        description: 'This is a description.',
        profileImage: 'http://cdn.inquisitr.com/wp-content/uploads/2012/07/Aquaman-was-voiced-by-Norman-Alden.png',
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
    var popupContent = '<div class="popup map__popup" style="background-image: url('+feature.properties.profileImage+')">' +
                       '<h2>'+feature.properties.title+'</h2>' +
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
  
  $('#raymall').on('click', function(e) {
    map.setView([$(this).attr('data-latitude'), $(this).attr('data-longitude')], 9);
  });
  
  var pulseAni = new TimelineMax({repeat: -1, repeatDelay: 1 });
  pulseAni.to($('.marker__pulse'), .5, { opacity: .8, scale: 1.5, ease: Power0.easeNone });
  pulseAni.to($('.marker__pulse'), .5, { opacity: 0, scale: 2, ease: Power0.easeNone });
}());
