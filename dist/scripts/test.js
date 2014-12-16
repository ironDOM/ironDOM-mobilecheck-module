(function (window, document, ironDOM, undefined) {
  'use strict';

  var listItem = document.querySelectorAll('li'),
      myaddClassElem = document.querySelector('.addClass'),
      myhasClassElem = document.querySelector('.hasClass'),
      myremoveClassElem = document.querySelector('.removeClass'),
      mytoggleClassElem = document.querySelector('.toggleClass'),
      myButton = document.querySelector('.test_toggleClass');

  ironDOM.addClass(listItem, ['blue','grey']);
  //var i, j;
  //for(i = 0; i < listItem.length; i++) {
  //  console.log('been there');
  //  console.log('been there to');
  //}

  //ironDOM.addClass(myaddClassElem, 'green');
  //if(ironDOM.hasClass(myhasClassElem, 'hasClass')) {
  //  ironDOM.addClass(myhasClassElem, 'green');
  //}
  //if(ironDOM.hasClass(myremoveClassElem, 'red')) {
  //  ironDOM.removeClass(myremoveClassElem, 'red');
  //  ironDOM.addClass(myremoveClassElem, 'green');
  //}
  //
  //myButton.onclick = function() {
  //  ironDOM.toggleClass(mytoggleClassElem, 'green');
  //}

})(window, document, ironDOM);


