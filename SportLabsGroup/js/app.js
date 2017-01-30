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
};;'use strict';

var setClasses = function setClasses(links, activeLinkTopNav, activeLinkBottomNav) {
    links.forEach(function (e) {
        e.classList.remove('active');
    });
    console.log(activeLinkTopNav);
    activeLinkTopNav.classList.add('active');
    activeLinkBottomNav.classList.add('active');
};

var toggleLinksOnScroll = function toggleLinksOnScroll(scroll, navTopLinks) {
    if (scroll <= 737) {
        setClasses(navTopLinks, navTopLinks[0], navTopLinks[4]);
    }
    if (scroll >= 738 && scroll <= 1482) {
        setClasses(navTopLinks, navTopLinks[1], navTopLinks[5]);
    }
    if (scroll >= 1483 && scroll < 1920) {
        setClasses(navTopLinks, navTopLinks[2], navTopLinks[6]);
    }
    if (scroll >= 1921) {
        setClasses(navTopLinks, navTopLinks[3], navTopLinks[7]);
    }
};

var toggleLinksOnClick = function toggleLinksOnClick(navTopLinks) {
    navTopLinks.forEach(function (link) {
        link.addEventListener('click', function (link) {
            var href = link.target.getAttribute('href');
            var relatedLinks = Array.prototype.slice.call(document.querySelectorAll('a[href=\'' + href + '\']'));
            console.log(relatedLinks);
            setClasses(navTopLinks, relatedLinks[0], relatedLinks[1]);
            // link.preventDefault();
            // let position = this.getAttribute('data-scrollTo');
            // window.scroll(0, position);
        });
    });
};;'use strict';

var smoothScroll = function smoothScroll(navTopLinks) {
    navTopLinks.forEach(function (link) {
        link.addEventListener('click', function (link) {
            link.preventDefault();
            var position = this.getAttribute('data-scrollTo');
            window.scroll(0, position);
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
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var getNavTopLinks = function getNavTopLinks() {
        return navTopLinks = Array.prototype.slice.call(document.getElementsByClassName('nav-link'));
    };
    getNavTopLinks();
    // toggleLinksOnScroll(scroll, navTopLinks);
    // smoothScroll(navTopLinks);
    toggleLinksOnClick(navTopLinks);
};

window.onscroll = function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    changeHeaderColor(scroll);
    // toggleLinksOnScroll(scroll, navTopLinks);
};