import { tween } from 'popmotion'

export default class {
  constructor({ background, process, font, data} = {}) {
    this.container = document.body
    this.background = background || {
      color: '#ffece7'
    }
    this.process = process || {
      r: 100,
      width: 8,
      color: '#f43160',
      lineCap: 'round' // butt, round, square
    }
    if (font && font.style) {
      font.style = '{v} %'
    }
    this.font = font
    this.data = data || {
      from: 0.4,
      to: 1,
      duration: 30000
    }
    this.init()
  }
  init() {
    this.cas = document.createElement('canvas')
    this.ctx = this.cas.getContext('2d')
    this.setup()
  }
  setup() {
    const { container, cas, process, data } = this
    cas.width = process.r * 2
    cas.height = process.r * 2
    container.appendChild(cas)
    this.drawBackground()
    this.drawProcess(data.from)
    this.drawFont(data.from)
  }
  drawBackground() {
    const { ctx, process, background } = this
    ctx.beginPath()
    ctx.arc(process.r, process.r, process.r - process.width, -0.5 * Math.PI, 1.5 * Math.PI)
    ctx.lineWidth = process.width
    ctx.strokeStyle = background.color
    ctx.stroke()
    ctx.closePath()
  }
  drawProcess(v = 0) {
    const { ctx, process } = this
    ctx.beginPath()
    ctx.arc(process.r, process.r, process.r - process.width, -0.5 * Math.PI, v * 2 * Math.PI - 0.5 * Math.PI)
    ctx.lineCap = process.lineCap
    ctx.lineWidth = process.width
    ctx.strokeStyle = process.color
    ctx.stroke()
    ctx.closePath()
  }
  drawFont(v) {
    const { ctx, font, process } = this
    if (!font) return
    ctx.beginPath()
    ctx.font = font.size + 'px'
    const txt = font.style.replace('{v}', v * 100 << 0.1)
    ctx.strokeStyle = font.color
    ctx.textBaseline = 'middle'
    const measureTxt = ctx.measureText(txt)
    ctx.fillText(txt, process.r - measureTxt.width / 2, process.r)
    ctx.closePath()
    console.log()
  }
  clear() {
    const { ctx, process } = this
    ctx.clearRect(0, 0, process.r * 2, process.r * 2)
  }
  start() {
    tween(this.data).start({
      update: v => {
        this.clear()
        this.drawBackground()
        this.drawProcess(v)
        this.drawFont(v)
      }
    }) 
  }
}