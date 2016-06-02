(function($) {
    $(function() {
        // SLIDE-DOWN MENU
        $('.sub-list').hide();
        $('.sub-sub-list').hide();

        $('.list-item')
            .hover(
                function() {
                    $(this).children('.sub-list')
                        .animate({
                            top: '25px',
                            left: '0',
                            backgroundColor: '#3a3a3a'
                        }, 0)
                        .fadeIn(200)

                }, function () {
                    $(this).children('.sub-list').hide(200);
                });

        $('.sub-list-item')
            .css('position', 'relative')
            .hover(
                function() {
                    $(this).children('.sub-sub-list')
                        .animate({
                            top: '0',
                            left: '120px',
                            backgroundColor: '#555'
                        }, 0)
                        .fadeIn(200)
                }, function () {
                    $(this).children('.sub-sub-list').fadeOut(200);
                }
            );


        // SELECTS
        $('select').selectBox({
            mobile: true,
            menuTransition: 'fade',
            menuSpeed: 'normal',
            loopOptions: true
        });

        $('select').on('click', function() {
            $(this).children('option').addClass('.custom-option');
        });

        // JCAROUSEL

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
    });
})(jQuery);
