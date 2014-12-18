var ironDOM = (function (ironDOM)  {
  'use strict';

  var hasClass, addClass, removeClass, toggleClass;

  var forEach = function(element, classes, functionName) {
    //console.log('element: ', element);
    //console.log('classes: ', classes);
    //console.log('functionName: ', functionName);

    if(typeof element === 'object' && element !== '') {
      var j;
      for (j = 0; j < classes.length; j++) {
        functionName(element, classes[j]);
      }
    } else {
      console.log('else');
      functionName(element, classes.join().split(','));
    }
  }

  if ('classList' in document.documentElement) {
    hasClass = function(element, classes){
      var j;
      for (j = 0; j < classes.length; j++) {
        return element.classList.contains(classes[j]);
      }
    };

    addClass = function(element, className) {
      return element.classList.add(className);
    };

    removeClass = function(element, className) {
      return element.classList.remove(className);
    };

    toggleClass = function(element, className) {
      return element.classList.toggle(className);
    }
  }

  ironDOM.hasClass = function(element, className) {
    return hasClass(element, className);
    //forEach(element, classes, hasClass);
  };

  ironDOM.addClass = function(element, classes) {
    forEach(element, classes, addClass);
  };

  ironDOM.removeClass = function(element, classes) {
    forEach(element, classes, removeClass);
  };

  ironDOM.toggleClass = function(element, classes) {
    forEach(element, classes, toggleClass);
  };

  ironDOM.multiElements = function(elements, callback) {
    var i;
    for (i = 0; i < elements.length; ++i) {
      callback.call(elements[i]);
    }
  };

  return ironDOM;
}(ironDOM || {}));
