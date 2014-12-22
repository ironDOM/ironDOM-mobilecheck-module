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
- Safari 5 and higher
- Opera 12.17 and higher

## Performance

See performance in [performance.md](https://github.com/ironDOM/ironDOM-class-module/blob/master/performance.md)


## How to use ironDOM class module

### Add html
```
  // Add script
        
  <div class="test">
    <h2>Testing ironDOM class module</h2>
    <button id="button">#toggleClass</button>
    <button id="button2">.toggleClass</button>
    <button id="button3">Hide/Show with toggleClass()</button>
    <ol>
      <li class="toggleClass red"> .toggleClass</li>
      <li class="addClass red">.addClass</li>
      <li class="removeClass red"> .removeClass</li>
      <li class="hasClass red"> .hasClass</li>
      <li id="toggleClass" class="red"> #toggleClass</li>
      <li class="addClass red"> .addClass</li>
      <li class="removeClass red"> .removeClass</li>
      <li class="hasClass red"> .hasClass</li>
      <li class="toggleClass red"> .toggleClass</li>
    </ol>
  </div>
  
  <script src="scripts/irondom.js"></script>
  <script src="scripts/yourscript.js"></script>
  
```

### Add this to a javascript file
```

  (function (window, document, ironDOM, undefined) {
    'use strict';
  
    var listItem = document.querySelector('li'),
        listItems = document.querySelectorAll('li'),
        mytoggleIDelem = document.querySelector('#toggleClass'),
        mytoggleClassElem = document.querySelectorAll('.toggleClass'),
        myButton = document.querySelector('#button'),
        myButton2 = document.querySelector('#button2'),
        myButton3 = document.querySelector('#button3');
  
  
    myButton.addEventListener("click", function() {
      ironDOM.toggleClass(mytoggleIDelem, ['green']);
      ironDOM.toggleClass(mytoggleIDelem, ['red']);
    });
    myButton2.addEventListener("click", function() {
      ironDOM.multiElements(mytoggleClassElem, function () {
        ironDOM.toggleClass(this, ['green']);
        ironDOM.toggleClass(this, ['red']);
      });
    });
    myButton3.addEventListener("click", function() {
      ironDOM.multiElements(listItems, function () {
        ironDOM.toggleClass(this, ['ironDOM']);
      });
    });
  
  
    ironDOM.multiElements(listItems, function () {
  
      ironDOM.addClass(this, ['ironDOM']);
  
      if(ironDOM.hasClass(this, ['addClass'])) {
  
        ironDOM.removeClass(this, ['red']);
        ironDOM.addClass(this, ['green']);
  
      } else if (ironDOM.hasClass(this, ['removeClass'])) {
  
        ironDOM.removeClass(this, ['red']);
        ironDOM.addClass(this, ['green']);
  
      } else if (ironDOM.hasClass(this, ['hasClass'])) {
  
        ironDOM.removeClass(this, ['red']);
        ironDOM.addClass(this, ['green']);
  
      }
    });
  
  
  })(window, document, ironDOM);


```

You could also check the [Dist folder for an example](https://github.com/ironDOM/ironDOM-class-module/tree/master/dist)! 


## Documentation

ironDOM class module has a few methods

### ironDOM.addClass

You can add a 1 class to 1 element
`ironDOM.addClass(element, ['className']);`

You can add 1 or multiple classes to multiple elements
```

    ironDOM.multiElements(listItems, function () {
  
      ironDOM.addClass(this, ['ironDOM', 'otherClass']);
    
    });

```
