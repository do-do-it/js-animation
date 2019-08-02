import 'normalize.css'
import './index.less'

import $ from '../../libs/dom'

import ticker from '../../libs/animation/ticker'

const root = $('#root')

function createball(n) {
  const balls = []
  for (let i = 0; i < n; i++) {
    const ball = $(`<div class="ball" style="top:${i * 50}px"></div>`)
    root.append(ball)
    balls.push(ball)
  }
  return balls
}

createball(5)

const b = 600
let y = 0
const move = (dt) => {
  console.log(dt)
  y += Math.ceil((b - y) * dt / 1000)
  $('.ball').css('left', y + 'px')
  if (y >= b) {
    console.log('stop')
    ticker.stop()
  }
}
document.addEventListener('click', () => {
  ticker.add(move)
})

