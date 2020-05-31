$(document).ready(function() {
    $(window).scroll(function() {
        $('.fadein').each(function(i) {

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).removeClass('fadein');
                $(this).addClass('scale-in-center');
            }

        });

        $('.slidein').each(function(i) {

            var hT = $(this).offset().top,
                hH = $(this).outerHeight(),
                wH = $(window).height(),
                wS = $(window).scrollTop();

            if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
                $(this).removeClass('slidein');
                $(this).addClass('slide-in-left');
            }
        });
    });
});