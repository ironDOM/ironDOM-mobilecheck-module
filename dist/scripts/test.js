(function (window, document, ironDOM, undefined) {
  'use strict';

  var li = document.querySelector('li'),
      addClass = document.querySelector('.addClass'),
      hasClass = document.querySelector('.hasClass'),
      removeClass = document.querySelector('.removeClass'),
      toggleClass = document.querySelector('.toggleClass');

  ironDOM.addClass(addClass, 'green');
  ironDOM.addClass(toggleClass, 'green');
  if(ironDOM.hasClass(hasClass, 'hasClass')) {
    ironDOM.addClass(hasClass, 'green');
  }
  if(ironDOM.hasClass(removeClass, 'red')) {
    ironDOM.removeClass(removeClass, 'red');
    ironDOM.addClass(removeClass, 'green');
  }

  document.querySelector('.test_toggleClass').onclick = function() {
    ironDOM.toggleClass(toggleClass, 'green');
  }

})(window, document, ironDOM);


