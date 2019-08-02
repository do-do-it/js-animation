import 'normalize.css'
import './index.less'

function debounce(fn, delay) {
  let timer
  return function() {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

function throttle(fn, delay) {
  let last = performance.now()
  let now = last
  return function() {
    now = performance.now()
    if (now - last >= delay) {
      last = now
      fn()
    }
  }
}

function action(fn, delay) {
  let last = performance.now()
  let now = last
  let timer
  return function() {
    now = performance.now()
    if (now - last < delay) {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn()
      }, delay)
    } else {
      last = now
      fn()
    }
  }
}

function load() {
  console.log('loading')
}

const debounceLoad = debounce(load, 50)
const throttleLoad = throttle(load, 1000)
const rightLoad = action(load, 100)

window.addEventListener('scroll', load)

function task1() {
  console.log(1)
}

function task2() {
  console.log(2)
}

setTimeout(task1, 0)
Promise.resolve().then(task2)