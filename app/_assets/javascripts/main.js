/*global $:false, jQuery:false, FastClick:false, ga:false */

var timer,
    position = $(window).scrollTop(),
    url = window.location.href;

$(function() {

  // FastClick
  // =========
  FastClick.attach(document.body);


  // Fitvids
  // =======
  $('.container').fitVids();


  // Navigation
  // ==========
  // Open navigation by clicking on 'open'
  $('.nav-btn').on('click', function(event) {
    $('body').toggleClass('navigation-is-open');
    event.preventDefault();
    event.stopImmediatePropagation();
  });


  // Close navigation by clicking on 'close'
  $('.nav-close-btn').on('click', function(event) {
    $('body').removeClass('navigation-is-open');
    event.preventDefault();
    event.stopImmediatePropagation();
  });


  // Close navigation by clicking somewhere in the content
  // but not on link or if navigation is closed
  $('.container').on('click', function(event) {
    if ($('body.navigation-is-open').length > 0) {
      if(event.target.className !== 'nav-btn') {
        $('body').removeClass('navigation-is-open');
      }
    }
  });


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
  $('a').on('click',function(event){
    var url = $(this).attr('href'),
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
});
