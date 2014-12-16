var ironDOM = (function (ironDOM)  {
  'use strict';

  var ironDOMclassModule = {};

  ironDOM.hasClass = function(element, className) {
    return new RegExp(' ' + className + ' ').test(' ' + element.className + ' ');
  };

  ironDOM.addClass = function(element, className) {
    if (!ironDOM.hasClass(element, className)) {
      element.className += ' ' + className;
    }
  };

  ironDOM.removeClass = function(element, className) {
    var newClass = ' ' + element.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (ironDOM.hasClass(element, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      element.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  };

  ironDOM.toggleClass = function(element, className) {
    var newClass = ' ' + element.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (ironDOM.hasClass(element, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
        newClass = newClass.replace( ' ' + className + ' ' , ' ' );
      }
      element.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
      element.className += ' ' + className;
    }
  };

  //window.ironDOM = ironDOM;
  return ironDOM;
}(ironDOM || {}));
