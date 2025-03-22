(function($) {
    'use strict';
    $(document).ready(function() {
        $('.navbar-nav li.menu-item-has-children>a').on('click', function(e) {
            e.preventDefault();
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp()
            } else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp()
            }
        });
        $('.navbar-nav>ul>li.menu-item-has-children>a').append('<span class="holder"></span>');
        getColor();

        function getColor() {
            var textColor = $('.navbar-nav').css('color');
            if (textColor && textColor.startsWith('rgb')) {
                textColor = textColor.replace(/[^\d,]/g, '').split(',');
                var r = textColor[0];
                var g = textColor[1];
                var b = textColor[2];
                var l = rgbToHsl(r, g, b);
                if (l > 0.7) {
                    $('.navbar-nav>ul>li>a').css('text-shadow', '0 1px 1px rgba(0, 0, 0, .35)');
                    $('.navbar-nav>ul>li>a>span').css('border-color', 'rgba(0, 0, 0, .35)')
                } else {
                    $('.navbar-nav>ul>li>a').css('text-shadow', '0 1px 0 rgba(255, 255, 255, .35)');
                    $('.navbar-nav>ul>li>a>span').css('border-color', 'rgba(255, 255, 255, .35)')
                }
            }
        }

        function rgbToHsl(r, g, b) {
            r /= 255, g /= 255, b /= 255;
            var max = Math.max(r, g, b),
                min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;
            if (max == min) {
                h = s = 0
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break
                }
                h /= 6
            }
            return l
        }
    })
})(jQuery);