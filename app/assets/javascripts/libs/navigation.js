var navigationLinks = '.nav a';
var url = window.location.href;

module.exports = {
  /**
   * Hightlight current navigation item
   */
  currentNavigationItem: function() {
    var selectedNavigationItem = Array.prototype.filter.call(
      document.querySelectorAll(navigationLinks),
      function(target) {
        return target.href === url;
      }
    );

    return selectedNavigationItem[0];
  }
};
