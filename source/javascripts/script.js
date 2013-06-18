$(function() {
  // FastClick
  FastClick.attach(document.body);

  // Widon't on all text
  $(".page p,  .post p, .page li, .post li, .page dd, .post dd, .page dt, .post dt, .page h1, .post h1, .page h2, .post h2, .page h3, .post h3, .page h4, .post h4, .page h5, .post h5, .page h6, .post h6").widont();

  // Fitvids
  $(".article").fitVids();
});
