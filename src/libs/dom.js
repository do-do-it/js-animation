import event from './event'

var Zepto = (function() {
  var emptyArray = []

  function Dom(dom, selector) {
    for (var i = 0; i < dom.length || 0; i++) this[i] = dom[i]
    this.length = dom.length
    this.selector = selector || ''
  }

  function stringConvertDom(str) {
    var box = document.createElement('div')
    box.innerHTML = str
    return box.children
  }

  var $ = function(selector) {
    var dom
    if (typeof selector === 'string') {
      if (selector.indexOf('<') === 0) {
        dom = stringConvertDom(selector)
      } else {
        dom = document.querySelectorAll(selector)
      }
    } else if (selector instanceof HTMLElement) {
      dom = [selector]
    } else if (selector instanceof Dom) {
      return selector
    } else if (typeof selector === 'function') {
      return window.addEventListener('load', selector)
    }
    return new Dom(dom, selector)
  }

  Dom.prototype = {
    constructor: Dom,
    each: function(callback) {
      emptyArray.every.call(this, function(el, idx) {
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    eq: function(index) {
      return $(this[index])
    },
    append: function(html) {
      var node
      if (html instanceof HTMLElement) {
        node = [html]
      } else if (typeof html === 'string') {
        node = stringConvertDom(html)
      } else if (html instanceof Dom) {
        node = html
      } else {
      }
      this.each(function(i, el) {
        for (let index = 0; index < node.length; index++) {
          el.appendChild(node[index])
        }
      })
    },
    text: function() {
      let txt = ''
      this.each(function(i, el) {
        txt = el.innerHTML
      })
      return txt
    },
    addClass: function(className) {
      this.each(function(i, el) {
        el.classList.add(className)
      })
      return this
    },
    removeClass: function(className) {
      this.each(function(i, el) {
        el.classList.remove(className)
      })
      return this
    },
    toggleClass: function(className) {
      this.each(function(i, el) {
        el.classList.toggle(className)
      })
      return this
    },
    css: function(property, value) {
      if (typeof property === 'object') {
        for (const key in property) {
          this.each(function(i, el) {
            el.style[key] = property[key]
          })
        }
      } else {
        this.each(function(i, el) {
          el.style[property] = value
        })
      }
    },
    on: function(type, listener) {
      this.each(function(i, el) {
        event.on(el, type, listener)
      })
    },
    off: function(type, listener) {
      this.each(function(i, el) {
        event.off(el, type, listener)
      })
    }
  }
  return $
})()

export default Zepto
