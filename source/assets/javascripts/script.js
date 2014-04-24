var timer,
    position = $(window).scrollTop(),
    url = window.location.href;

$(function() {

  // FastClick
  // =========
  FastClick.attach(document.body);


  // Widon't on all text
  // ===================
  $(".article-title h1, .article-title h2, .page article h1, .post article h1, .page article h2, .post article h2, .page article h3, .post article h3").widont();


  // Fitvids
  // =======
  $(".container").fitVids();


  // Navigation
  // ==========
  // Open navigation by clicking on "open"
  $(".nav-btn").on("click", function(event) {
    $("body").toggleClass("navigation-is-open");
    event.preventDefault();
    event.stopImmediatePropagation();
  });


  // Close navigation by clicking on "close"
  $(".nav-close-btn").on("click", function(event) {
    $("body").removeClass("navigation-is-open");
    event.preventDefault();
    event.stopImmediatePropagation();
  });


  // Close navigation by clicking somewhere in the content
  // but not on link or if navigation is closed
  $(".container").on("click", function(event) {
    if ($("body.navigation-is-open").length > 0) {
      if(event.target.className != "nav-btn") {
        $("body").removeClass("navigation-is-open");
      }
    }
  });


  // Hightlight current navigation item
  // ==================================
  $('#nav a').filter(function() {
    return this.href == url;
  }).closest("li").addClass('nav-is-active');


  // Scroll smoothly to the top of the page
  // ======================================
  $("#top-link").on("click", function(event) {
    var position = $(window).scrollTop(); // Get the scroll position

    // Set the body top margin
    $("body").css({
      "margin-top": -position+"px",
      "overflow-y": "scroll", // This property is posed for fix the blink of the window width change
    });

    // Make the scroll handle on the position 0
    $(window).scrollTop(0);

    // Add the transition property to the body element
    $("body").css("transition", "all 1s cubic-bezier(0.135, 0.780, 0.215, 1.080)");

    // Apply the scroll effects
    $("body").css("margin-top", "0");

    // Wait until the transition end
    $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function() {
      // Remove the transition property
      $("body").css("transition", "none");
    });

    event.preventDefault();
  });

  // Tracking von Downloads
  // ======================
  $("body").on("click", ".download a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Download', 'click', event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  // Tracking von Links
  // ==============================
  $("body.home").on("click", ".blog a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Blog)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".work a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Work)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".martial-arts a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Martial Arts)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".introvert a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Introvert)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".movie-lover a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Movie)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".book-lover a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Book)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body.home").on("click", ".recommendations a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Homepage (Recommendation)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body").on("click", ".footer .about a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Footer (About)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body").on("click", ".footer .social-networks a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Footer (Social)', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body").on("click", ".footer .icon-feed", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Footer (Feed)', 'click', window.location.pathname);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body").on("click", "#nav a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Navigation', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });

  $("body").on("click", ".article-body a", function(event) {
    var target = event.currentTarget;
    event.preventDefault();
    ga('send', 'event', 'Artikel', 'click', event.target.text + ": " + event.target.href);
    setTimeout(function() {
      location.href = target.href;
    }, 100);
  });
});
