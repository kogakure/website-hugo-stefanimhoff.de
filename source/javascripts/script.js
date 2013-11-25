$(function() {
  // FastClick
  FastClick.attach(document.body);

  // Widon't on all text
  $(".page article p, .post article p, .page article li, .post article li, .page article dd, .post article dd, .page article dt, .post article dt, .page article h1, .post article h1, .page article h2, .post article h2, .page article h3, .post article h3, .page article h4, .post article h4, .page article h5, .post article h5, .page article h6, .post article h6").widont();

  // Fitvids
  $(".container").fitVids();

  // Navigation (@TODO: temporary)
  $(".nav-btn").on("click", function(event) {
    $("body").toggleClass("navigation--open");
    event.preventDefault();
  });

  $(".nav-close-btn").on("click", function(event) {
    $("body").removeClass("navigation--open");
    event.preventDefault();
  });

  $(".main").on("click", function() {
    $("body").removeClass("navigation--open");
  });

  $(".main").on("mouseenter", function() {
    window.setTimeout(function() {
      $("body").removeClass("navigation--open");
    }, 2000);
  });
});
