ironDOM
=======

ironDom is an Micro JavaScript library for DOM manipulation. It has no dependencies.

[Checkout the demo.](http://irondom.github.io/ironDOM-class-module)

## Browser Support
ironDOM uses ES5 features.

Browser support Desktop is:
- IE10 and higher
- Firefox 34 and higher
- Chrome 39 and higher
- Chromium 41 and higher
- Safari 3.2 and higher
- Opera 10 and higher

## Performance

See performance in [performance.md](https://github.com/ironDOM/ironDOM-class-module/blob/master/performance.md)


## How to use

ironDOM class module

### Create an selector:
```
  var li = myAddClass = document.querySelector('.addClass'),
      myHasClass = document.querySelector('.hasClass'),
      myRemoveClass = document.querySelector('.removeClass'),
      myToggleClass = document.querySelector('.toggleClass');
```

### Add an class handler:
```
  ironDOM.hasClass(myHasClass, 'hasClass');
  ironDOM.addClass(myAddClass, 'green');
  ironDOM.removeClass(myRemoveClass, 'red');
  
  // ironDOM toggleclass with an onclick event
  document.querySelector('.test_toggleClass').onclick = function() {
    ironDOM.toggleClass(myToggleClass, 'green');
  }
```

### Add html
```
        // Add script
        <script src="scripts/irondom.js"></script>
        <button class="test_toggleClass">Test ironDOM.toggleClass()</button>
        <ol>
          <li class="addClass"> if the ironDOM.addClass is loaded this is green</li>
          <li class="removeClass red"> if the ironDOM.removeClass is loaded this is green</li>
          <li class="hasClass"> if the ironDOM.hasClass is loaded this is green</li>
          <li class="toggleClass"> if the ironDOM.toggleClass is loaded this is green</li>
        </ol>

```
