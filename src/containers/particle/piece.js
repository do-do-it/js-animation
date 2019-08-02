class Piece {
  v = {x: 0, y: 0}

  constructor({cls, node, speed, a, rotation}) {
    const rect = node.getBoundingClientRect()
    const i = document.createElement('i')
    i.classList.add(cls)
    this.node = i
    this.x = rect.left + rect.width / 2
    this.y = rect.top
    this.a = a || .2 // 重力加速度
    this.speed = speed || range(3, 5, true)
    this.rotation = rotation || range(0, Math.PI * 2, true)
    this.v.x = Math.sin(this.rotation) * this.speed
    this.v.y = Math.cos(this.rotation) * this.speed

    // 修复视觉错乱
    this.node.style.top = `${px2rem(this.y)}rem`
    this.node.style.left = `${px2rem(this.x)}rem`

    node.append(this.node)
  }

  update() {
    this.x += this.v.x
    this.y += this.v.y

    this.v.y += this.a

    this.node.style.top = `${px2rem(this.y)}rem`
    this.node.style.left = `${px2rem(this.x)}rem`
  }

  destroy() {
    this.node.remove()
    this.node = null
  }
}

function range(min, max, decimal) {
  const v = min + (max - min) * Math.random()
  return decimal ? v : ~~v
}

function px2rem(i) {
  return i / (window.remScale * 200)
}

export default Piece
