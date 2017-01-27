'use strict';

var changeHeaderColor = function changeHeaderColor() {
    var scroll = window.pageYOffset;
    // console.log(`${scroll}px`);
    var opacity = 4 + scroll / 10;
    // console.log(`opacity - ${opacity}`);

    if (scroll < 60) {
        document.getElementById('header-top').style.backgroundColor = 'rgba(54, 54, 54, 0.' + opacity + ')';
    } else {
        document.getElementById('header-top').style.backgroundColor = 'rgba(54, 54, 54, 1)';
    }
};

window.onscroll = function () {
    changeHeaderColor();
};