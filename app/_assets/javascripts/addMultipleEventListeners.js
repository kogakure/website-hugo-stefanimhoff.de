/* global s:false, el:false, fn:false */
'use strict';

module.exports = (function() {
  var evts = s.split(' ');
  for (var i = 0, iLen=evts.length; i < iLen; i++) {
    el.addEventListener(evts[i], fn, false);
  }
});
