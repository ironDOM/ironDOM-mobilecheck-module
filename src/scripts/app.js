var ironDOM = (function (ironDOM)  {
  'use strict';

  var hasClass, addClass, removeClass, toggleClass;

  var forEach = function(element, classes, functionName) {
    if(typeof element === 'object') {
      for (var i = 0; i < element.length; i++) {
        for (var j = 0; j < classes.length; j++) {
          functionName(element.item(i), classes[j]);
        }
      }
    } else {
      functionName(element, classes.join().split(','));
    }
  }

  if ('classList' in document.documentElement) {
    hasClass = function(element, classes){
      for (var i = 0; i < element.length; i++) {
        for (var j = 0; j < classes.length; j++) {
          console.log(element.item(i));
          return element.item(i).classList.contains(classes);
        }
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

  return ironDOM;
}(ironDOM || {}));
