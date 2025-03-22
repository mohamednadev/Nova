jQuery(function($) {
    'use strict';
    jQuery(document).on('ready', function() {
        scrollCue.init()
    });
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            scrollCue.init()
        })
    })
}(jQuery));