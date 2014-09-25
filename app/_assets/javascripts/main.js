/*global $:false, jQuery:false, FastClick:false, ga:false */

if ('querySelector' in document && 'addEventListener' in window) {
  var timer,
      position      = $(window).scrollTop(),
      url           = window.location.href,
      body          = document.querySelector('body'),
      container     = document.querySelector('.container'),
      triggerButton = document.querySelector('.js-nav-btn')
      closeButton   = document.querySelector('.js-nav-close-btn');

  /**
  * Open navigation menu
  */
  function toggleNavigation() {
    classie.toggle(body, 'navigation-is-open');
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  /**
  * Close navigation menu
  */
  function closeNavigation() {
    if (classie.has(body, 'navigation-is-open')) {
      if (event.target.className !== 'nav-btn') {
        classie.remove(body, 'navigation-is-open');
      }
    }
  }


  $(function() {
    FastClick.attach(document.body);
    fitVids('.container');

    // Navigation menu event listeners
    triggerButton.addEventListener('click', toggleNavigation);
    closeButton.addEventListener('click', closeNavigation);
    container.addEventListener('click', closeNavigation);


    // Hightlight current navigation item
    // ==================================
    $('#nav a').filter(function() {
      return this.href === url;
    }).closest('li').addClass('nav-is-active');


    // Scroll smoothly to the top of the page
    // ======================================
    $('#top-link').on('click', function(event) {
      var position = $(window).scrollTop(); // Get the scroll position

      // Set the body top margin
      $('body').css({
        'margin-top': -position+'px',
        'overflow-y': 'scroll', // This property is posed for fix the blink of the window width change
      });

      // Make the scroll handle on the position 0
      $(window).scrollTop(0);

      // Add the transition property to the body element
      $('body').css('transition', 'all 1s cubic-bezier(0.135, 0.780, 0.215, 1.080)');

      // Apply the scroll effects
      $('body').css('margin-top', '0');

      // Wait until the transition end
      $('body').on('webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd', function() {
        // Remove the transition property
        $('body').css('transition', 'none');
      });

      event.preventDefault();
    });

    // Tracking aller Links
    // ====================
    var trackingLinks = document.querySelectorAll('a');

    for (var i = 0, len = trackingLinks.length; i < len; i++) {
      var trackingLink = trackingLinks[i];

      trackingLink.addEventListener('click', function(event) {
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
      });
    }

  });
}
