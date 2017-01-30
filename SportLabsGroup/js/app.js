'use strict';

var changeHeaderColor = function changeHeaderColor(scroll) {
    var header = document.querySelector('.header-top');
    var navTop = document.querySelector('.nav-top');

    if (scroll >= 100) {
        header.classList.add('smaller');
        navTop.classList.add('smaller');
    } else {
        header.classList.remove('smaller');
        navTop.classList.remove('smaller');
    }
};;"use strict";

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
        var step = Math.min(1, (new Date().getTime() - start) / time);
        if (prop) {
            elem[style] = from + step * (to - from) + unit;
        } else {
            elem.style[style] = from + step * (to - from) + unit;
        }
        if (step === 1) {
            clearInterval(timer);
        }
    }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
};'use strict';

var setClasses = function setClasses(links, activeLinkTopNav, activeLinkBottomNav) {
    links.forEach(function (e) {
        e.classList.remove('active');
    });
    activeLinkTopNav.classList.add('active');
    activeLinkBottomNav.classList.add('active');
};

var toggleLinksOnClick = function toggleLinksOnClick(navTopLinks) {
    navTopLinks.forEach(function (link) {
        link.addEventListener('click', function (link) {
            link.preventDefault();
            var href = link.target.getAttribute('href');
            var relatedLinks = Array.prototype.slice.call(document.querySelectorAll('a[href=\'' + href + '\']'));
            var sectionId = href.slice(1);
            var section = sectionId !== '' ? document.getElementById(sectionId) : document.getElementById('header-top');
            var scrollFrom = window.pageYOffset;
            var scrollTo = section.offsetTop - 60;
            setClasses(navTopLinks, relatedLinks[0], relatedLinks[1]);
            animate(document.scrollingElement || document.documentElement, "scrollTop", "", scrollFrom, scrollTo, 700, true);
        });
    });
};;'use strict';

function initMap() {
    var kiev = { lat: 50.448389, lng: 30.514766 };
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        zoom: 17,
        center: kiev
    });
    var marker = new google.maps.Marker({
        position: kiev,
        map: map
    });
};;'use strict';

var navTopLinks = void 0;

window.onload = function () {
    var getNavTopLinks = function getNavTopLinks() {
        return navTopLinks = Array.prototype.slice.call(document.getElementsByClassName('nav-link'));
    };
    getNavTopLinks();
    toggleLinksOnClick(navTopLinks);
};

window.onscroll = function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    changeHeaderColor(scroll);
};