(function($) {
    $(function() {
        $('.jcarousel').jcarousel({
            wrap: 'circular',
            scroll: '+=1'
        });

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();

        $('select').selectBox({
            mobile: true,
            menuTransition: 'fade',
            menuSpeed: 'normal',
            loopOptions: true
        });

        $('select').on('click', function() {
            $(this).children('option').addClass('.custom-option');
        });

    });
})(jQuery);
