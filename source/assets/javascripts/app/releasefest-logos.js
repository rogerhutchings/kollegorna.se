$(document).ready(function() {

  var logo1 = $('#releasefest-logo-1 .releasefest-logo__sq').not('.transparent');
  logo1Animation = new TimelineMax({repeat: -1});
  logo1Animation.staggerTo(logo1, .1, {opacity: 0, scale: .5, ease:Power0.easeNone }, .05);
  logo1Animation.staggerTo($('#releasefest-logo-1 .releasefest-logo__sq').not('.transparent'), .1, {opacity: 1, scale: 1, ease:Power0.easeNone }, .05, "-=2.5");
  $('#releasefest-logo-1').on('click', function() {
    logo1Animation.paused() ? logo1Animation.play() : logo1Animation.pause();
  });
  $('#releasefest-logo-1').on('dblclick', function() {
    logo1Animation.restart();
  });


  var logo2 = $('#releasefest-logo-2 .releasefest-logo__sq').not('.transparent');
  logo2Animation = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo2Animation.staggerFromTo(logo2, .1, {opacity: 0, x: -50}, {opacity: 1, x: 0, ease:Power1.easeOut}, -.1);
  $('#releasefest-logo-2').on('click', function() {
    logo2Animation.paused() ? logo2Animation.play() : logo2Animation.pause();
  });
  $('#releasefest-logo-2').on('dblclick', function() {
    logo2Animation.restart();
  });


  var logo3 = $('#releasefest-logo-3 .releasefest-logo__sq').not('.transparent');
  logo3Animation = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo3Animation.staggerFromTo(logo3, .5, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Back.easeInOut}, -.25);
  $('#releasefest-logo-3').on('click', function() {
    logo3Animation.paused() ? logo3Animation.play() : logo3Animation.pause();
  });
  $('#releasefest-logo-3').on('dblclick', function() {
    logo3Animation.restart();
  });


  logo4Animation = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row1 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25);
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row2 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row3 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row4 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row5 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row6 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row7 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row8 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row9 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row10 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  logo4Animation.staggerFromTo($('#releasefest-logo-4 .row11 .releasefest-logo__sq').not('.transparent'), .6, {opacity: 0, x: -50, y: 50, scale: 1.5}, {opacity: 1, x: 0, y: 0, scale: 1, ease:Expo.easeOut}, -.25, "-=1.5");
  $('#releasefest-logo-4').on('click', function() {
    logo4Animation.paused() ? logo4Animation.play() : logo4Animation.pause();
  });
  $('#releasefest-logo-4').on('dblclick', function() {
    logo4Animation.restart();
  });


  logo5Animation = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo5Animation2 = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo5Animation.staggerFromTo($('#releasefest-logo-5 .top_half .releasefest-logo__sq').not('.transparent'), .33, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease:Power1.easeOut}, -.165);
  logo5Animation2.staggerFromTo($('#releasefest-logo-5 .bottom_half .releasefest-logo__sq').not('.transparent'), .5, {opacity: 0, x: 100}, {opacity: 1, x: 0, ease:Power1.easeOut}, .25);
  $('#releasefest-logo-5').on('click', function() {
    logo5Animation.paused() ? logo5Animation.play() : logo5Animation.pause();
    logo5Animation2.paused() ? logo5Animation2.play() : logo5Animation2.pause();
  });
  $('#releasefest-logo-5').on('dblclick', function() {
    logo5Animation.restart();
    logo5Animation2.restart();
  });

  /*
  var logo6First = $('#releasefest-logo-6 .releasefest-logo__sq').first();
  var logo6FirstLeft = $('#releasefest-logo-6 .releasefest-logo__sq').not('.transparent').first().offset().left;
  var logo6FirstTop = $('#releasefest-logo-6 .releasefest-logo__sq').not('.transparent').first().offset().top;
  $('#releasefest-logo-6 .releasefest-logo__sq').not('.transparent').each(function(index) {
    var elemLeft = $(this).offset().left;
    var elemTop = $(this).offset().top;
    TweenMax.set($(this), { x: (logo6FirstLeft - elemLeft), y: (logo6FirstTop - elemTop) });
  });
  logo6Animation = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true});
  logo6Animation.staggerTo($('#releasefest-logo-6 .releasefest-logo__sq').not('.transparent'), .2, {opacity: 1, x: 0, y: 0, ease:Power0.easeNone}, .1);
  $('#releasefest-logo-6').on('click', function() {
    logo6Animation.paused() ? logo6Animation.play() : logo6Animation.pause();
  });
  $('#releasefest-logo-6').on('dblclick', function() {
    logo6Animation.restart();
  });
  */

});
