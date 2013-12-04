var timer,
    position = $(window).scrollTop(),
    url = window.location.href;

$(function() {

  // FastClick
  // =========
  FastClick.attach(document.body);


  // Widon't on all text
  // ===================
  $(".page article h1, .post article h1, .page article h2, .post article h2, .page article h3, .post article h3").widont();


  // Fitvids
  // =======
  $(".container").fitVids();


  // Navigation
  // ==========
  // Open navigation by clicking on "open"
  $(".nav-btn").on("click", function(event) {
    $("body").toggleClass("navigation-is-open");
    event.preventDefault();
  });

  // Close navigation by clicking on "close"
  $(".nav-close-btn").on("click", function(event) {
    $("body").removeClass("navigation-is-open");
    event.preventDefault();
  });

  // Close navigation by clicking somewhere in main column
  $(".main").on("click", function() {
    $("body").removeClass("navigation-is-open");
  });

  // Close navigation after 1.5s after leaving the navigation
  $("#nav").on("mouseleave", function() {
    timer = window.setTimeout(function() {
      $("body").removeClass("navigation-is-open");
    }, 1500);
  });

  // Stop timeout that closes the navigation when entering the navigation (again)
  $("#nav").on("mouseenter", function() {
    if (timer) {
      clearTimeout(timer);
    }
  });


  // Hightlight current navigation item
  // ==================================
  $('#nav a').filter(function() {
      return this.href == url;
  }).addClass('navigation-is-active');


  // Scroll smoothly to the top of the page
  // ======================================
  $("#top-link").on("click", function(event) {

    // debugger;
    position = $(window).scrollTop(); // Get the scroll position

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

});
