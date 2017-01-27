'use strict';

var changeHeaderColor = function changeHeaderColor() {
    var scroll = window.pageYOffset;
    console.log(scroll + 'px');

    if (scroll === 0) {
        document.getElementById('header-top').style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
    } else {
        document.getElementById('header-top').style.backgroundColor = '#363636';
    }
};

window.onscroll = function () {
    changeHeaderColor();
};