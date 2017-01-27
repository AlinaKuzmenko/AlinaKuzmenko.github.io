'use strict';

var changeHeaderColor = function changeHeaderColor() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('.header-top');
    var navTop = document.querySelector('.nav-top');

    if (scroll > 100) {
        header.classList.add('smaller');
        navTop.classList.add('smaller');
    } else {
        header.classList.remove('smaller');
        navTop.classList.remove('smaller');
    }
};

window.onscroll = function () {
    changeHeaderColor();
};