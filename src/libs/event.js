export default {
  on(el, type, listener) {
    el.addEventListener(type, listener)
  },
  off(el, type, listener) {
    el.removeEventListener(type, listener)
  }
}