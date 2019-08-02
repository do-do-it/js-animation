const _requestAnimationFrame = requestAnimationFrame
const _cancelAnimationFrame = cancelAnimationFrame

class Ticker {
  constructor() {
    this.events = []
    this.id = null
    this.started = false
    this.last = 0
  }
  start() {
    const 
      now = performance.now(),
      last = this.last ? this.last : now,
      dt = now - last
    
    this.last = now
    for (let i = 0; i < this.events.length; i++) this.events[i](dt)
    this.id = _requestAnimationFrame(this.start.bind(this))
    if (!this.events.length) {
      this.stop()
    }
  }
  add(event) {
    this.events.push(event)
    if (!this.started) {
      this.started = true
      this.start()
    }
  }
  remove(event) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i] === event) {
        this.events.splice(i, 1)
        break
      }
    }
    if (this.started && !this.events.length) {
      _cancelAnimationFrame(this.id)
    }
  }
  stop() {
    _cancelAnimationFrame(this.id)
    this.events = []
    this.started = false
    this.last = 0
    this.id = null
  }
}

export default new Ticker()