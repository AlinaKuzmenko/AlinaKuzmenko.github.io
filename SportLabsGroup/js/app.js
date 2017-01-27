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
};;'use strict';

var setClasses = function setClasses(links, activeLink) {
    links.forEach(function (e) {
        e.classList.remove('active');
    });
    activeLink.classList.add('active');
};

var toggleLinkClass = function toggleLinkClass() {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var navTopLinksCollection = document.getElementsByClassName('nav-top--link');
    var navTopLinks = Array.prototype.slice.call(navTopLinksCollection);

    if (scroll <= 737) {
        setClasses(navTopLinks, navTopLinks[0]);
    }
    if (scroll >= 738 && scroll <= 1482) {
        setClasses(navTopLinks, navTopLinks[1]);
    }
    if (scroll >= 1483 && scroll < 1920) {
        setClasses(navTopLinks, navTopLinks[2]);
    }
    if (scroll >= 1921) {
        setClasses(navTopLinks, navTopLinks[3]);
    }
};;"use strict";;"use strict";

window.onscroll = function () {
    changeHeaderColor();
    toggleLinkClass();
};