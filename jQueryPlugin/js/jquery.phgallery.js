(function ($) {
    $.fn.phgallery = function (options) {

        var defaults = {
            overlayColor: 'rgba(0, 0, 0, .4)',
            color: '#fff',
            fontSize: '18px'
        };

        var settings = $.extend(defaults, options);

        var $body = $('body');
        var $img = this;
        var $modal,
            $overlay;

        function showModal(e) {
            var targetImageSrc = e.target.src;
            var targetImageTitle = e.target.title;

            $modal = $('<div class="phgallery-modal"><p class="image-title">' + targetImageTitle + '</p><img class="big-image" src="' + targetImageSrc + '"></div>');
            $modal.css({
                'color': settings.color,
                'font-size': settings.fontSize
            });

            $overlay = $('<div class="phgallery-overlay"></div>');
            $overlay.css({
                'background-color': settings.overlayColor
            });
            $overlay.one('click', hideModal);

            $body.append($overlay);
            $body.append($modal);
        }

        function hideModal () {
            $modal.remove();
            $overlay.remove();
        }

        $img.on('click', showModal);

        return this;
    };
})(jQuery);

