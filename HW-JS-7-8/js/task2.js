$(function () {
    $('.input-label')
        .mouseenter(function() {
            $(this).children('.help-text').fadeIn(100);
        })
        .mouseleave(function () {
            $(this).children('.help-text').fadeOut(100);
        });

    $('.show-help-texts').click(function () {
        $('.help-text').fadeIn(100);
    });
});