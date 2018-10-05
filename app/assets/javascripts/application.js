require("./vendor/ios-rotate-scaling-fix");

var classie = require("classie");
var fitvids = require("fitvids");
var navigation = require("./libs/navigation");

if ("querySelector" in document && "addEventListener" in window) {
  document.addEventListener("DOMContentLoaded", function() {
    // Fitvids
    fitvids(".container");

    // Hightlighting of navigation item
    if (navigation.currentNavigationItem()) {
      classie.add(
        navigation.currentNavigationItem().parentElement,
        "nav-is-active"
      );
    }
  });
}
