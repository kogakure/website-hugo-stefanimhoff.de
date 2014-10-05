/*
//= require libs/ios-rotate-scaling-fix
//= require libs/fitvids
//= require main
*/

// var classie = require('classie');
// var addMultipleEventListeners = require('./addMultipleEventListeners');

// var fastclick = require('fastclick');

// var navigation = require('./navigation');
// var smoothScroller = require('./smoothScroller');
// var tracking = require('./tracking');

// navigation.log('Test des navigation moduls');

// require the core node events module
var EventEmitter = require('events').EventEmitter;

//create a new event emitter
var emitter = new EventEmitter();

// set up a listener for the event
emitter.on('pizza', function(message){
  console.log(message);
});

// emit an event
emitter.emit('pizza', 'pizza is extremely yummy');
