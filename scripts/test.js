(function (window, document, ironDOM, undefined) {
  'use strict';

  var listItem = document.querySelector('li'),
      listItems = document.querySelectorAll('li'),
      mytoggleClassElem = document.querySelectorAll('.toggleClass'),
      myButton = document.querySelectorAll('#button');


  myButton.onclick = function() {
    console.log('click');
    ironDOM.toggleClass(mytoggleClassElem, ['blue']);
  };

  ironDOM.multiElements(listItems, function () {
    if(ironDOM.hasClass(this, ['addClass'])) {
      ironDOM.removeClass(this, ['red'])
      ironDOM.addClass(this, ['green', 'ironDOM']);
    }
  });

  ironDOM.multiElements(listItems, function () {
    if(ironDOM.hasClass(this, ['removeClass'])) {
      ironDOM.removeClass(this, ['red'])
      ironDOM.addClass(this, ['green', 'ironDOM']);
    }
  });

  ironDOM.multiElements(listItems, function () {
    if(ironDOM.hasClass(this, ['hasClass'])) {
      ironDOM.removeClass(this, ['red'])
      ironDOM.addClass(this, ['green', 'ironDOM']);
    }
  });

  ironDOM.multiElements(listItems, function () {
    if(ironDOM.hasClass(this, ['toggleClass'])) {
      ironDOM.removeClass(this, ['red'])
      ironDOM.addClass(this, ['green', 'ironDOM']);
    }
  });


})(window, document, ironDOM);


