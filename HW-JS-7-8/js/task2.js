$(function () {
    $('.input-label')
        .mouseenter(function() {
            $('.help-text').fadeOut(100);
            $(this).children('.help-text').fadeIn(100);
        })
        .mouseleave(function () {
            $('.help-text').fadeOut(100);
        });

    $('.show-help-texts').click(function () {
        $('.help-text').css('display', 'inline');
    });
});