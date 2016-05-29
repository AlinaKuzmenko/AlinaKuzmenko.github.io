(function($) {
    /* при клике на чекбоксе меняем его вид и значение */
    $(document).ready(function(){
        $('.checkbox-wrapper').mousedown(function() {
             changeCheck($(this));
        });

        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        $('.checkbox-wrapper').each(function() {
                 changeCheckStart($(this));
            });
    });

    // функция смены вида и значения чекбокса
    // el - span контейнер дял обычного чекбокса
    // input - чекбокс
    function changeCheck(el) {
         var el = el,
              input = el.find('input').eq(0);
         if(!input.attr('checked')) {
            el.css('background-position','-19px center');
            input.attr('checked', true)
        } else {
            el.css('background-position','0 center');
            input.attr('checked', false)
        }
         return true;
    }

    // если установлен атрибут checked, меняем вид чекбокса
    function changeCheckStart(el) {
        var el = el,
        input = el.find('input').eq(0);
        if (input.attr('checked')) {
            el.css('background-position','-19px center');
        }
         return true;
    }
})(jQuery);
