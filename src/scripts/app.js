var ironDOM = (function (ironDOM)  {
  'use strict';

  var ironDOM = {},
      hasClass, addClass, removeClass, toggleClass;

  var forEach = function(element, classes, functionName) {
    console.log(classes.join().replace(',', ' '));
    console.log(element);
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
    hasClass = function(element, className){
      return element.classList.contains(className);
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
  };

  ironDOM.addClass = function(element, classes) {
    forEach(element, classes, addClass);
  };

  ironDOM.removeClass = function(element, classes) {
    forEach(classes, function(className) {
      removeClass(element, className);
    });

  };

  ironDOM.toggleClass = function(element, classes) {
    forEach(classes, function(className) {
      toggleClass(element, className);
    });
  };

  //window.ironDOM = ironDOM;
  return ironDOM;
}(ironDOM || {}));
