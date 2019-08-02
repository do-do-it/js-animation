export default function(global, img) {
  global.resource = new Image()
  global.onload = function() {
    global.isReady = true
  }
  global.resource.src = img
}