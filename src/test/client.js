(function (window, document, ironDOM, undefined) {
  'use strict';

  var listItem = document.querySelectorAll('li'),
      mytoggleClassElem = document.querySelectorAll('.toggleClass'),
      myButton = document.querySelectorAll('#test_toggleClass');

  ironDOM.addClass(listItem, ['ironDOM', 'nice', 'ironDOM', 'nice']);
  console.log(ironDOM.hasClass(listItem, ['addClass']));
  if(ironDOM.hasClass(listItem, ['addClass'])) {
    ironDOM.removeClass(listItem, ['red']);
    ironDOM.addClass(listItem, ['green']);
  }

  myButton.onclick = function() {
    ironDOM.toggleClass(mytoggleClassElem, ['blue']);
  }

})(window, document, ironDOM);


