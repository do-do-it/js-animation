import img from './tree.png'

export default class {
  constructor() {
    this.meta = null
    this.isReady = false
    this.x = 0
    this.y = 0
    this.w = 608
    this.h = 4936
    this.frames = 8
    this.findex = 0
    this.init()
  }
  init() {
    const cas = document.createElement('canvas')
    cas.width = this.w
    cas.height = this.h / this.frames
    cas.style.width = this.w / 2 + 'px'
    cas.style.height = (this.h / this.frames) / 2 + 'px'
    document.getElementById('root').appendChild(cas)
    this.cas = cas
    this.ctx = cas.getContext('2d')
    this.load(img)
  }
  load(img) {
    this.meta = new Image()
    if (this.meta.complete) {
      this.isReady = true
    } else {
      this.meta.onload = () => {
        this.isReady = true
      }
    }
    this.meta.src = img
  }
  start() {
    this.timer = setInterval(() => {
      this.update()
    }, 1000 / 24)
  }
  update() {
    this.draw()
    //更新帧序号
    this.findex = (this.findex + 1) % 8
  }
  draw() {
    const { ctx, w, h, frames, findex } = this
    if (this.isReady) {
      ctx.clearRect(0, 0,  w, h / frames)
      ctx.drawImage(this.meta, 0, findex * 618, w, h / frames, 0, 0, w, h / frames)
    }
  }
}