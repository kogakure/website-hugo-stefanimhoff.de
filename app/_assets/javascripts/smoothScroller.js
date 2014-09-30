'use strict';

var position = window.scrollY,
    body     = document.querySelector('body');

module.exports = {
  scrollSmoothlyToTop: function() {
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

    event.preventDefault();
  }
};
