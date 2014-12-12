//var bg = document.querySelector('#twitterController'),
//  button = document.querySelector('.fireme');
//
//// kDom.addClass(bg, 'found');
//
//function myFunction() {
//  kDom.toggleClass(bg, 'found');
//}
//button.addEventListener('click', myFunction);
//
//if ( 'querySelector' in document && 'addEventListener' in window ) {
//  console.log('querySelector' in document);
//  console.log('addEventListener' in window);
//}



(function (window, document, undefined) {
  'use strict';

  var li = document.querySelectorAll('li'),
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
    console.log('hasRed');
    ironDOM.removeClass(removeClass, 'red');
    ironDOM.addClass(removeClass, 'green');
  }

  document.querySelector('.test_toggleClass').onclick = function() {
    ironDOM.toggleClass(toggleClass, 'green');
  }

})(window, document);


