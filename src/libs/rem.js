(function () {
  var dc = document.documentElement

  var mt = document.createElement("meta")
  mt.name = "viewport"
  mt.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no,viewport-fit=cover"
  dc.firstElementChild.appendChild(mt)

  var autoSizie = function () {
    var dw = dc.clientWidth
    var dpr = Math.min(window.devicePixelRatio, 3)
    // dw / dpr > 750 && (dw = 750 * dpr)
    window.remScale = dw / 750
    dc.style.fontSize = 200 * (dw / 750) + "px"
    dc.dataset.dpr = dpr
  }
  autoSizie()
  window.addEventListener('resize', autoSizie, false)
})()
