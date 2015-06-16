//= require "jquery"
//= require "fitvids"

/*!
 * kollegorna.se js
 */
(function() {

    'use strict';

    var Kollegorna = {

      init: function() {
        // get labs RSS feed
        this.labsRssFeed();

        this.fitvids();
      },

      labsRssFeed: function () {
        if($('.home__labs').length) {
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

      fitvids: function () {
        $('.article__body').fitVids();
      }
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        Kollegorna.init();
    });
}());
