
(function() {

    'use strict';

    var Kollegorna = {

        settings: {
            previousScroll: 0
        },

        init: function() {

            // SVG fallback using Modernizr
            this.svgfallback();

            // Keyboard shortcuts
            this.keypresses();

            // Misc
            this.misc();

        },

        keypresses: function() {

            $('body').keydown(function(e) {
                // if ESC show/hide menu
                if (e.keyCode === 27 || e.keyCode === 77) {
                    Kollegorna.showHidepopover();
                    e.preventDefault();
                }
            });
        },

        showHidepopover: function() {
            if ($('.popover').hasClass('expanded')) {
                Kollegorna.popover();
            } else {
                Kollegorna.showpopover();
            }
        },

        showpopover: function() {
            $('.popover').removeClass('invisible').addClass('expanded');
            $('.navigation a').attr('tabindex', '');
            $('html').css('overflow', 'hidden');
            $('span.icon span').text('Stäng meny');
            $('.logo--navigation').addClass('visible');
        },

        popover: function() {
            $('.popover').removeClass('expanded');
            $('.navigation a').attr('tabindex', '-1');
            $('.icon').blur();
            $('html').css('overflow', 'visible');
            $('span.icon span').text('Meny');
            $('.logo--navigation').removeClass('visible');
        },

        misc: function() {

            // Show menu
            $('nav').on('click touchstart', function(event) {
                Kollegorna.showHidepopover();
                event.preventDefault();
            })

            // Clicking anywhere inside .popover or heading won’t close popover
            $('.navigation').on('click touchstart', function(event){
                event.stopPropagation();
            });

            // Lettering
            $(".logo, .header-logo").lettering();

            // Typer http://cosmos.layervault.com/typer-js.html
            $('[data-typer-targets]').typer();
        },

        menuscrolled: function() {


            var menuOffset = 54;
            var detachPoint = 650;
            var hideShowOffset = 6;

            var _this = $(window);

            if (!$('.popover').hasClass('expanded')) {
                var currentScroll = _this.scrollTop(), // gets current scroll position
                scrollDifference = Math.abs(currentScroll - Kollegorna.settings.previousScroll); // calculates how fast user is scrolling

                // if scrolled past menu
                if (currentScroll > menuOffset) {
                    // if scrolled past detach point add class to fix menu
                    if (currentScroll > detachPoint) {
                        if (!$('.popover').hasClass('detached'))
                        $('.popover').addClass('detached');
                    }

                    // if scrolling faster than hideShowOffset hide/show menu
                    if (scrollDifference >= hideShowOffset) {
                        if (currentScroll > Kollegorna.settings.previousScroll) {
                            // scrolling down; hide menu
                            if (!$('.popover').hasClass('invisible'))
                            $('.popover').addClass('invisible');
                        } else {
                            // scrolling up; show menu
                            if ($('.popover').hasClass('invisible'))
                            $('.popover').removeClass('invisible');
                        }
                    }
                } else {
                    // only remove “detached” class if user is at the top of document (menu jump fix)
                    if (currentScroll <= 0){
                        $('.popover').removeClass('detached');
                    }
                }

                // if user is at the bottom of document show menu
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    $('.popover').removeClass('invisible');
                }

                // replace previous scroll position with new one
                Kollegorna.settings.previousScroll = currentScroll;
            }
        },


        svgfallback: function() {

            if (!Modernizr.svg) {
                $("img[src$='.svg']").each(function() {
                    $(this).attr("src", $(this).data('fallback'));
                });
            }
        },

    };

    $(function() {
        Kollegorna.init();
    });

    $(window).scroll(function() {
        Kollegorna.menuscrolled();
    });

}());
