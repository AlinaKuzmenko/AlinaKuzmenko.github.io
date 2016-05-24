// указываем здесь $, чтобы не было конфликтов с другими библиотеками. В текущем скоупе у нас
// гарантированно будет jQuery
(function ($) {

    // fn - служебный объект, который хранит в себе все доступные методы для jQuery объектов.
    //строка ниже добавляет в fn наш метод. Так мы расширяем служебный объект fn
    $.fn.phgallery = function () {

        var $gallery = $('div.photo-gallery');

        // это наша ссылка, на которой мы проинициализировали плагин
        var $img = this;

        console.log($img);

        // метод для создания html и помещения его в DOM
        function showModal(e) {

            // нужно вытащить путь к картинке
            var targetImageSrc = e.target.src;

            var $modal = $('<div class="phgallery-modal"><img class="big-image" src="' + targetImageSrc + '"></div>');

            $gallery.append($modal);
        }
        
        // вешаем на нее обработчик событий и вместо функции указываем метод, который будет создавать html и
        // вставлять его в DOM
        $img.on('click', showModal);

        // во время вызова плагина принято возвращать this
        return this;
    };

// передаем jQuery в вызов функции, что принимать эту библиотеку с именем $ в параметре функции
})(jQuery);
