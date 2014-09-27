/*global FastClick:false, ga:false, classie:false */

var app = (function() {

  function addMultipleEventListeners(el, s, fn) {
    var evts = s.split(' ');
    for (var i=0, iLen=evts.length; i<iLen; i++) {
      el.addEventListener(evts[i], fn, false);
    }
  }

  if ('querySelector' in document && 'addEventListener' in window) {
    var NAVIGATION_OPEN_CLASS    = 'navigation-is-open',
        NAVIGATION_TRIGGER_CLASS = 'js-nav-btn',
        NAVIGATION_CLOSE_CLASS   = 'js-nav-close-btn',
        timer,
        position                 = window.scrollY,
        navigationLinks          = '#nav a',
        url                      = window.location.href,
        body                     = document.querySelector('body'),
        container                = document.querySelector('.container'),
        triggerButton            = document.querySelector('.' + NAVIGATION_TRIGGER_CLASS),
        closeButton              = document.querySelector('.' + NAVIGATION_CLOSE_CLASS),
        topLink                  = document.querySelector('#top-link'),
        trackingLinks            = document.querySelectorAll('a');

    /**
    * Open navigation menu
    */
    function toggleNavigation() {
      classie.toggle(body, NAVIGATION_OPEN_CLASS);
      event && event.preventDefault();
      event && event.stopImmediatePropagation();
    }

    /**
    * Close navigation menu
    */
    function closeNavigation() {
      if (classie.has(body, NAVIGATION_OPEN_CLASS)) {
        if (event.target.className !== NAVIGATION_TRIGGER_CLASS) {
          classie.remove(body, NAVIGATION_OPEN_CLASS);
        }
        event.preventDefault();
      }
    }

    /**
    * Hightlight current navigation item
    */
    function currentNavigationItem() {
      selectedNavigationItem = Array.prototype.filter.call(document.querySelectorAll(navigationLinks), function(target) {
        return target.href === url
      });

      return selectedNavigationItem[0];
    }

    /**
    * Scroll smoothly to the top of the page
    */
    function scrollSmoothlyToTop() {
      var position = window.scrollY; // Get the scroll position

      // Set the body top margin
      body.style.marginTop = -position+'px';
      body.style.overflowY = 'scroll';

      // Make the scroll handle on the position 0
      window.scrollTo(0, 0);

      // Add the transition property to the body element
      body.style.transition = 'all 1s cubic-bezier(0.135, 0.780, 0.215, 1.080)';

      // Apply the scroll effects
      body.style.marginTop = '0';

      // Wait until the transition end
      addMultipleEventListeners(body, 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
        body.style.transition = 'none';
      });

      event && event.preventDefault();
    }

    /**
    * Track all links with Google Analytics
    */
    function trackLinksWithGoogleAnalytics() {
      var url = this.getAttribute('href'),
          newtab = false;

      if (event.currentTarget.host !== window.location.host) {
        ga('send', 'event', 'Ausgehender Link', 'click', event.target.text + ': ' + event.target.href);

        if (event.metaKey || event.ctrlKey || this.target === '_blank') {
          newtab = true;
        }

        if (!newtab) {
          event.preventDefault();
          setTimeout('document.location = "' + url + '"', 100);
        }

      } else {
        ga('send', 'event', 'Interner Link', 'click', event.target.text + ': ' + event.target.href);
      }
    }

    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
      fitVids('.container');

      // Navigation menu event listeners
      triggerButton.addEventListener('click', toggleNavigation);
      closeButton.addEventListener('click', closeNavigation);
      container.addEventListener('click', closeNavigation);

      // Hightlighting of navigation item
      if (currentNavigationItem()) {
        classie.add(currentNavigationItem().parentElement, 'nav-is-active');
      }

      // Scroll smoothly to the top of the page
      topLink.addEventListener('click', scrollSmoothlyToTop);

      // Tracking aller Links
      for (var i = 0, len = trackingLinks.length; i < len; i++) {
        var trackingLink = trackingLinks[i];

        trackingLink.addEventListener('click', trackLinksWithGoogleAnalytics);
      }
    });
  }

  return {
    toggleNavigation: toggleNavigation,
    scrollToTop: scrollSmoothlyToTop
  }

})();

