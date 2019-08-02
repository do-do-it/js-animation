import 'normalize.css'
import './index.less'

import '../../libs/rem'
import $ from '../../libs/dom'
import Piece from './piece'
import { tween } from 'popmotion'

function randomCls(cls) {
  return cls[~~(cls.length * Math.random())]
}

function random(min, max) {
  return ~~(min + (max - min)) * Math.random()
}
class Fireworks {
  constructor({ n = 20 } = {}) {
    this.nodes = []
    this.create(n)
  }
  create(n) {
    for (let i = 0; i < n; i++) {
      this.nodes.push(new Piece({
        cls: randomCls(['cls1', 'cls2', 'cls3']),
        node: document.getElementById('root')
        // node: {
        //   getBoundingClientRect: function() {
        //     return {
        //       left: random(0, 100),
        //       top: random(0, 100),
        //       width: 100
        //     }
        //   }
        // }
      }))
    }
  }
  update() {
    const { nodes } = this
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update()
    }
  }
  destroy() {
    const { nodes } = this
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].destroy()
    }
  }
}

let started = false

$('.btn').on('click', () => {
  if (!started) {
    // started = true
    const fireworks = new Fireworks({
      n: 50
    })
    
    tween({
      duration: 1000
    }).start({
      update: v => fireworks.update(),
      complete: () => {
        // started = false
        fireworks.destroy()
      }
    })
  }
})