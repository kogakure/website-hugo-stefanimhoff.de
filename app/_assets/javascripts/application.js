//= require libs/ios-rotate-scaling-fix
//= require libs/fitvids
//= require main

var fastclick = require('fastclick');
var classie = require('classie');
var addMultipleEventListeners = require('./addMultipleEventListeners');

var navigation = require('./navigation');
var smoothScroller = require('./smoothScroller');
var tracking = require('./tracking');

navigation.log('Test des navigation moduls');

smoothScroller.scrollSmoothlyToTop();
tracking.trackLinksWithGoogleAnalytics();
