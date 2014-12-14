ironDOM
=======

ironDom is an Micro JavaScript library for DOM manipulation. It has no dependencies.

## Browser Support
ironDOM uses ES5 features.

Browser support Desktop is:
- IE8 and higher
- Firefox 3.5 and higher
- Chrome 1 and higher
- Safari 3.2 and higher
- Opera 10 and higher

Browser support Mobile is:
- Android 2.1
- Firefox all
- IE10
- Safari 3.2



## How to use

ironDOM class handler

### Create an selector:
```
  var li = addClass = document.querySelector('.addClass'),
      hasClass = document.querySelector('.hasClass'),
      removeClass = document.querySelector('.removeClass'),
      toggleClass = document.querySelector('.toggleClass');
```

### Add an class handler:
```
  ironDOM.hasClass(hasClass, 'hasClass');
  ironDOM.addClass(addClass, 'green');
  ironDOM.removeClass(removeClass, 'red');
  
  // ironDOM toggleclass with an onclick event
  document.querySelector('.test_toggleClass').onclick = function() {
    ironDOM.toggleClass(toggleClass, 'green');
  }
```
